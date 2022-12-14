const express = require('express');
const path = require('path');

const app = express();

//endpoints
app.get('/', (req, res) => {
    //This is where we type the path
    res.sendFile(path.join(__dirname, "../client/index.html"))
})
//This is how Heroku finds your html file^^^
//__dirname(current directory name) is the location of server.js

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/styles.css"))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/client.js"))
})

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});