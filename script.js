var linear_Gradient_text = document.querySelector('h3');
var color_1 = document.querySelector('.color1');
var color_2 = document.querySelector('.color2');
var all = document.getElementById('all');
var body = document.getElementById('body');


linear_Gradient_text.innerText ="Initial color code: linear-gradient(to right," +color_1.value +","+color_2.value+");";
function setGradient(){
  all.style.background = "linear-gradient(to right, " + color_1.value + ", " + color_2.value + ")";
  linear_Gradient_text.innerText= "Generated Gradient code: linear-gradient(to right, " + color_1.value + ", " + color_2.value + ");";
  body.style.background = "linear-gradient(to right, " + color_1.value + ", " + color_2.value + ")";


}

color_1.addEventListener('input', setGradient);

color_2.addEventListener('input', setGradient); 

 



