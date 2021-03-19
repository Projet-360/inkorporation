import './a.js'
import './b.js'
import './c.js'
import './d.js'
import './e.js'
import './f.js'
import './visualizer.js'

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








  // FIN DES SETS DES ANIMATIONS


  // CHANGEMENT DE LA COULEUR DU BODY

  var GeneralSM = new ScrollMagic.Controller();


  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.ink-b',
      triggerHook: .5,
    })
    .setClassToggle(".body-ink", "b")
    .addTo(GeneralSM)

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.ink-c',
      triggerHook: .5,
    })
    .setClassToggle(".body-ink", "c")
    .addTo(GeneralSM)

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.ink-d',
      triggerHook: 0.9,
    })
    .setClassToggle(".body-ink", "d")
    .addTo(GeneralSM)

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.ink-e',
      triggerHook: 0.8,
    })
    .setClassToggle(".body-ink", "e")
    .addTo(GeneralSM)

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.ink-f',
      triggerHook: 0.9,
    })
    .setClassToggle(".body-ink", "f")
    .addTo(GeneralSM)
}



