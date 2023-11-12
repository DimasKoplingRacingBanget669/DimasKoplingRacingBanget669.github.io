document.getElementById("Download").addEventListener("click", function () {
  var files =
    "https://drive.google.com/file/d/1yYyOebmq2-zob_xScin2l3BDr-OaZQ4_/view?usp=sharing";
  // var name = "Ida_bagus.pdf";
  // var mimeType = "application/pdf";
  // download(files, name, mimeType);
  window.location.href = files;
});

function home() {
  window.location = "./index.html";
}
