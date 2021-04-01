// import { CountUp } from 'node_modules/countup.js/dist/countUp.min.js';


const _nav = document.querySelector("#nav");
const _button = document.querySelector("#toggle");

const _open = () => {
      if (true) {
            _nav.classList.toggle("open");
      }
}
_button.addEventListener("click",_open);



// window.onload = function() {
//       var countUp = new CountUp('', 2000);
//       countUp.start();
// }