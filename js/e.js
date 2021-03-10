//e_________________________________________________________________________________________________
var e = new ScrollMagic.Controller();
var seteTM = new TimelineMax();
var eTM = new TimelineMax();
var eOutTM = new TimelineMax();
var ePreTM = new TimelineMax();


seteTM.add([
  TweenMax.fromTo(".ink-e-js", 1, {
    scale: 0,
  }, {
    scale: 0,
  }),
]);

var seteTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-a',
    triggerHook: 1,
  })
  .setTween(seteTM)
  .addTo(e)

ePreTM.add([
  TweenMax.fromTo(".ink-e-js", 1, {
    scale: 0,
    opacity: -0.5,
    y: "0%",
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 0.02,
    opacity: 1,
    y: "0%",
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var ePreTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-d',
    triggerHook: 1,
  })
  .setTween(ePreTM)
  .addTo(e)


eTM.add([
  TweenMax.fromTo(".ink-e-js", 1, {
    scale: 0.02,
    y: "0%",
    position: "fixed",
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 1,
    y: "0%",
    position: "fixed",
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var eTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-d',
    triggerHook: 0,
  })
  .setTween(eTM)
  .addTo(e)