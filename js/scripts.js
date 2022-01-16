


var btn_1 = document.querySelector(".project_1") // get the button to the a variable
btn_1.addEventListener('click', function(url) { // add the event Listener to the variable
url = "https://www.facebook.com/"
url = "Project_race/index.html "
var win = window.open(url, '_blank');
win.focus(); 

btn_1.classList.add("border_click");
})

var btn_2 = document.querySelector(".project_2") // get the button to the a variable
btn_2.addEventListener('click', function(url) { // add the event Listener to the variable
url = "https://www.linkedin.com/feed/update/urn:li:activity:6728959018095652864/"
// url = "Project_2/index.html "
var win = window.open(url, '_blank');
win.focus(); 

btn_2.classList.add("border_click");
})

var btn_3 = document.querySelector(".project_3") // get the button to the a variable
btn_3.addEventListener('click', function(url) { // add the event Listener to the variable
url = "https://github.com/ayresdiego/Python_projects"
url = "https://github.com/ayresdiego?tab=repositories"
// url = "Project_2/index.html "
var win = window.open(url, '_blank');
win.focus(); 

btn_3.classList.add("border_click");
})

var btn_4 = document.querySelector(".project_4") // get the button to the a variable
btn_4.addEventListener('click', function(url) { // add the event Listener to the variable
url = "https://dash-covid-historical.herokuapp.com/"
// url = "Project_2/index.html "
var win = window.open(url, '_blank');
win.focus(); 

btn_4.classList.add("border_click");
})



tippy('.link', {
placement: 'top',
distance: 0,
animation: 'scale', //fade'
theme: 'light', // material
//arrow: 'true',

})

