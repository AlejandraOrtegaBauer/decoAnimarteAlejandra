function pressLinkMenu() {
    //Todos los links del navbar
    const linkMenu = document.querySelectorAll(".nav-item");

    //Botón del menú hamburguesa
    const buttonToggler = document.querySelector(".navbar-toggler");

    //Link activo
    let linkActive = document.querySelector(".active");

    //Recorremos todos los items del navbar
    linkMenu.forEach((link) => {
        link.addEventListener("click", function () {
            //Solo activamos el evento "click" del menú hamburguesa
            //cuando la pantalla es responsive (menor e igual a 992px)
            if (screen.width <= 992) {
                buttonToggler.click();
            }
            //Vemos si el botón sobre el que hicimos click es
            //el "activo" o no
            if (!link.classList.contains("active")) {
                if (!(linkActive.id === link.id)) {
                    //Link activo diferente del que hicimos click
                    linkActive.classList.remove("active");
                    linkActive = link;
                    linkActive.classList.add("active");
                }
            }
        });
    });
}

/*
let menuItem = document.querySelector(".active");
menuItem.addEventListener("click", () => {
    pressLinkMenu();
});
*/
pressLinkMenu();
