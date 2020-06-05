const menuBtn = document.querySelector('.m-menu'),
  menu = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', function() {
  menu.classList.toggle('active')
});

console.log(menu);
console.log(menuBtn);