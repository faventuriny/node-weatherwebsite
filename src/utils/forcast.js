const request = require('postman-request')

const forcast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0b7071413ffb788d39556f7def48166b&query=' + latitude + ',' + longtitude;

    request({ url, json: true}, (error, {body}={}) => {
        if(error){
            callback('Error','Unable to connect to weather service!');
        } else if(body.error){
            callback('Error','Unable to find location');
        } else {
            const message = body.current.weather_descriptions[0] + 
            '. It is currently ' + body.current.temperature + 
            ' degrees out. There is a '+ body.current.precip + ' chance of rain.'
            callback(undefined, message)
        } 
    })
}


module.exports = forcast