var xhr = new XMLHttpRequest();
xhr.open("GET", "/data.json");
xhr.send(null);
xhr.onreadystatechange = function() {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  var res = JSON.parse(xhr.responseText);

  while (xhr.readyState === DONE && xhr.status === OK) {
    var res = JSON.parse(xhr.responseText);
    var target = document.querySelector("#new");
    var txt, x;
    txt += "<table border='2'>";
    txt += txt += "<td id=one>" + "First name" + "</td>";
    txt += "<td id=two>" + "Last name" + "</td>";
    txt += "<td id=three>" + "Gender" + "</td>";
    for (x = 0; x < res.length; x++) {
      txt += "<tr>";
      txt += "<td>" + res[x].first_name + "</td>";
      txt += "<td>" + res[x].last_name + "</td>";
      txt += "<td>" + res[x].gender + "</td>";
      txt += "</tr>";
    }
    txt += "</table>";
    var div = document.createElement("div");
    div.innerHTML = txt;
    target.appendChild(div);

    document.getElementById("one").style.color = "blue";
    document.getElementById("two").style.color = "blue";
    document.getElementById("three").style.color = "blue";

    break;
  }
  console.log("Error: " + xhr.status); // An error occurred during the request.
};
