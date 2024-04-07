const { Pool } = require('pg')
import dotenv from 'dotenv'

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

pool.connect((err) => {
    if (err) throw err
    console.log("connect to database")
})

export default pool