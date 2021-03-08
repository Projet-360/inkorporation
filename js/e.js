var eInTM = new TimelineMax();
var e = new ScrollMagic.Controller();
var eOutTM = new TimelineMax();


eOutTM.add([
  TweenMax.fromTo(".ink-e-js", 1, {
    x: "0%",
    y: "0%",
    scale: 1,
    opacity: 1,
    ease: Linear.easeNone,
    force3D: false
  }, {
    x: "0%",
    y: "0%",
    scale: 20,
    opacity: 1,
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var eOutTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-e',
    triggerHook: 0,
  })
  .setTween(eOutTM)
  .addTo(e)

  
eInTM.add([
  TweenMax.fromTo(".ink-e-js", 1, {
    opacity: 0,
    x: "-110%",
    y: "150%",
    scale: 1, 
    ease: Linear.easeNone,
    force3D: false
  }, {
    opacity: 1,
    x: "0%",
    y: "0%",
    scale: 1,
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var eInTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-d',
    triggerHook: 0,
  })
  .setTween(eInTM)
  .addTo(e)