var xhr = new XMLHttpRequest();
xhr.open('GET', '/data.json');
xhr.send(null)
xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  while (xhr.readyState === DONE&& xhr.status === OK) {
      var res=JSON.parse(xhr.responseText);
      console.log(res); // 'This is the returned text.'
    } 
      console.log('Error: ' + xhr.status); // An error occurred during the request.
    }


