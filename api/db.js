import pg from 'pg'
import pgp from 'pg-promise'

// database connection
const user = 'postgres'
const pass = 'pg-chatapp'
const serverAddr = '54.152.234.67:5432'
const database = 'postgres'

const conString = `postgres://${user}:${pass}@${serverAddr}/${database}`

const db = pgp()(conString)

export const query = (query, params) => db.any(query, params)

export const queryOnce = (query, params) => db.one(query, params)

export const queryC = (query) => {
  pg.connect(conString, (err, client, done) => {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query(query, function(err, result) {
      //call `done()` to release the client back to the pool
      done()

      if (err) {
        return console.error('error running query', err)
      }
      console.log(result)
    })
  })
}

export const selectUsers = () => {
  pg.connect(conString, (err, client, done) => {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM users', function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if (err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0]);
    })
  })
}

export const peen = () => {
  pg.connect(conString, (err, client, done) => {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM users', function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if (err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0]);
    })
  })
}

// groups

export const dropGroups = () => {
  return query('DROP TABLE groups')
}

export const clearGroups = () => {
  return query('TRUNCATE TABLE groups')
}

export const createGroupsTable = () => {
  return query(`CREATE TABLE groups(
        id SERIAL PRIMARY KEY,
        color char(7) NOT NULL,
        name varchar(255) NOT NULL
      )`)
}

export const addGroup = ({ color, name }) => {
  return queryOnce(`INSERT INTO groups VALUES (default, '${color}', '${name}') RETURNING id;`)
}

export const getGroups = () => {
  return query('SELECT * from groups')
}

// items
export const dropItems = () => {
  return query('DROP TABLE items')
}

export const createItemsTable = () => {
  // TODO: change group_id int references groups(id)
  // to group_id int references groups(id) ON DELETE CASCADE
  // to get todo deletion on group deletion working
  return query(`CREATE TABLE items(
        id SERIAL PRIMARY KEY,
        text varchar(255) NOT NULL,
        start_time timestamp,
        end_time timestamp,
        checkable boolean NOT NULL,
        group_id int references groups(id)
      )`)
}

export const getItems = () => {
  return query('SELECT * from items')
}

export const addItem = ({ text, start_time = null, end_time = null, checkable, group_id = null }) => {
  return queryOnce(`INSERT INTO items (text, start_time, end_time, checkable, group_id)
    VALUES ($1, ${start_time}, ${end_time}, ${checkable}, ${group_id})
    RETURNING id;`, [text])
}

export const addItemWithId = (id, { text, start_time = null, end_time = null, checkable, group_id }) => {
  return queryOnce(`INSERT INTO items (text, start_time, end_time, checkable, group_id, id)
    VALUES ('${text}', ${start_time}, ${end_time}, ${checkable}, ${group_id}, ${id})
    RETURNING id;`)
}

export const deleteItem = (id) => {
  return queryOnce(
    `DELETE FROM items WHERE id = ${id}
    RETURNING id;`
  )
}
