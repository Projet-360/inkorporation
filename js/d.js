//d_________________________________________________________________________________________________
var d = new ScrollMagic.Controller();
var setdTM = new TimelineMax();
var dTM = new TimelineMax();
var dOutTM = new TimelineMax();
var dPreTM = new TimelineMax();


setdTM.add([
  TweenMax.fromTo(".ink-d-js", 1, {

    scale: 0,
  }, {
    scale: 0,
  }),
]);

var setdTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-a',
    triggerHook: 1,
  })
  .setTween(setdTM)
  .addTo(d)

dPreTM.add([
  TweenMax.fromTo(".ink-d-js", 1, {
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

var dPreTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-c',
    triggerHook: 1,
  })
  .setTween(dPreTM)
  .addTo(d)


dTM.add([
  TweenMax.fromTo(".ink-d-js", 1, {
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

var dTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-c',
    triggerHook: 0,
  })
  .setTween(dTM)
  .addTo(d)











  dOutTM.add([
    TweenMax.fromTo(".ink-d-js", 1, {
      scale: 1,
      y: "0%",
      opacity: 1,
      ease: Linear.easeNone,
      force3D: false
    }, {
      scale: 40,
      y: "0%",
      opacity: 1,
      force3D: false,
      ease: Linear.easeNone,
    }),
  ]);
  
  var dOutTM = new ScrollMagic.Scene({
      duration: '100%',
      triggerElement: '.ink-d',
      triggerHook: 0,
    })
  
    .setTween(dOutTM)
    .addTo(d)
  
// FIN d____________________________________________________________________________________________