function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function quidDrop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  document.getElementById('quidInformation').style.display="block";
  //
  // if(data == 'womanEmployee') {
  //
  // }
}
