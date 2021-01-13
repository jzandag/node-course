const https = require('https');
const API_KEY = 'pk.eyJ1IjoianphbmRhZyIsImEiOiJjazk1YnRha2wwYWJyM2dwMnYzMnFzN29zIn0.5cjCnYzF9eNIp257jpkQCA'

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Antipolo.json?access_token='+ API_KEY +'&limit=5';

const req = https.request(url, (response)=> {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk.toString();
        console.log(data);        
    })

    response.on('end', () => {
        console.log(JSON.parse(data));
    });
})

req.on('error', (err) => {
    console.log('an error', err);
})

req.end();