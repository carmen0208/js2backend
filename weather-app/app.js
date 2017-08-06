const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.getcodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    //results in actually is a json or hash as well
    // console.log(JSON.stringify(results, undefined,2));
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
       if(errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});


// const request = require('request');

// request({
//   url: 'https://api.darksky.net/forecast/c9c04847756df87f707a6b74d0ae7b94/-43.5320544,172.6362254',
//   json: true
// }, (error, response, body) => {
//   if (error) {
//     console.log('Unable to connect to Forecast.io server.');
//   } else if (response.statusCode === 400) {
//     console.log('Unable to fetch weather.');
//   } else if (response.statusCode === 200) {
//     console.log(body.currently.temperature);
//   }
// });