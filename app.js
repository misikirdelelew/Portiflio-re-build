const menuItem = document.querySelector('.menuItem');
const hambergerClose = document.querySelector('.hambergerClose');
const hambergerOpen = document.querySelector('.hambergerOpen');
const menuItems = document.querySelectorAll('nav .menuItem li a');
// close menu when you click on a menu item 
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        close();
    });
});
function show() {
    menuItem.style.display = 'flex';
    menuItem.style.top = '0';
}
hambergerOpen.addEventListener('click', show);
function close() {
    menuItem.style.top = '-101%'
}
hambergerClose.addEventListener('click', close);
