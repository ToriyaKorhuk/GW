var modalone = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
   modalone.style.display = "block";
}

span.onclick = function () {
   modalone.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == modalone) {
       modalone.style.display = "none";
   }
}
