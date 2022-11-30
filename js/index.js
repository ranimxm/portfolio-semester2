
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




// cursor pointer
// is from online, https://blog.logrocket.com/creating-custom-mouse-cursor-css/ 
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');


document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

// for hovering on a text, tried on my own
var a = document.querySelectorAll(['a', 'i', '.return', '.images']);

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
