const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(express.json())

app.use((req, res, next) => {
    console.log(new Date());

    next();
});

app.use(express.static(__dirname + "/public"));

// Serving HTML-file
app.get("/", (req, res) => {
    res.sendFile("index.html");
});

// Handling API-request
app.get("/api", async (req, res) => {
    // ... Fetch data from database and send in response
     
        database.collection('dogs').find().toArray(function (error, result) {
            if (error) throw error
            res.send(result);
        })
});


app.listen(3000, () => {
    MongoClient.connect('mongodb://localhost:27017/dogsattribute', {useNewUrlParser:true}, (error, result) =>{
     if(error) throw(error)
     database = result.db('dogsattribute')
     console.log('connection on')
      })
    console.log("Server running on port " + 3000);
});