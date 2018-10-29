var helpBtn = document.getElementById('walkthrough');
var nextBtn = document.getElementsByClassName('nextBtn');
var submitBtn = document.getElementById('submitBtn');
let step = 1;
helpBtn.addEventListener('click',helpPrompts);

for (eachNext = 0;eachNext < nextBtn.length;eachNext++) {
  nextBtn[eachNext].addEventListener('click',nextStep);
}

function helpPrompts() {
  console.log("This man needs help.");
  document.getElementById('step-'+step).style.visibility = 'visible';
}

function nextStep() {
  console.log('This man needs more help.');
  if (step < nextBtn.length) {
    document.getElementById('step-'+step).style.visibility = 'hidden';
    step++;
    document.getElementById('step-'+step).style.visibility = 'visible';
    console.log("on step "+step);
  } else {
    document.getElementById('step-'+step).style.visibility = 'hidden';
    step = 1;
    console.log("on step "+step);
  }
}

helpBtn.addEventListener('mouseover',darkenColor);
helpBtn.addEventListener('mouseout',lightenColor);
submitBtn.addEventListener('mouseover',darkenColor);
submitBtn.addEventListener('mouseout',lightenColor);


function darkenColor() {
  this.style.backgroundColor = 'rgb(150,133,181)';
  this.style.color = 'white';
}

function lightenColor() {
  this.style.backgroundColor = '#a8a8e2';
  this.style.color = '#272727';
}
