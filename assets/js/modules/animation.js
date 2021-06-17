// export function animationIntro() {

//     const timeLine = new TimelineMax();
//     const timeLine2 = new TimelineMax();

//     const clique = document.querySelector(".clique")
//     const compre = document.querySelector(".compre")
//     const receba = document.querySelector(".receba")
//     const ornamentos = document.querySelectorAll(".ornamentos")
//     const interoga = document.querySelector(".interoga")


//     timeLine2.staggerFromTo(ornamentos, .5, {
//         scale: .2,
//         transformOrigin: "left bottom",
//         ease: "power3",
//     }, {
//         scale: 1,
//         delay: 2,
//     });


//     timeLine
//         .from(clique, .5, {
//             scale: 1,
//             transformOrigin: "center",

//         })


// }

export function animaAoScroll() {
    gsap.registerPlugin(ScrollTrigger)

    function animateFrom(elem, direction) {
        const outside = "data-delay"
        direction = direction | 1;
        let delayValor = 0

        var x = 0,
            y = direction * 60;

        if (elem.hasAttribute(outside) != false) {
            delayValor = elem.dataset.delay

        }


        //direção
        if (elem.classList.contains("animate-left")) {
            x = -100;
            y = 0;
        } else if (elem.classList.contains("animate-right")) {
            x = 100;
            y = 0;
        }

        /* animaçao */
        gsap.fromTo(elem, {
            x: x,
            y: y,
            autoAlpha: 0,
        }, {
            duration: 1.2,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            delay: delayValor,

            // overwrite: "auto"
        });
        // window.requestAnimationFrame(animateFrom);
        // window.requestAnimationFrame(animateFrom);
        // console.log(globalID);
    }

    function hide(elem) {
        gsap.set(elem, {
            autoAlpha: 0
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".js-animate").forEach(function (elem) {
            hide(elem); // assure that the element is hidden when scrolled into view

            ScrollTrigger.create({
                trigger: elem,
                once: true,
                start: "top+=120px bottom",
                // markers: true,
                onEnter: function anima() {
                    // window.requestAnimationFrame()
                    animateFrom(elem)
                    elem.classList.add("animou")
                },


                // onEnterBack: function () {
                //     animateFrom(elem, -1)
                // },
                // onLeave: function () {
                //     hide(elem)
                // } // assure that the element is hidden when scrolled into view
            });


        });
        // window.requestAnimationFrame(animaa)

    });


}



export function animacaoIntroEmpresas() {
    const smartphone = document.querySelector(".js-animate-smart")
    const comment1 = document.querySelector(".intro .comment-1")
    const comment2 = document.querySelector(".intro .comment-2")
    const introh2 = document.querySelector(".intro h2")
    const introh1 = document.querySelector(".intro h1")
    const introp = document.querySelector(".intro p")
    const introa = document.querySelector(".intro a")

    const timeLine = new TimelineMax();
    gsap.set(smartphone, {
        y: "1000px",
        ease: "expo"
    })
    gsap.set(comment1, {
        y: "100px",
        opacity: 0,
    })
    gsap.set([comment2, comment1], {
        y: "100px",
        opacity: 0,
    })

    gsap.set([introh2, introh1, introp, introa], {
        y: "200px",
        opacity: 0,
    })
    timeLine
        .to(smartphone, 1.3, {
            y: 0,
        })
        .to(comment2, 1, {
            y: 0,
            opacity: 1,
        }, "-=.6")
        .to(comment1, 1, {
            y: 0,
            opacity: 1,
        }, "-=.6")
        .to([introh2, introh1, introp, introa], 1.5, {
            y: 0,
            opacity: 1,
            ease: "expo.out",

            stagger: { // wrap advanced options in an object
                each: 0.2,
                from: "bottom",
                grid: "auto",
                ease: "ease",

            }
        }, "-=.8")



}

export

function animacaoCirculo() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSPlugin)
    const elem = document.querySelector(".number")
    const svg1 = document.querySelector(".number svg.svg-1 circle:nth-child(2)")
    const svg2 = document.querySelector(".number svg.svg-2 circle:nth-child(2)")
    const svg3 = document.querySelector(".number svg.svg-3 circle:nth-child(2)")

    ScrollTrigger.create({
        trigger: elem,
        // markers: true,
        start: "top+=300px bottom",
        once: true,
        onEnter: function () {

            gsap.to(svg1, 1, {
                strokeDashoffset: -80,
            })
            let numero = document.querySelector(".item__1 h4 span")
            var min = 2;
            var max = 145;
            var duracao = 1000; // 5 segundos
            for (var i = min; i <= max; i++) {
                setTimeout(function (nr) {
                    numero.innerHTML = nr;
                }, i * duracao / max, i);
            }

            gsap.to(svg2, 1, {
                strokeDashoffset: -80,
            })
            let numero2 = document.querySelector(".item__2 h4 span")
            var min2 = 2;
            var max2 = 254;
            var duracao2 = 1000; // 5 segundos
            for (var i = min2; i <= max2; i++) {
                setTimeout(function (nr) {
                    numero2.innerHTML = nr;
                }, i * duracao2 / max2, i);
            }

            gsap.to(svg3, 1, {
                strokeDashoffset: -80,
            })
            let numero3 = document.querySelector(".item__3 h4 span")
            var min3 = 2;
            var max3 = 500;
            var duracao3 = 1000; // 5 segundos
            for (var i = min3; i <= max3; i++) {
                setTimeout(function (nr) {
                    numero3.innerHTML = nr;
                }, i * duracao3 / max3, i);
            }


        },



    });


}
export function animaContato() {
    const tl = new TimelineMax({
        paused: false,
    });
    gsap.set(".contato__wrapper", {
        opacity: 0,
        y: 200,
    })

    gsap.set(".contato h1", {
        x: "100%",
    })
    tl
        .to(".contato__wrapper", 1.2, {
            opacity: 1,
            y: 0,
        })
        .to(".contato h1", .8, {
            x: 0,
        }, "-=.6")
}