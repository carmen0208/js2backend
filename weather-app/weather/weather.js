const request = require('request');

getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/c9c04847756df87f707a6b74d0ae7b94/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }  
  });
}

module.exports.getWeather = getWeather