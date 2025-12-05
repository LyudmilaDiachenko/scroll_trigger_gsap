 document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger,TextPlugin)

    let tl = gsap.timeline();
    
    tl
    .addLabel('slide-0')
    .to('.slide-0', {xPercent: -100})
    .to('.bottom-txt .txt-1', {text: 'origin'}, "<")
    .to('.bottom-txt .txt-2', {text: 'stories'}, "<")
    .to('.bottom-txt .txt-3', {text: 'find your inspiration'}, "<")
    .from('.slide-1', {xPercent: 100}, "<")
    .from('.slide-1 .video', {scale: 0.8, opacity: 0}, "<")
    .from('.slide-1 .pointer-container', {scale: 0.5, opacity: 0}, "<")
    
    .addLabel('slide-1')
    .to('.slide-1', {xPercent: -100})
    .to('.bottom-txt .txt-1', {text: ''}, "<")
    .to('.bottom-txt .txt-2', {text: ''}, "<")
    .to('.bottom-txt .txt-3', {text: ''}, "<")
    .to('.slide-1 .video', {scale: 0.8, opacity: 0}, "<")
    .to('.slide-1 .pointer-container', {scale: 0.5, opacity: 0}, "<")
    .from('.slide-2', {xPercent: 100}, "<")

    .addLabel('slide-2')
    .to('.slide-2', {xPercent: -100})
    .to('.bottom-txt .txt-1', {text: 'inspiration'}, "<")
    .to('.bottom-txt .txt-2', {text: 'garden'}, "<")
    .to('.bottom-txt .txt-3', {text: 'where ingenuity overflows'}, "<")
    .from('.slide-3', {xPercent: 100}, "<")

    .addLabel('slide-3')
    .to('.slide-3', {xPercent: -100})
    .to('.bottom-txt .txt-1', {text: ''}, "<")
    .to('.bottom-txt .txt-2', {text: ''}, "<")
    .to('.bottom-txt .txt-3', {text: ''}, "<")
    .from('.slide-4', {xPercent: 100}, "<")

    .addLabel('slide-4')
    .to('.slide-4', {xPercent: -100})
    .to('.bottom-txt .txt-1', {text: 'the'}, "<")
    .to('.bottom-txt .txt-2', {text: 'library'}, "<")
    .to('.bottom-txt .txt-3', {text: 'more help finding your gift'}, "<")
    .from('.slide-5', {xPercent: 100}, "<")

    .addLabel('slide-5')
    .to('.slide-5', {xPercent: -100})
    .to('.bottom-txt .txt-1', {text: 'find your'}, "<")
    .to('.bottom-txt .txt-2', {text: 'gift'}, "<")
    .to('.bottom-txt .txt-3', {text: 'quiz experience'}, "<")
    .from('.slide-6', {xPercent: 100}, "<")

    .addLabel('slide-6')
    .to('.slide-6', {xPercent: -100})
    .to('.bottom-txt .txt-1', {text: ''}, "<")
    .to('.bottom-txt .txt-2', {text: ''}, "<")
    .to('.bottom-txt .txt-3', {text: ''}, "<")
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

    const overlay = document.querySelector('.overlay');
    const close = document.querySelectorAll('.close, .overlay')
    const videoPopup = document.querySelector('.video-pop-up');
    const readPopup = document.querySelector('.read-pop-up');
    const video = videoPopup.querySelector('.video-pop-up video')

    document.querySelectorAll('.video').forEach(el => {
      el?.addEventListener('click', event => {
        video.src = `./video/${event.target.dataset.name}.webm`

        gsap.fromTo(overlay, {opacity: 0.1}, {opacity: 0.9});
        overlay?.classList.add('open')

        gsap.fromTo(videoPopup, {opacity: 0.5}, {opacity: 1});
        videoPopup?.classList.add('open')

        event.target.classList.add('viewed')
        video.play()
      })
    })

    close.forEach(el => el.addEventListener('click', _ => {
      gsap.fromTo(overlay, {opacity: 0.9}, {opacity: 0.1});
      gsap.fromTo(videoPopup, {opacity: 1}, {opacity: 0.5});
      gsap.fromTo(readPopup, {scale: 1, opacity: 1}, {scale: 0.8, opacity: 0.5});
      videoPopup.classList.remove('open')
      readPopup.classList.remove('open')
      overlay.classList.remove('open')
      video.pause()
    }))

    document.querySelectorAll('.custom-pointer').forEach(el => {
      el?.addEventListener('click', event => {
        dataEl = event.target.closest('.custom-pointer');
        readPopup.querySelector('.title').innerHTML = dataEl.dataset.title;
        readPopup.querySelector('.description').innerHTML = dataEl.dataset.description;
        readPopup.querySelector('.name').innerHTML = dataEl.dataset.name;

        gsap.fromTo(overlay, {opacity: 0.1}, {opacity: 0.9});
        overlay?.classList.add('open')

        gsap.fromTo(readPopup, {scale: 0.8, opacity: 0.5}, {scale: 1, opacity: 1});
        readPopup?.classList.add('open')

        event.target.closest('.custom-pointer').classList.add('viewed')
      })
    })

});

