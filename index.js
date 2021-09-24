const express = require('express')

const app = express();

app.get('/', function (req, res) {
    res.json({ status: 200, mesage: 'Hello world' })
});


app.get('/about-me', function (req, res) {
    res.json({ status: 200, mesage: 'Hello, my name is Dong Nguyen. Nice to meet you.' })
});

app.listen(4001, function () {
    console.log(`Server is running on port 4001`);
});
