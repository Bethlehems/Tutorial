var xhr = new XMLHttpRequest();
xhr.open('GET', '/data.json');
xhr.send(null)
xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  var res = JSON.parse(xhr.responseText);
  var target = document.querySelector('#new');
  var div = document.createElement('div');
  while (xhr.readyState===DONE&&xhr.status === OK) {
    div.innerHTML =res[1].first_name;
    target.parentNode.after( div, target );
    break;
   } 
 console.log('Error: ' + xhr.status); // An error occurred during the request.
};

 