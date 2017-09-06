const Eureka = require('eureka-js-client').Eureka;
const express = require('express')
const app = express()



var port = Math.floor(Math.random() * 99) + 8800  ;

// example configuration 
const client = new Eureka({
  // application instance information 
  instance: {
    app: 'node-eureka-client-'+port,
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: {
        '$': port,
        '@enabled': true,
      },
    vipAddress: 'jq.test.something.com',
    dataCenterInfo: {
        '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
        name: 'MyOwn',
      },
  },
  eureka: {
    // eureka server host / port 
    host: 'localhost',
    port: 8010,
    servicePath: '/eureka/apps/'
  },
});

//Start eureka client and register
client.start();



app.get('/', function (req, res) {
  res.send('Hello from eureka client '+port+'!')
})

app.listen(port, 'localhost', function() {
  console.log('Running on port: '+port);
});