function toggleNav() {
  let $topNav = document.getElementById('myTopnav');
  if ($topNav.className === 'topnav') {
    $topNav.className += ' responsive';
  } else {
    $topNav.className = 'topnav';
  }
}

const $toggleNavButton = document.getElementById('toggleNav');

$toggleNavButton.addEventListener('click', toggleNav);