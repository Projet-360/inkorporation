var fTM = new TimelineMax();
var f = new ScrollMagic.Controller();

fTM.add([
  TweenMax.fromTo(".ink-f-js", 1, {
    scale: 0,
    ease: Linear.easeNone,
    force3D: false
  }, {
    scale: 1,
    ease: Linear.easeNone,
    force3D: false
  }),
]);

var fTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-f',
    triggerHook: 1,
  })
  .setTween(fTM)

  .addTo(f)

