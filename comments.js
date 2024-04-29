// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// create a route
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// listen to the port
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});