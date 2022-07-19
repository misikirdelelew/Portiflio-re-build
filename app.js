const menuItem = document.querySelector('.menuItem');
const hambergerClose = document.querySelector('.hambergerClose');
const hambergerOpen = document.querySelector('.hambergerOpen');
const menu_items = document.querySelectorAll('nav .menuItem li a');




hambergerOpen.addEventListener('click', show);
hambergerClose.addEventListener('click', close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    })
})

function show() {
    menuItem.style.display = 'flex';
    menuItem.style.top = '0';
}
function close() {
    menuItem.style.top = '-101%';
}
