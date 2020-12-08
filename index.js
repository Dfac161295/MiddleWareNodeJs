const conexion = require('./Conexion/Conector')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// parse application/json
app.use(bodyParser.json());

//Middleware function
function isValid(req, res, next) {

    if (req.body.isValid == true) {
        console.log('true');
        next();
    } else {
        console.log('false');
        res.status(403).send('unauthorized');
    }

}

app.use(isValid);


app.get('/saludo', (req, res) => {

    res.send();
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})