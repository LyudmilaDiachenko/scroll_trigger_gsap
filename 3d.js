document.addEventListener("DOMContentLoaded", () => {
    let targetX = 0, targetY = 0;
    let mouseX = 0, mouseY = 0;
    const viewport = document.getElementsByTagName('body')[0]
    const slides = document.getElementsByClassName('slides')[0]


    viewport.addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect();

        mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    });


    function animate() {
        targetX += (mouseX - targetX) * 0.02;
        targetY += (mouseY - targetY) * 0.02;

        const rotY = +targetX * 6;
        const rotX = -targetY * 6;
                
        slides.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(-20px)`;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
})