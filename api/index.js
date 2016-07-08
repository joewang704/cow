import express from 'express'
import pg from 'pg'
import * as db from './db.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const portNum = process.env.PORT || 8888

export default app

app.use(cors({ credentials: true, origin: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/groups', (req, res) => {
  db.getGroups().then((groups) => {
    res.send(JSON.stringify(groups))
  }).catch((err) => {
    res.send(err)
  })
})

app.post('/groups', (req, res) => {
  db.addGroup(req.body)
    .then((result) => {
      res.send(result)
    })
    .catch((error) => {
      res.send(error)
    })
})

app.get('/resetGroups', (req, res) => {
  db.dropItems().then(() => {
    return db.clearGroups()
  }).then(() => {
    return db.createItemsTable()
  }).then(() => {
    return db.addGroup({ name: 'Default', color: '#808080' })
  }).catch((err) => {
    console.log(err)
  })
  /*db.clearGroups().then(() => {
    return db.addGroup({ name: 'Default', color: '#808080' })
  }).catch((err) => {
    console.log(err)
  })*/
  res.send('tables reset! remember to get this rid of this endpoint')
})

app.get('/items', (req, res) => {
  db.getItems().then((items) => {
    res.send(JSON.stringify(items))
  }).catch((err) => {
    console.log(err)
  })
})

app.post('/items', (req, res) => {
  db.addItem(req.body)
    .then((result) => {
      res.send(result)
    })
    .catch((error) => {
      res.send(error)
    })
})


app.post('/items/:id', (req, res) => {
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


app.delete('/items/:id', (req, res) => {
  db.deleteItem(req.params.id)
    .then((result) => {
      res.send(result)
    })
    .catch((error) => {
      res.send(error)
    })
})

app.get('/resetItems', (req, res) => {
  /*db.createItemsTable().then(() => {
    res.send('yay')
  }).catch((error) => {
    res.send(error)
  })*/
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
