
  // a______________________________________________________________________________________________
  // ZOOM a
  var a = new ScrollMagic.Controller();
  var aTM = new TimelineMax();

  aTM.add([
    TweenMax.fromTo(".ink-a-js", 1, {
      scale: 1,
      position: "fixed",
      force3D: false,
      ease: Linear.easeNone,
    }, {
      scale: 130,
      position: "fixed",
      ease: Linear.easeNone,
      display: "none",
      force3D: false
    }),
    TweenMax.from(".ink-b-js", 1, {
      scale: 0,
      position: "fixed",
      ease: Linear.easeNone,
      display: "none",
      force3D: false
    }),
  ]);

  var aTM = new ScrollMagic.Scene({
      duration: '100%',
      triggerHook: 0,
    })
    .setTween(aTM)
    .addTo(a)
// FIN ZOOM a
// FIN a____________________________________________________________________________________________