'use strict'

/**
 * Module dependencies.
 */

var express = require('../../');
var path = require('node:path');

var app = module.exports = express();

// Register ejs as .html
app.engine('.html', require('ejs').__express);

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'html');

// Device mockup data
var devices = [
  {
    name: 'iPhone 14 Pro',
    type: 'Mobile',
    screen: '6.1"',
    description: 'Latest iPhone with Dynamic Island',
    image: 'iphone-14-pro'
  },
  {
    name: 'iPad Pro',
    type: 'Tablet',
    screen: '12.9"',
    description: 'Powerful tablet for professionals',
    image: 'ipad-pro'
  },
  {
    name: 'MacBook Pro',
    type: 'Laptop',
    screen: '16"',
    description: 'High-performance laptop',
    image: 'macbook-pro'
  },
  {
    name: 'Samsung Galaxy S23',
    type: 'Mobile',
    screen: '6.1"',
    description: 'Flagship Android device',
    image: 'galaxy-s23'
  },
  {
    name: 'Apple Watch Series 8',
    type: 'Wearable',
    screen: '1.9"',
    description: 'Advanced health and fitness tracking',
    image: 'apple-watch'
  },
  {
    name: 'Desktop Monitor',
    type: 'Desktop',
    screen: '27"',
    description: '4K Ultra HD display',
    image: 'desktop-monitor'
  }
];

// Main route - display device mockup gallery
app.get('/', function(req, res){
  res.render('index', {
    devices: devices,
    title: 'Device Mockups Gallery',
    header: 'Modern Device Mockups'
  });
});

// Individual device route
app.get('/device/:name', function(req, res){
  var deviceName = req.params.name;
  var device = devices.find(d => d.image === deviceName);

  if (!device) {
    return res.status(404).send('Device not found');
  }

  res.render('device', {
    device: device,
    title: device.name + ' - Device Mockup'
  });
});

// API endpoint to get devices as JSON
app.get('/api/devices', function(req, res){
  res.json(devices);
});

// Filter by device type
app.get('/type/:type', function(req, res){
  var type = req.params.type;
  var filteredDevices = devices.filter(d =>
    d.type.toLowerCase() === type.toLowerCase()
  );

  res.render('index', {
    devices: filteredDevices,
    title: type + ' Mockups',
    header: type + ' Device Mockups'
  });
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
  console.log('Device Mockups Gallery available at:');
  console.log('  http://localhost:3000');
  console.log('  http://localhost:3000/type/mobile');
  console.log('  http://localhost:3000/device/iphone-14-pro');
  console.log('  http://localhost:3000/api/devices');
}
