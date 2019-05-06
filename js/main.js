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
  document.getElementById('quidImgDefault').style.display = "none";

  if(data == 'womanEmployee') {
    document.getElementById('quidInfoWoman').style.display = "block";
    document.getElementById('quidInfoMan').style.display = "none";

  } else if (data == 'maleEmployee') {
    document.getElementById('quidInfoMan').style.display = "block";
    document.getElementById('quidInfoWoman').style.display = "none";
  }
}
