const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
          reject('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
          reject('Unable to find that address.');
        //console.log(JSON.stringify(body, undefined, 2));
        //console.log(JSON.stringify(response, undefined, 2));
        //console.log(JSON.stringify(error, undefined, 2));
        } else if (body.status === 'OK') {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};


geocodeAddress('13087').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});

// geocodeAddress('00000').then((location) => {
//   console.log(JSON.stringify(location, undefined, 2));
// }, (errorMessage) => {
//   console.log(errorMessage);
// });
