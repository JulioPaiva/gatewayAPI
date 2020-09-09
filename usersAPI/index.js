const app = require('express')();

app.get('/users', (req, res) => res.send('Hello users API').status(200)); 

app.listen(4001)