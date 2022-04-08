const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');

const api = require('./routes/api');
//const res = require('express/lib/response');
const port = 3000;

const app = express();
app.use(cors())
//app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.get('/', function(req, res){
    res.send('Dale')
})

app.use('/api', api);

app.use(express.static( __dirname +'/dist'))

 app.get('/*', function(req, res) {
   res.sendFile(path.join(__dirname, 'dist/index.html'));
 })

app.listen(process.env.PORT || 8080);
