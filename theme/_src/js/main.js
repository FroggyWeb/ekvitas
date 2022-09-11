console.log("test")
import 'virtual:svg-icons-register'
// import "./component/tabs/vanilla-tabs.scss"
import "../scss/common.scss"
import "./component/tabs"
import ScrollBooster from "./component/scroll"

new ScrollBooster({
    viewport: document.querySelector('.top-contact__container .scroll'),
    content: document.querySelector(".top-contact__list"),
    scrollMode: 'transform',
    direction: 'horizontal',
    bounce: false
});
