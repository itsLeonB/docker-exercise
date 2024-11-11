import express from 'express'
import mariadb from 'mariadb'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const pool = mariadb.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD,
        connectionLimit: 5
    });
    pool.getConnection()
        .then(conn => {
            res.send('Well done you have dockerized your first application!')
        })
        .catch(err => {
            res.send('Error connecting to database. If you need additional help you can reach out to us on Google Spaces.')
        });
})

app.listen(port, () => {
    console.log(`Example app listening on localhost:${port}`)
})
