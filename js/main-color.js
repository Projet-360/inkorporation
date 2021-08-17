 // CHANGEMENT DE LA COULEUR DU BODY

 var GeneralSM = new ScrollMagic.Controller();


 var ourScene = new ScrollMagic.Scene({
     triggerElement: '.ink-b',
     triggerHook: .5,
   })
   .setClassToggle(".main-ink", "b")
   .addTo(GeneralSM)

 var ourScene = new ScrollMagic.Scene({
     triggerElement: '.ink-c',
     triggerHook: .5,
   })
   .setClassToggle(".main-ink", "c")
   .addTo(GeneralSM)

 var ourScene = new ScrollMagic.Scene({
     triggerElement: '.ink-d',
     triggerHook: 0.9,
   })
   .setClassToggle(".main-ink", "d")
   .addTo(GeneralSM)

 var ourScene = new ScrollMagic.Scene({
     triggerElement: '.ink-e',
     triggerHook: 0.8,
   })
   .setClassToggle(".main-ink", "e")
   .addTo(GeneralSM)

 var ourScene = new ScrollMagic.Scene({
     triggerElement: '.ink-f',
     triggerHook: 0.9,
   })
   .setClassToggle(".main-ink", "f")
   .addTo(GeneralSM)