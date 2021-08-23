//Début sur a 

var cStart = new ScrollMagic.Controller();
var cStartTM = new TimelineMax();

cStartTM.add([
  TweenMax.fromTo(".ink-c-js", 1, {
    scale: 0,
    opacity: -0.5,
    y: "-200%",
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 0,
    opacity: 1,
    y: "-200%",
    ease: Linear.easeNone,
    force3D: false
  }),
]);
var cStartTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-a',
    triggerHook: 1,
  })

  .setTween(cStartTM)
  .addTo(cStart)


//Début C
var c = new ScrollMagic.Controller();
var cInTM = new TimelineMax();

cInTM.add([
  TweenMax.fromTo(".ink-c-js", 1, {
    scale: 0,
    opacity: -0.5,
    y: "-200%",
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 0.02,
    opacity: 1,
    y: "-200%",
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var cInTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-a',
    triggerHook: -1,
  })

  .setTween(cInTM)
  .addTo(c)
// FIN b___________________________________________________________________________________________
//c_________________________________________________________________________________________________
var c = new ScrollMagic.Controller();
var cTM = new TimelineMax();


cTM.add([
  TweenMax.fromTo(".ink-c-js", 1, {
    scale: 0.02,
    y: "-200%",
    position: "fixed",
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 1,
    y: "-200%",
    position: "fixed",
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var cTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-b',
    triggerHook: 0,
  })

  .setTween(cTM)
  .addTo(c)
// _____________________________________________________________________________________________________
var cOut = new ScrollMagic.Controller();
var cOutTM = new TimelineMax();

cOutTM.add([
  TweenMax.fromTo(".ink-c-js", 1, {
    scale: 1,
    y: "-200%",
    opacity: 1,
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 69,
    y: "-200%",
    opacity: 1,
    force3D: false,
    ease: Linear.easeNone,
  }),
]);

var cOutTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-c',
    triggerHook: 0,
  })

  .setTween(cOutTM)
  .addTo(cOut)


// FIN c____________________________________________________________________________________________

