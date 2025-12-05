document.addEventListener("DOMContentLoaded", () => {
    let targetX = 0, targetY = 0;
    let mouseX = 0, mouseY = 0;
    const viewport = document.getElementsByTagName('body')[0]
    const rotate3d = document.getElementsByClassName('rotate3d')

    viewport.addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect();

        mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    });


    function animate() {
        let xDiff = ((mouseX - targetX) * 0.02).toFixed(4)*1
        let yDiff = ((mouseY - targetY) * 0.02).toFixed(4)*1
        
        if (xDiff || yDiff){
            targetX += xDiff;
            targetY += yDiff;
            
            const rotY = +targetX * 6;
            const rotX = -targetY * 6;
                    
            [...rotate3d].forEach(el => {
                el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(-20px) translateX(${-targetX * 100}px) translateY(${-targetY * 100}px)`;
            });
        }
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
})