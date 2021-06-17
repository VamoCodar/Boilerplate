// export
// const props2 = {
//     // loop: true,
//     // effect: 'fade',
//     slidesPerView: "auto",
//     centeredSlides: true,
//     speed: 600,
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: false,
//     },

// }

export
const propsComent = {

    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 25,
        },
        720: {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: "auto",
            spaceBetween: 50,
            centeredSlides: false,

        },

        1240: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false,

        },
    }
}

// Swiper do dica
export
const props = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    // centeredSlides: true,

    autoplay: {
        delay: 1200,
        disableOnInteraction: true,
    },

/*     pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, */
  
    breakpoints: {
        320: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 15,
        },

        721: {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 30,
        },

    }
}


export
const props2 = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    // centeredSlides: true,

/*     autoplay: {
        delay: 1200,
        disableOnInteraction: true,
    }, */
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 15,
        },

        721: {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
        },

    }
}


export
const propsconheca = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    // centeredSlides: true,

/*     autoplay: {
        delay: 1200,
        disableOnInteraction: true,
    }, */
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 15,
        },

        721: {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 50,
        },

    }
}


export
const propstrans = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: false,

    speed: 600,
    autoplay: {
        delay: 500,
        disableOnInteraction: true,
    },
    speed: 600,
    autoplay: {
        delay: 500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 15,

        },
        720: {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 15,
            autoplay: false,
            speed: 0,


        },
        1024: {
            slidesPerView: "auto",
            spaceBetween: 50,
            centeredSlides: false,
            autoplay: false,
            speed: 0,
        },

        1240: {
            slidesPerView: "auto",
            spaceBetween: 20,
            centeredSlides: false,
            autoplay: false,
            speed: 0,

        },
    }
}

const botaoNext = document.querySelector(".swiper-button-next-depo")
const botaoPrev = document.querySelector(".swiper-button-prev-depo")
export
const propsDepo = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: false,

    navigation: {
        nextEl: botaoNext,
        prevEl: botaoPrev,
    },

    breakpoints: {
        320: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 15,
            speed: 600,
            autoplay: {
                delay: 2000,
                disableOnInteraction: true,
            },

        },
        720: {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: "auto",
            spaceBetween: 50,
            centeredSlides: false,

        },

        1240: {
            slidesPerView: "auto",
            spaceBetween: 20,
            centeredSlides: false,

        },
    }
}




export
const propsTrabalho = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    // centeredSlides: true,
    // centeredSlidesBounds:true,
    init: false,
    initialSlide: 2,
    breakpoints: {
        320: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 15,
        },

        721: {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 50,
        },

    }
}
export
const propsServicos = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    // centeredSlides: true,
    // centeredSlidesBounds:true,
    // init: false,
    initialSlide: 1,
    breakpoints: {
        320: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 15,
        },

        992: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 50,

        },

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
}


export
const propsQuem = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    // centeredSlides: true,

/*     autoplay: {
        delay: 1200,
        disableOnInteraction: true,
    },
 */

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 15,
        },

        721: {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 30,
            
        },

    }
}