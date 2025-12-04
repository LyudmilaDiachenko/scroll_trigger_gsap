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

    .addLabel('finish')
  
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
    });

    const popup = document.querySelector('.pop-up');
    const overlay = document.querySelector('.overlay');
    const video = popup.querySelector('.pop-up video')
    const close = document.querySelectorAll('.close, .overlay')
    document.querySelectorAll('.video').forEach(el => {
      el?.addEventListener('click', event => {
        video.src = `./video/${event.target.dataset.name}.webm`
        gsap.fromTo(overlay, {opacity: 0.1}, {opacity: 0.9});
        overlay?.classList.add('open')
        gsap.from(popup, {scale: 0.8, opacity: 0.5});
        popup?.classList.add('open')
        video.play()
        event.target.classList.add('viewed')
      })
      close.forEach(el => el.addEventListener('click', _ => {
        gsap.fromTo(overlay, {opacity: 0.9}, {opacity: 0.1});
        gsap.to(popup, {scale: 0.8, opacity: 0.5});
        popup.classList.remove('open')
        overlay.classList.remove('open')
        video.pause()
      }))
    })
});

