export function carouselMuda() {
    const clickItems = document.querySelectorAll(".action__container div")
    const actionContainer = document.querySelector(".action__container")

    function trocaCarousel(event) {
        const carouseis = document.querySelectorAll(".carousel__lojas")
        let item = event.target.parentNode
        let datasetClick = item.dataset.action

        if (event.target.parentNode === actionContainer) {
            item = event.target
        }

        carouseis.forEach((i) => {
            i.style.display = "none";
            let dataset = i.dataset.action
            if (dataset == datasetClick) {
                i.style.display = "block";

            }

        })
        clickItems.forEach((cada) => {
            cada.classList.remove("active")
            item.classList.add("active")
        })


    }

    clickItems.forEach((i) => {
        i.addEventListener("click", trocaCarousel)

    })
}