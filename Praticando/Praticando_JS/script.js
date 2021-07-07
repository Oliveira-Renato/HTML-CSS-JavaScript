function menuToggle() {
    let menu = document.getElementById('menu-area');

    if(menu.classList.contains('menu-opened') == true) {

        menu.classList.remove('menu-opened');
        
    } else {

        menu.classList.add('menu-opened');
    }
}



