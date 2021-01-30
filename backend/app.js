const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;

// api key
const key = 'AIzaSyB4jklgCINIdPecftiKbcuCYV2bqS4WTsg';

// Create app variable
const app = express();

// Create client variable
var client = new Client();

// use body parser to read the body as json type
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());

// enable All CORS Requests
app.use(cors());

// Create app server
app.listen(3001, () =>{
    console.log("listening to port 3001");
});

// Create POST http request
app.post('/getlocations', (req, res)=>{
    const typeWord = req.body.city;

    // direct way to call the api by using that Get Http request
    client.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+typeWord+"top+sights&key="+key, function (data, response) {
    // parsed response body as json object in to react frontend server
    res.json({msg:true, data:data})
    // raw response
    //console.log(response);
    });
});
