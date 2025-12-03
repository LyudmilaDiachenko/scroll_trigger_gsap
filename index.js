 document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

    let tl = gsap.timeline();
    
    tl.to('.slide-0', {xPercent: -100})
    tl.from('.slide-1', {xPercent: 100}, "<")
    tl.from('.slide-1 .bar', {width: 0, height: 0, opacity: 0 }, "<");
    
    tl.to('.slide-1', {xPercent: -100})
    tl.from('.slide-2', {xPercent: 100}, "<")

    tl.to('.slide-2', {xPercent: -100})
    tl.from('.slide-3', {xPercent: 100}, "<")

    tl.to('.slide-3', {xPercent: -100})
    tl.from('.slide-4', {xPercent: 100}, "<")

    tl.to('.slide-4', {xPercent: -100})
    tl.from('.slide-5', {xPercent: 100}, "<")

    tl.to('.slide-5', {xPercent: -100})
    tl.from('.slide-6', {xPercent: 100}, "<")

    tl.to('.slide-6', {xPercent: -100})
    tl.from('.slide-7', {xPercent: 100}, "<")
  
    ScrollTrigger.create({
        animation: tl,
        trigger: '.main',
        end: '+=20000',
        scrub: 1,
        pin: true,
    })

});
