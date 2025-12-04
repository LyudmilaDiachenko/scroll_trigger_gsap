 document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

    let tl = gsap.timeline();
    
    tl
    .addLabel('slide-0')
    .to('.slide-0', {xPercent: -100})
    .from('.slide-1', {xPercent: 100}, "<")
    .from('.slide-1 .video', {scale: 0.8, opacity: 0}, "<")
    .from('.slide-1 .pointer-container', {scale: 0.5, opacity: 0}, "<")
    
    .addLabel('slide-1')
    .to('.slide-1', {xPercent: -100})
    .to('.slide-1 .video', {scale: 0.8, opacity: 0}, "<")
    .to('.slide-1 .pointer-container', {scale: 0.5, opacity: 0}, "<")
    .from('.slide-2', {xPercent: 100}, "<")

    .addLabel('slide-2')
    .to('.slide-2', {xPercent: -100})
    .from('.slide-3', {xPercent: 100}, "<")

    .addLabel('slide-3')
    .to('.slide-3', {xPercent: -100})
    .from('.slide-4', {xPercent: 100}, "<")

    .addLabel('slide-4')
    .to('.slide-4', {xPercent: -100})
    .from('.slide-5', {xPercent: 100}, "<")

    .addLabel('slide-5')
    .to('.slide-5', {xPercent: -100})
    .from('.slide-6', {xPercent: 100}, "<")

    .addLabel('slide-6')
    .to('.slide-6', {xPercent: -100})
    .from('.slide-7', {xPercent: 100}, "<")
  
    ScrollTrigger.create({
        animation: tl,
        trigger: '.main',
        end: '+=20000',
        scrub: 1,
        pin: true,
        snap: {
			snapTo: 'labels',
			duration: { min: 0.2, max: 3 },
			delay: 0,
			// ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
		}
    })

});
