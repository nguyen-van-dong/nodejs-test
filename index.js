const express = require('express')

const app = express();

app.get('/', function (req, res) {
    res.json({ status: 200, mesage: 'Hello world' })
});

app.listen(4001, function () {
    console.log(`Server is running on port 4001`);
})