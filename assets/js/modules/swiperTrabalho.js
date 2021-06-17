import * as config from '../modules/swiper__props.js'; //Configs do Swiper
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper(".carousel", config.propsTrabalho)
export default swiper