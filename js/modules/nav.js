function nav() {
    const itemsNav = document.querySelectorAll('.header__link');
    
    itemsNav.forEach( item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const blockId = item.getAttribute('href');
            document.querySelector('' + blockId).scrollIntoView({
                behavior: "smooth",
                block: 'start'
            });
        });
    });
}

export default nav;