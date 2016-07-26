import express from 'express'
import pg from 'pg'
import * as db from './db.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import basicAuth from 'basic-auth'

const app = express()
const portNum = process.env.PORT || 8888

export default app

app.use(cors({ credentials: true, origin: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/createUsersTable', (req, res) => {
  db.createUsersTable().then(() => {
    res.send('yay created table');
  }).catch((err) => {
    res.send(err);
  })
})

app.get('/resetUsers', (req, res) => {
  db.dropUsersTable().then(() => {
    return db.createUsersTable()
  }).then(() => {
    res.send('yay reset tables');
  }).catch((err) => {
    res.send(err);
  })
})

app.get('/dropUsersTable', (req, res) => res.send(db.dropUsersTable()))

app.get('/users', (req, res) => {
  db.getAllUsers().then((users) => {
    res.send(JSON.stringify(users))
  })
})

app.post('/users', (req, res) => {
  const creds = basicAuth(req)
  db.signupUser(creds)
    .then(() => {
      const token = jwt.sign(creds, 'is2gjoe')
      res.cookie('is2gjoe', token, { httpOnly: false })
      res.send({ success: true })
    })
    .catch((err) => {
      res.send({ success: false, err })
    })
})

app.get('/auth', requireAuth, (req, res) => {
  res.send({ success: true, user: req.user })
})

app.post('/login', (req, res) => {
  try {
    const { name, pass } = basicAuth(req)
    db.findUserByEmail(name)
      .then(({ password }) => {
        if (password === pass) {
          const token = jwt.sign({ name, pass }, 'is2gjoe')
          res.cookie('is2gjoe', token, { httpOnly: false })
          return res.send({ success: true })
        }
        return res.send({ success: false })
      })
      .catch((err) => {
        return res.send({ success: false })
      })
  } catch(err) {
    return res.send({ success: false })
  }
})

app.post('/logout', (req, res) => {
  if (req.cookies && req.cookies['is2gjoe']) {
    res.clearCookie('is2gjoe')
    return res.send({ success: true })
  }
  return res.send({ success: false, message: 'No user found' })
})

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/groups', requireAuth, (req, res) => {
  db.getGroups(req.user).then((groups) => {
    res.send(JSON.stringify(groups))
  }).catch((err) => {
    res.send(err)
  })
})

app.post('/groups', requireAuth, (req, res) => {
  db.addGroup(req.body)
    .then((result) => {
      res.send(result)
    })
    .catch((error) => {
      res.send(error)
    })
})

app.delete('/groups/:id', requireAuth, (req, res) => {
  db.deleteGroup(req.params.id)
    .then((result) => {
      res.send(result)
    })
    .catch((error) => {
      res.send(error)
    })
})

app.get('/createItemsTable', (req, res) => {
  db.createItemsTable()
  res.send('yay')
})

app.get('/createGroupsTable', (req, res) => {
  db.createGroupsTable()
    .then((res) => {
      res.send('yay')
    })
    .catch((err) => {
      res.send(err)
    })
})

app.get('/resetGroupsTable', requireAuth, (req, res) => {
  db.dropGroups().then(() => {
    return db.createGroupsTable()
  }).then(() => {
    return res.send('groups table reset!')
  }).catch((err) => {
    res.send(err)
  })
})

app.get('/resetGroups', requireAuth, (req, res) => {
  db.dropItems().then(() => {
    return db.clearGroups()
  }).then(() => {
    return db.createItemsTable()
  // }).then(() => {
  //   return db.addGroup({ name: 'Default', color: '#808080' })
  }).catch((err) => {
    console.log(err)
  })
  res.send('tables reset! remember to get this rid of this endpoint')
})

app.get('/items', requireAuth, (req, res) => {
  db.getItems(req.user).then((items) => {
    res.send(JSON.stringify(items))
  }).catch((err) => {
    console.log(err)
  })
})

app.post('/items', requireAuth, (req, res) => {
  db.addItem(req.body)
    .then((result) => {
      res.send(result)
    })
    .catch((error) => {
      res.send(error)
    })
})

app.post('/items/:id', requireAuth, (req, res) => {
  const id = parseInt(req.params.id)
  if (Number.isInteger(id)) {
    db.addItemWithId(id, req.body)
    .then((result) => {
      res.send(result)
    })
    .catch((error) => {
      res.send(error)
    })
  } else {
    res.send('Incorrect params')
  }
})

app.delete('/items/:id', requireAuth, (req, res) => {
  db.deleteItem(req.params.id)
    .then((result) => {
      res.send(result)
    })
    .catch((error) => {
      res.send(error)
    })
})

app.get('/resetItems', (req, res) => {
  db.dropItems().then(() => {
    return db.createItemsTable()
  }).then(() => {
    res.send('tables reset! remember to get this rid of this endpoint')
  }).catch((error) => {
    res.send(error)
  })
})

app.listen(portNum, () => {
  if (!process.env.PORT) {
    console.log(`Serving port number ${portNum}`)
  }
})

app.post('/query', (req, res) => {
  db.query(req.body.query).then((result) => {
    res.send(result)
  }).catch((err) => {
    res.send(err)
  })
})

function requireAuth(req, res, next) {
  try {
    const { name: email, pass } = jwt.verify(
      req.cookies['is2gjoe'], 'is2gjoe')
    db.findUserByEmail(email).then(({ password }) => {
      if (password === pass) {
        req.user = email
        // TODO: only set on post
        req.body['user_email'] = email
        return next()
      }
      return res.send({ success: false, message: 'Authentication failed' })
    }).catch((err) => {
      res.send({ success: false, message: 'Authentication failed' })
    })
  } catch(err) {
    res.send({ success: false, message: 'Authentication failed' })
  }
}

