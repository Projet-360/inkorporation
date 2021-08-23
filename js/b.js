
// b_______________________________________________________________________________________________
var b = new ScrollMagic.Controller();
var bTM = new TimelineMax();

bTM.add([
  TweenMax.fromTo(".ink-b-js", 1, {
    scale: 0,
    y: "-100%",
    opacity: 0,
    position: "fixed",
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 1,
    y: "-100%",
    opacity: 1,
    position: "fixed",
    ease: Linear.easeNone,
    force3D: false
  }),
  TweenMax.set('.main-ink', {
    opacity: 1,
  })

]);

var bTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerHook: 0,
  })

  .setTween(bTM)
  .addTo(b)
// _____________________________________________________________________________________________________
var bOut = new ScrollMagic.Controller();
var bOutTM = new TimelineMax();

bOutTM.add([
  TweenMax.fromTo(".ink-b-js", 1, {
    scale: 1,
    y: "-100%",
    opacity: 1,
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 69,
    y: "-100%",
    display: "none",
    opacity: 1,
    force3D: false,
    ease: Linear.easeNone,
  }),
]);

var bOutTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-b',
    triggerHook: 0,
  })

  .setTween(bOutTM)
  .addTo(bOut)
// _____________________________________________________________________________________________________