var Navigation = new ScrollMagic.Controller();

// a

var ourScene = new ScrollMagic.Scene({
        triggerElement: '.ink-a',
        duration: "149%",
    })
    .setClassToggle('.jnli-right a[href="#b"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        duration: "100.5%",
        triggerElement: '.ink-b',
        triggerHook: 0.01,
    })
    .setClassToggle('.jnli-right a[href="#c"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        triggerElement: '.ink-c',
        duration: "100%",
        triggerHook: 0.01,
    })
    .setClassToggle('.jnli-right a[href="#d"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        triggerElement: '#d',
        triggerHook: 0.01,
        duration: "108%",
    })
    .setClassToggle('.jnli-right a[href="#e"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        triggerElement: '#e',
        duration: "20%",
        triggerHook: 0.01,
    })
    .setClassToggle('.jnli-right a[href="#f"]', 'active')

    .addTo(Navigation)















var ourScene = new ScrollMagic.Scene({
        duration: "50.1%",
        triggerElement: '.ink-b',
        triggerHook: 0.5,
    })
    .setClassToggle('.jnli-left a[href="#a"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: '.ink-c',
        triggerHook: 0.99999,
    })
    .setClassToggle('.jnli-left a[href="#b"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: '.ink-d',
        triggerHook: 0.99999,
    })
    .setClassToggle('.jnli-left a[href="#c"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        duration: "101%",
        triggerElement: '.ink-e',
        triggerHook: 0.99999,
    })
    .setClassToggle('.jnli-left a[href="#d"]', 'active')
    .addTo(Navigation)

var ourScene = new ScrollMagic.Scene({
        duration: "150%",
        triggerElement: '.ink-f',
        triggerHook: 0.8,
    })
    .setClassToggle('.jnli-left a[href="#e"]', 'active')
    .addTo(Navigation)









