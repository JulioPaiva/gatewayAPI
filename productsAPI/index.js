const app = require('express')();

app.get('/products', (req, res) => res.send('Hello products API').status(200)); 

app.listen(4002)