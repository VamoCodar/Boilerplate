import swiper from "../modules/swiperTrabalho.js"

export default
function mudaDeAcordoComCarouselAtivo() {


    const itemAtivo = swiper.el.querySelector(".swiper-slide-active")
    const titulo = document.querySelector(".intro__name-art")
    const titulo2 = document.querySelector(".intro__titulo")
    const itemsLista = document.querySelectorAll(".lista .lista__wrapper ul")

    //data atributo
    const itemAtivoData = itemAtivo.dataset.name
    const itemAtivoTitulo = itemAtivo.dataset.titulo
    const dataLista = itemAtivo.dataset.lista

    //texto
    titulo.innerText = itemAtivoData
    titulo2.innerText = itemAtivoTitulo

    //lop classes
    itemsLista.forEach((i) => {
        const contemAClasse = i.classList.contains(`${dataLista}`)
        if (contemAClasse) {
            i.classList.add("active")
        } else {
            i.classList.remove("active")
        }
    })
}