

// theme change

// var moon = document.getElementById("moon-button");
// var sun = document.getElementById("sun-button");


// document.getElementById("theme-toggle").onclick = function() {
//   var currentTheme = document.documentElement.getAttribute("data-theme");

//   document.documentElement.setAttribute('data-theme', currentTheme === "light" ? "dark" : "light");
  
// };

var moon = document.getElementById("moon-button");
var sun = document.getElementById("sun-button");

// document.getElementById('theme-toggle').onclick = function(){
//   if (currentTheme === 'light'){
 //   moon.style.display = 'none';
   //sun.style.display = 'block';
//   } else {
//     moon.style.display = 'block';
//     sun.style.display = 'none';   
//   };
// }

function themeChange() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";

  if (currentTheme === "light") {
      targetTheme = "dark";
      moon.style.display = 'none';
      sun.style.display = 'block';     
  } else {
    moon.style.display = 'block';
    sun.style.display = 'none';  
  };

  document.documentElement.setAttribute('data-theme', targetTheme)
  localStorage.setItem('theme', targetTheme);
};

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme){
  document.documentElement.setAttribute('data-theme', storedTheme);
};

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


