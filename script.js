document.addEventListener("DOMContentLoaded", function() {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector(" [data-cursor-outline]");
    window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.animate({
left: `${posX}px`,
top: `${posY}px`
}, { duration: 500, fill: "forwards" });
});
    
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollTextContainer = document.getElementById('scroll-text');

    const text = "We make every interaction count ✦ We make every interaction count ✦ We make every interaction count ✦ We make every interaction count ✦";
    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        scrollTextContainer.appendChild(span);
    });

    let textWidth = scrollTextContainer.offsetWidth;
    let containerWidth = scrollContainer.offsetWidth;
    let currentPos = containerWidth;

    function scroll() {
        currentPos -= 10; // Adjust this value to change the scroll speed
        if (currentPos <= -textWidth) {
            currentPos = containerWidth;
        }
        scrollTextContainer.style.transform = `translateX(${currentPos}px)`;
        const viewportMiddle = window.innerWidth / 2;
        
        const spans = scrollTextContainer.querySelectorAll('span');
        spans.forEach((span, index) => {
            const spanLeft = scrollTextContainer.offsetLeft + span.offsetLeft + currentPos;
            const spanMiddle = spanLeft + span.offsetWidth / 2;

            if (spanMiddle < viewportMiddle) {
                span.style.color = 'black'; // Color for the left half
            } else {
                span.style.color = 'white'; // Color for the right half
            }
        });
        requestAnimationFrame(scroll);
    }

    scroll();
});
