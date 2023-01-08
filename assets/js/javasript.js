
let bars = document.querySelector('.bars');
let nav = document.querySelector('nav ul');
let times = document.querySelector('.times');

bars.addEventListener('click', () => {

    bars.style.display="none";
    times.style.display='block';
    nav.classList.add('active');
})

times.onclick = () =>{
    times.style.display='none';
    bars.style.display='block';
    nav.classList.remove('active');
}



function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toLowerCase();
ul = document.querySelector(".allAyat");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      input.style.border='2px solid gray'
     input.style.background="none";

    } else {
      li[i].style.display = "none";
      input.style.border = '2px solid red';
     input.style.background="#d2191938";
    }
  }
}


// dark/light mood

var moonIcon = document.getElementById('moonIcon');

moonIcon.onclick = function(){
  document.body.classList.toggle('dark-mood');
  if(document.body.classList.contains('dark-mood')){
    moonIcon.className='fas fa-sun';
  }else{
    moonIcon.className='fas fa-moon';
  }
}



// //Disable Inspect Element and  View page source


document.addEventListener('contextmenu' , function(e){
  alert('Sorry, right click is disabled to prevent leakage of confidential functions')
  e.preventDefault();
});

//Disable shortCut that allows Inspect element

document.onkeydown = function(e){
  if(event.keyCode === 123){
  alert('Sorry, this shortCut is disabled to prevent leakage of confidential functions')

    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
  alert('Sorry, this shortCut is disabled to prevent leakage of confidential functions')

    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
  alert('Sorry, this shortCut is disabled to prevent leakage of confidential functions')

    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  alert('Sorry, this shortCut is disabled to prevent leakage of confidential functions')

    return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  alert('Sorry, this shortCut is disabled to prevent leakage of confidential functions')

    return false;
  }
  if(e.ctrlKey && e.shiftKey == 'S'.charCodeAt(0)){
  alert('Sorry, this shortCut is disabled to prevent leakage of confidential functions')

    return false;
  }
}

