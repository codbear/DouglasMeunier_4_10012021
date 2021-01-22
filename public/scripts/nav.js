/**
 * Triggers burger nav opening or closing
 */
function toggleNav() {
  let $topNav = document.getElementById('myTopnav');
  if ($topNav.className === 'topnav') {
    $topNav.className += ' responsive';
  } else {
    $topNav.className = 'topnav';
  }
}

// DOM element
const $toggleNavButton = document.getElementById('toggleNav');

// Open burger nav event
$toggleNavButton.addEventListener('click', toggleNav);