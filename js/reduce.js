var burgerBtn = document.getElementById('burgerBtn');
var mobile = document.getElementById('mobile');

burgerBtn.addEventListener('click', function() {
    mobile.classList.toggle('navigation');
}, false);

reduce.addEventListener('click', function() {
    mobile.classList.add('reduce');
}, false);
