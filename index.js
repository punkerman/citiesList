const express = require('express');
const cities = require('./city.list.json');
const app = express()
const port = 3128;


app.use(allowCorsMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/cities', (req, res) => {
    res.send(cities)
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

function allowCorsMiddleware(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}