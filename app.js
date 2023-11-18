const express = require("express")
const mysql = require("mysql")

const app = express()

app.set("view engine", "ejs")
app.set("views", "views")

const db = mysql.createConnection({
    host:"localhost",
    database:"target",
    user:"root",
    password:""
})


db.connect((err) => {
    if (err) throw err
    console.log("Server Target : 30 down")

    const sql = "SELECT * FROM user"
    db.query(sql, (err, result) => {
        const users = JSON.parse(JSON.stringify(result))
        console.log("Target list = ", users)
        app.get("/", (req, res) => {
          res.send(users)  
        })
    })

    

})

app.listen(3000, () => {
    console.log("Connected to Server:port3000")
})