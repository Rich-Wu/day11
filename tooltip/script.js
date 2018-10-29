var myBtn = document.getElementById('tooltip');

function displayTooltip() {
  myBtn.style.visibility = 'visible';
}
function hideTooltip() {
  myBtn.style.visibility = 'hidden';
}

document.getElementsByTagName('button')[0].addEventListener('mouseover', displayTooltip);
document.getElementsByTagName('button')[0].addEventListener('mouseout', hideTooltip);
