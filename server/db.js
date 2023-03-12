//connect to database

const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: FV4af1ckPMkODoOG,
  password: 4rh4ua8xUU0LRvOK,
  host: todoapp-1zljl-postgresql.todoapp-1zljl.svc.cluster.local,
  port: 5432,
  database: 'todoapp'

})

module.exports = pool
