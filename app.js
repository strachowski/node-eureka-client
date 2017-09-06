const Eureka = require('eureka-js-client').Eureka;

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

client.start();