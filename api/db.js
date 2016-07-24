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

// groups

export const dropGroups = () => {
  return query('DROP TABLE groups')
}

export const clearGroups = () => {
  return query('TRUNCATE TABLE groups')
}

export const createGroupsTable = () => {
  // TODO: change user_email int references users(email)
  // to user_email int references users(email) ON DELETE CASCADE
  // to get group deletion on user deletion working
  return query(`CREATE TABLE groups(
    id SERIAL PRIMARY KEY,
    color char(7) NOT NULL,
    name varchar(255) NOT NULL,
    user_email varchar(255) references users(email)
  )`)
}

export const addGroup = ({ color, name, user_email }) => {
  return queryOnce(
    `INSERT INTO groups
    VALUES (default, '${color}', '${name}', '${user_email}') RETURNING id;`
  )
}

export const getGroups = (email) => {
  return query(`SELECT * from groups WHERE user_email='${email}'`)
}

// items

export const dropItems = () => {
  return query('DROP TABLE items')
}

export const createItemsTable = () => {
  // TODO: change group_id and user_email int references groups(id)
  // to group_id int references groups(id) ON DELETE CASCADE
  // to get todo deletion on group deletion working
  return query(`CREATE TABLE items(
        id SERIAL PRIMARY KEY,
        text varchar(255) NOT NULL,
        start_time timestamp,
        end_time timestamp,
        checkable boolean NOT NULL,
        group_id int references groups(id),
        user_email varchar(255) references users(email)
      )`)
}

export const getItems = (email) => {
  return query(`SELECT * from items WHERE user_email='${email}'`)
}

export const addItem = ({
  text, start_time = null, end_time = null, checkable, group_id = null, user_email
}) => {
  return queryOnce(`INSERT INTO items (text, start_time, end_time, checkable, group_id, user_email)
    VALUES ($1, ${start_time}, ${end_time}, ${checkable}, ${group_id}, '${user_email}')
    RETURNING id;`, [text])
}

export const addItemWithId = (id, { text, start_time = null, end_time = null, checkable, group_id, user_email }) => {
  return queryOnce(`INSERT INTO items (text, start_time, end_time, checkable, group_id, id, user_email)
    VALUES ('${text}', ${start_time}, ${end_time}, ${checkable}, ${group_id}, ${id}, '${user_email}')
    RETURNING id;`)
}

export const deleteItem = (id) => {
  return queryOnce(
    `DELETE FROM items WHERE id = ${id}
    RETURNING id;`
  )
}

// users

export const createUsersTable = () => {
  return query(`CREATE TABLE users(
    email varchar(255) NOT NULL PRIMARY KEY,
    password varchar(255) NOT NULL
  );`)
}

export const dropUsersTable = () => query('DROP TABLE users;')

export const findUserByEmail = (email) => {
  return queryOnce(
    `SELECT * FROM users WHERE email = '${email}';`
  )
}

export const getAllUsers = (email) => query('SELECT * FROM users;')

export const signupUser = ({ name, pass }) => {
  return query(`INSERT INTO users (email, password)
    VALUES ('${name}', '${pass}')`)
}
