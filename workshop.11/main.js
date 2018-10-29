var helpBtn = document.getElementById('walkthrough');
var nextBtn = document.getElementsByClassName('nextBtn');
var step = 1;
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
