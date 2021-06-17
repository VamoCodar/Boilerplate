export default function menu() {
    // menu preenchido 
    function menuPreenchido() {
        const menuFixo = document.querySelectorAll(".menu");
        menuFixo.forEach((i) => {
            if (window.pageYOffset >= 20) {
                document.body.classList.add("ativo__scroll");

            } else if (window.pageYOffset < 50) {
                document.body.classList.remove("ativo__scroll");
            }
        });
    }
    menuPreenchido();

    /* abre & fecha menu  */
    const menuItem = document.querySelectorAll(".menu__icon-click")
    const linksMenu = document.querySelectorAll(".atalhos")
    const mediaQuery = window.matchMedia('(min-width: 1024px)')

    function menuMobile() {

        if (!document.body.classList.contains("menu__open")) {
            document.body.classList.add("menu__open");

        } else if (document.body.classList.contains("menu__open")) {
            const fundomenu = document.querySelector(".menu__orna")
            fundomenu.style.visibility = "hidden"

            linksMenu.forEach((i) => {
                i.setAttribute(
                    "style", "animation: voltaMenu 450ms both ease-out;"
                );

                setTimeout(() => {
                    i.removeAttribute("style", "animation");
                    document.body.classList.remove("menu__open");
                }, 450);
            })
        }
    }


    /* FECHA MENU SE CLICAR PARTE PRETA */
    function fechaMenuMobile(click) {
        const partePreta = document.querySelector(".fundo__black")
        if (document.body.classList.contains("menu__open") && click.target === partePreta) {

            linksMenu.forEach((i) => {
                i.setAttribute(
                    "style",
                    "animation: voltaMenu 250ms both ease-out;"
                );
                setTimeout(() => {
                    i.removeAttribute("style", "animation");
                    document.body.classList.remove("menu__open");
                }, 250);
            })
        }

    }


    //animação ao scrool TITULOS
    const sections = document.querySelectorAll(".js__scroll");

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < 500) {
                section.classList.add("animate");
            }
        });
    }
    window.addEventListener("scroll", animaScroll)

    // add classe DROP MOBILE 
    const dropMobile = document.querySelectorAll(".menu__dropdown")

    dropMobile.forEach((i) => {
        i.addEventListener("click", function (event) {
            event.preventDefault();
            i.classList.toggle("abre")
        })
    })

    //eventos
    menuItem.forEach((i) => {
        i.addEventListener("click", menuMobile)
    })
    document.body.addEventListener("click", fechaMenuMobile);
    window.addEventListener("scroll", menuPreenchido);
    document.addEventListener("DOMContentLoaded", function () {
        document.body.classList.add("dcl")

    });
}