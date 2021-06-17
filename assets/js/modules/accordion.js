export default

function initAccordion() {

    const accordionList = document.querySelectorAll('[data-accordion] dt');
    const activeClass = 'ativo';

    if (accordionList.length) {

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);

            let filho = this.nextElementSibling
            console.log(filho);
            let height = filho.querySelector(".content").offsetHeight
            console.log(height);
            const timeline = gsap.timeline({
                paused: true,
            })

            timeline
                .to((filho), .1, {
                    ease: "linear",
                    maxHeight: height,
                    "clip-path": "inset(0 0 0 0)"
                })

            if (this.classList.contains(activeClass)) {
                timeline.play()
            } else {
                gsap.to((filho), .1, {
                    ease: "linear",
                    maxHeight: 0,
                    "clip-path": "inset(0 0 100% 0)"

                })


                timeline.kill()
            }
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}