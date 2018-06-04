function getfilename(obj){
  var oFReader = new FileReader();
  var file = obj.files[0];
  oFReader.readAsDataURL(file);
  oFReader.onloadend = function(oFRevent){
      var src = oFRevent.target.result;
      document.getElementById("head").setAttribute("src",src);
  }
}

function inputonblur(obj,def,type) {
  if (obj.value == "") {
      obj.value = def;
      obj.style.color = "rgb(196,196,196)";
      obj.type = "text";
  } else {
      obj.type = type;
  }
}


function inputonfocus(obj,def,type) {
  if (obj.value == def) {
      obj.style.color = "#000";
      obj.value = "";
  }
  obj.type = type;
}
