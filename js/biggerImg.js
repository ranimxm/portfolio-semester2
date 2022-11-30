//the bigger image onlcick

var biggImg = document.getElementById('biggerImg');
var images = document.getElementsByClassName('images');
var figureImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    biggImg.style.display = "block";
    figureImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  biggImg.style.display = "none";
};
