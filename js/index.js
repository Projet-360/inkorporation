import './a.js'
import './b.js'
import './c.js'
import './d.js'
import './e.js'
import './f.js'
import './visualizer.js'
import './main-color.js'
import './grained.js'
//import './navigation.js'



window.onload = function () {
  TweenLite.ticker.fps(30); 

  //MISE EN PLACE DU SCROLL ANIMATION
  var scroll = new SmoothScroll('.ink-navigation-list-item-link', {
    speedAsDuration: true,
    durationMin: 1500,
    ignore: '[data-scroll-ignore] .menu-list-a'
  });

  // SET DES ANIMATIONS
  TweenMax.fromTo(".loader", 1, {
      delay: 1,
      opacity: 1,
      display: "flex",
    }, {
      delay: 1,
      opacity: 0,
      display: "none",
    }),



  TweenMax.set('body', {
    opacity: 1,
  })
 
}



