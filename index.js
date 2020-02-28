const express = require('express')

const fetchData = require('./util/fetch-util')

const app = express()

app.get('/api', async (req,res)=>{
    const data = await fetchData();
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.send(data);
})

const port = 8080

app.listen(port, console.log("server is running on port  : " + port))