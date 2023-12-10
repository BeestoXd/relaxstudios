document.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector('.menu-icon');
    let navbar = document.querySelector('.menu');

    menu.onclick = function() {
        menu.classList.toggle('move');
        navbar.classList.toggle('active');
    };

    // Notfication
    let bell = document.querySelector('.notification');

    document.querySelector('#bell-icon').onclick = function() {
        bell.classList.toggle('active');
    };


    // Swiper
    var swiper = new Swiper(".trending-content", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1068: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    // Custom Scroll Bar
    window.onscroll = function() {
        mufunction()
    };

    function mufunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById('scroll-bar').style.width = scrolled + '%';
    }

    // Countdown Timer
    // Set the release date (December 31, 2023, 00:00:00 UTC)
    const releaseDate = new Date('2023-12-31T00:00:00Z').getTime();

    // Function to update the timer
    function updateTimer() {
        const currentDate = new Date().getTime();
        const timeRemaining = releaseDate - currentDate;

        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Update the timer on the page
            document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            // Hide the timer and show the download button
            document.getElementById('timer-container').style.display = 'none';
            document.getElementById('download-btn').style.display = 'block';
        }
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial update
    updateTimer();

    // Play Video Repeat
    var video = document.querySelector('.video-container video');

    // Listen for the "ended" event
    video.addEventListener('ended', function() {
        // Reset the video to the beginning
        video.currentTime = 0;

        // Play the video again
        video.play();
    });

    // Play the video when the page loads
    video.play();
});