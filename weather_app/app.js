const axios = require('axios');
const chalk = require('chalk');
const forecast = require('./utils/weather')
const geocode = require('./utils/geocode')

const command = process.argv[2]

if(command){
    geocode(command, (error, {longitude, latitude, placeName}) => {
        if(error){
            console.log(error);
        }else{
            
            forecast(longitude, latitude, (error, {temperature: temp, humidity: hmd}) => {
                if(error)
                    console.log('Error', error)
                else{
                    console.log(`Longitude ${longitude}`);
                    console.log(`Latitude ${latitude}`);
                    console.log(`Place: ${placeName}`);
                    console.log('Temperature is ', temp)
                    console.log('Humidity is ', hmd)
    
                }
              })
        }
        
    });
}else {
    console.log(chalk.red.bold('Location parameter required'));
}


// geocode('Provident Village', (error, data) => {
//     if(error){
//         console.log(error);
//     }else{
        
//         forecast(data.longitude, data.latitude, (error, foreCastdata) => {
//             if(error)
//                 console.log('Error', error)
//             else{
//                 console.log(`Longitude ${data.longitude}`);
//                 console.log(`Latitude ${data.latitude}`);
//                 console.log(`Place: ${data.placeName}`);
//                 console.log('Data', foreCast)

//             }
//           })
//     }
    
// });

