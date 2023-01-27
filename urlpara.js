
var url = 'https://webcheck.com/page?one=two';

var query = url.split('?')[1].split('&');

query.forEach(function(key) {
  var pair = key.split('=');
  console.log('Key: ' + pair[0] + ' _ Value: ' + pair[1]);
});