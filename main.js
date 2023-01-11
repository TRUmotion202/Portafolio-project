function navbar() {
    const navbarMenu = document.querySelector('.navbar__menu')

    document.addEventListener('click', ({target}) => {
        if (target.closest('.navbar__toggle')) {
            navbarMenu.classList.toggle('show--menu')
        }
        if (target.closest('.navbar__close')) {
            navbarMenu.classList.remove('show--menu')
        }
        if (target.closest('.navbar__link')) {
            navbarMenu.classList.remove('show--menu')
        }
        
    })
}

navbar()

console.log('hola?');