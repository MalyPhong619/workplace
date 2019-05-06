function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.class);
  console.log("hey")
}
