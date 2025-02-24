const imageUrls = [
    'https://i.postimg.cc/j5J0GnV2/Andaman-and-Nicobar.webp',
    'https://i.postimg.cc/q7qdxZj8/Best-Beaches-in-North-Goa-1200x900.webp',
    'https://i.postimg.cc/0ycsmqdk/darjeeling.webp',
    'https://i.postimg.cc/3xKhdwGf/Himachal.webp',
    'https://i.postimg.cc/Xqchbwsj/kashmir.webp',
    'https://i.postimg.cc/xdhByjk2/kerala.webp',
    'https://i.postimg.cc/6qrsQspN/rajasthan-tourism-02.webp',
    'https://i.postimg.cc/pLXNP6Ng/Taj-mahal-Timelapse.jpg',
    'https://i.postimg.cc/rwhBsNMz/UKspritual.webp',
    'https://i.postimg.cc/T2rBg6fz/Uttrakhand.webp'

];

let currentImageIndex = 0;
const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
let isImage1Visible = true;

// Preload images
const preloadedImages = imageUrls.map(url => {
    const img = new Image();
    img.src = url;
    return img;
});

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % preloadedImages.length;
    const nextImageUrl = preloadedImages[currentImageIndex].src;

    if (isImage1Visible) {
        image2.style.backgroundImage = `url(${nextImageUrl})`;
        image2.style.opacity = '1'; // Fade in image2
        image1.style.opacity = '0'; // Fade out image1
    } else {
        image1.style.backgroundImage = `url(${nextImageUrl})`;
        image1.style.opacity = '1'; // Fade in image1
        image2.style.opacity = '0'; // Fade out image2
    }

    isImage1Visible = !isImage1Visible; // Toggle visibility
}

// Set initial background
window.onload = () => {
    image1.style.backgroundImage = `url(${preloadedImages[0].src})`;
    setInterval(changeBackgroundImage, 5000); // Change every 5 seconds
};

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        const currentPath = window.location.pathname;

        navLinks.forEach(link => {
            // Resolve the link's href to an absolute path
            const linkPath = new URL(link.href, window.location.href).pathname;

            // Toggle the 'active' class based on the match
            link.classList.toggle('active', linkPath === currentPath);
        });
    }

    setActiveLink();
});
