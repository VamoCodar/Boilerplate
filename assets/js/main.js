// // import vemBootstrap from './modules/botstrapimport.js';
// import * as animacao from './modules/animation.js';
// // import * as carouselClick from './modules/carousel-change.js';
// import * as config from './modules/swiper__props.js'; //Configs do Swiper
// // import lineClamp from './modules/line-clamp.js'; //line Clamp
// // import * as darkMode from './modules/dark-mode.js'; //line Clamp
// import linkDentroLink from './modules/a-dentro-a.js'; //link dentor de link
// // import progressBar from './modules/progress-bar.js'; //progress bar
// import firefox from './modules/firefox-checker.js'; //progress bar
// import mudaDeAcordoComCarouselAtivo from "./modules/carousel-ativo.js"
// import swiper from "./modules/swiperTrabalho.js"
// import menu from './modules/menu.js'; //js do menu

import Dom from './modules/constructors.js'; //selecionar elementos
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'


// let mediaQuery = window.matchMedia('(min-width: 1024px)').matches
if (mediaQuery) {
    // animacao.animaAoScroll()
}


// PAGES 
const pageHome = new Dom().el("#page__home")

if (pageHome) { // ★ HOME  
    new Dom().bodyClass("body__home");
    // const swiperIntro = new Swiper(".parceria__carousel", config.props)


}
// else if (pageClientes) { // ★ Clientes  
//      new Dom().bodyClass("body__clientes");

// }