document.addEventListener('DOMContentLoaded', () => {
    
    // 1.5 SECOND SPLASH TIMER
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const mainWindow = document.getElementById('main-window');

        // Fade out animation effect
        splash.style.transition = 'opacity 0.5s ease';
        splash.style.opacity = '0';

        setTimeout(() => {
            splash.classList.remove('active');
            mainWindow.classList.add('active');
        }, 500);

    }, 1500); 

});
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.growth-item');
    
    // Animation trigger
    let delay = 0;
    items.forEach((item, index) => {
        setTimeout(() => {
            // Activate Circle
            item.classList.add('active');
            
            // Pop effect (optional JS trigger)
            item.style.transform = "scale(1.1)";
            
            // Yahan aap dotted line ki property bhi change kar sakte ho progress dikhane ke liye
        }, delay);
        delay += 800; // Har circle 0.8s baad pop hoga
    });
});