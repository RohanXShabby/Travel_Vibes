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



const urls = [
    'https://i.postimg.cc/j5J0GnV2/Andaman-and-Nicobar.webp',
    'https://i.postimg.cc/q7qdxZj8/Best-Beaches-in-North-Goa-1200x900.webp',
    'https://i.postimg.cc/0ycsmqdk/darjeeling.webp',
    'https://i.postimg.cc/3xKhdwGf/Himachal.webp',
    'https://i.postimg.cc/Xqchbwsj/kashmir.webp',
    'https://i.postimg.cc/xdhByjk2/kerala.webp',
    'https://i.postimg.cc/6qrsQspN/rajasthan-tourism-02.webp',
    'https://i.postimg.cc/pLXNP6Ng/Taj-mahal-Timelapse.jpg',
    'https://i.postimg.cc/rwhBsNMz/UKspritual.webp',
    'https://i.postimg.cc/T2rBg6fz/Uttrakhand.webp',
    'https://i.postimg.cc/nLKvr2D7/Auli.png',
    'https://i.postimg.cc/Wp5w05fw/badrinath-dham-tour.jpg',
    'https://i.postimg.cc/9FSPnr24/badrinath-town-alkananda-river-flowing-64354569.jpg',
    'https://i.postimg.cc/vHDLh5JF/Bhimtal-lake.jpg',
    'https://i.postimg.cc/pdMfP4pR/Chamb.jpg',
    'https://i.postimg.cc/t4xdQpRB/Char-Dham-Yatra-by-Helicopter-Guide.jpg',
    'https://i.postimg.cc/KzZtMTPW/Corbet.jpg',
    'https://i.postimg.cc/nz0BYLTh/essential-things-to-pack-for-char-dham-yatra-19.jpg',
    'https://i.postimg.cc/nrr7dtwY/Gangotri-Dham.jpg',
    'https://i.postimg.cc/VvhtpHxy/KEDARNATH.jpg',
    'https://i.postimg.cc/MZ31nvvs/kedarnath-banner2.webp',
    'https://i.postimg.cc/7YC00wzq/kedarnath-temple-crowd-4k-x7v0dhhuw4ivif94.jpg',
    'https://i.postimg.cc/3JPpZVjm/Nainital-Lake.jpg',
    'https://i.postimg.cc/6QKvkZmQ/Places-to-Visit-in-Mussoorie.jpg',
    'https://i.postimg.cc/jSPf3cv9/Rishikesh.jpg',
    'https://i.postimg.cc/vmvVbmJt/Tehri-Tourism.jpg',
    'https://i.postimg.cc/k4Xt4m93/Uttrakhand-packages.jpg',
    'https://i.postimg.cc/fyVtcfJ8/Yamunotri.jpg',
    'https://i.postimg.cc/tgV9Nv5Z/Auli.png',
    'https://i.postimg.cc/MGhpkJTm/badrinath-dham-tour.jpg',
    'https://i.postimg.cc/85MPNXfQ/badrinath-town-alkananda-river-flowing-64354569.jpg',
    'https://i.postimg.cc/XqWNJK9Z/Bhimtal-lake.jpg',
    'https://i.postimg.cc/DfQyNDK1/Chamb.jpg',
    'https://i.postimg.cc/BbCS18Cm/Char-Dham-Yatra-by-Helicopter-Guide.jpg',
    'https://i.postimg.cc/L6H6FTHw/Corbet.jpg',
    'https://i.postimg.cc/KvJcGMjz/essential-things-to-pack-for-char-dham-yatra-19.jpg',
    'https://i.postimg.cc/Z5nbC5vL/Gangotri-Dham.jpg',
    'https://i.postimg.cc/GmfcYnkn/KEDARNATH.jpg',
    'https://i.postimg.cc/PxsT3b36/kedarnath-banner2.webp',
    'https://i.postimg.cc/brq88yjk/kedarnath-temple-crowd-4k-x7v0dhhuw4ivif94.jpg',
    'https://i.postimg.cc/nz4Z6sNn/Nainital-Lake.jpg',
    'https://i.postimg.cc/ZKKZM5Hh/Places-to-Visit-in-Mussoorie.jpg',
    'https://i.postimg.cc/brLPw7zM/Rishikesh.jpg',
    'https://i.postimg.cc/dQ9w6y8B/Tehri-Tourism.jpg',
    'https://i.postimg.cc/qMb0VHD6/Uttrakhand-packages.jpg',
    'https://i.postimg.cc/htXnKZNy/Yamunotri.jpg',
    'https://i.postimg.cc/rs7JxmFt/Auli.png',
    'https://i.postimg.cc/ryZYqycT/badrinath-town-alkananda-river-flowing-64354569.jpg',
    'https://i.postimg.cc/90kxbb10/Bhimtal-lake.jpg',
    'https://i.postimg.cc/wMMfDZXn/Chamb.jpg',
    'https://i.postimg.cc/kXk1tjBh/Corbet.jpg',
    'https://i.postimg.cc/3JyfNMJv/kedarnath-banner2.webp',
    'https://i.postimg.cc/qvymc8KB/Nainital-Lake.jpg',
    'https://i.postimg.cc/x8X5XHY2/Places-to-Visit-in-Mussoorie.jpg',
    'https://i.postimg.cc/GpRXXHPF/Rishikesh.jpg',
    'https://i.postimg.cc/LsVNw2vr/Tehri-Tourism.jpg',
    'https://i.postimg.cc/wvT0dZG3/Uttrakhand-packages.jpg',
    'https://i.postimg.cc/wjprGfgR/Auli.png',
    'https://i.postimg.cc/43wQwwxG/Bhimtal-lake.jpg',
    'https://i.postimg.cc/V66BhMJC/Chamb.jpg',
    'https://i.postimg.cc/63mLx3Z1/Corbet.jpg',
    'https://i.postimg.cc/Kj37G2rc/Nainital-Lake.jpg',
    'https://i.postimg.cc/L6f7vKKM/Places-to-Visit-in-Mussoorie.jpg',
    'https://i.postimg.cc/XXMfXzQf/Rishikesh.jpg',
    'https://i.postimg.cc/3rkz40tN/Tehri-Tourism.jpg',
    'https://i.postimg.cc/XNtmwNP8/Uttrakhand-packages.jpg',
    'https://i.postimg.cc/PqL1zH9W/Auli.png',
    'https://i.postimg.cc/3w6CPNmf/Bhimtal-lake.jpg',
    'https://i.postimg.cc/PxwzhHMX/Chamb.jpg',
    'https://i.postimg.cc/mkW3gndQ/Corbet.jpg',
    'https://i.postimg.cc/zvwCbkM4/kedarnath-banner2.webp',
    'https://i.postimg.cc/NGR7zgMb/Nainital-Lake.jpg',
    'https://i.postimg.cc/mggYkCS6/Places-to-Visit-in-Mussoorie.jpg',
    'https://i.postimg.cc/5N1qcZQJ/Rishikesh.jpg',
    'https://i.postimg.cc/9FpPcJy7/Tehri-Tourism.jpg',
    'https://i.postimg.cc/bwVQtrCY/Uttrakhand-packages.jpg',
    'https://i.postimg.cc/44FZjTS7/1662793150-nitin-karolla-3wvlgmgmhd0-unsplash-jpg.webp',
    'https://i.postimg.cc/GhWRhxrb/1716014680.webp',
    'https://i.postimg.cc/4N7ZgFD8/5-4-d115f28046.webp',
    'https://i.postimg.cc/Y2VKbzvQ/bhawan-img-cover.jpg',
    'https://i.postimg.cc/0j6g9bB6/honeymoon-in-kashmir.webp',
    'https://i.postimg.cc/g0dP3cn5/honeymoon-in-kashmir2.webp',
    'https://i.postimg.cc/nhqJs9cB/Jammu-Kashmir.webp',
    'https://i.postimg.cc/nLkf28mL/j-XSN6-Izd3-XRfacsj-Oo-PZYVJGj-KBDv-FD2-XIbx5-M9-C.webp',
    'https://i.postimg.cc/bJwcF609/kashmir-1.webp',
    'https://i.postimg.cc/5yDhybhs/kashmir-tour-2-jpg.webp',
    'https://i.postimg.cc/hjZWF9pW/Kashmir2.jpg',
    'https://i.postimg.cc/rw26LyCm/Things-To-Do-In-Ladakh-03126bc347.webp',
    'https://i.postimg.cc/pXFN75j4/Things-To-Do-In-Ladakh-03126bc347.webp',
    'https://i.postimg.cc/Qt7XJZzw/161645-Places-to-Visit-in-Rajasthan.webp',
    'https://i.postimg.cc/jqzxWKPJ/ajmer-pushkar.jpg',
    'https://i.postimg.cc/Qxmjbb68/Delhi-Agra-Jaipur-Tour.webp',
    'https://i.postimg.cc/D0dnRdnc/forts-palaces-of-rajasthan-lgbt-tour.webp',
    'https://i.postimg.cc/gkmY85Ht/Galta-Ji-Temple.webp',
    'https://i.postimg.cc/T3PfHDSr/home-1.webp',
    'https://i.postimg.cc/mg6BxrfK/jaipur-1734692769.webp',
    'https://i.postimg.cc/g0XdGPGj/Nahargarh-Fort-Jaipur-Rajasthan.webp',
    'https://i.postimg.cc/j2Kr6wPn/Rajasthan.webp',
    'https://i.postimg.cc/d0bF1S0B/rajasthan-king-palace-jpeg.webp',
    'https://i.postimg.cc/j5ybJQwr/rajasthan-tour-banner.webp',
    'https://i.postimg.cc/W1tc7PF8/Rajasthan-Tour-Packages-from-Kolkata-scaled-1-1024x680.webp',
    'https://i.postimg.cc/vTzw0Ytq/rajasthancab-landing-jpg.jpg',
    'https://i.postimg.cc/Jhkw9cQB/ranthanbore.webp',
    'https://i.postimg.cc/280fv563/spiritual-travel-in-rajasthan-india-5.webp',
    'https://i.postimg.cc/3x65Sb2T/Uttrakhand-packages.jpg',
    'https://i.postimg.cc/rF1NYdWF/161645-Places-to-Visit-in-Rajasthan.webp',
    'https://i.postimg.cc/cLTM0VXp/ajmer-pushkar.jpg',
    'https://i.postimg.cc/nLzKz0WC/Delhi-Agra-Jaipur-Tour.webp',
    'https://i.postimg.cc/kg7vrnFN/forts-palaces-of-rajasthan-lgbt-tour.webp',
    'https://i.postimg.cc/cJbR8fqT/Galta-Ji-Temple.webp',
    'https://i.postimg.cc/8c8LZDz6/home-1.webp',
    'https://i.postimg.cc/xCNKGqnQ/jaipur-1734692769.webp',
    'https://i.postimg.cc/brQkMMZF/Nahargarh-Fort-Jaipur-Rajasthan.webp',
    'https://i.postimg.cc/FHF3WTND/Rajasthan.webp',
    'https://i.postimg.cc/ncJv7H58/rajasthan-king-palace-jpeg.webp',
    'https://i.postimg.cc/TYJnJzMK/rajasthan-tour-banner.webp',
    'https://i.postimg.cc/t4rPLFgy/Rajasthan-Tour-Packages-from-Kolkata-scaled-1-1024x680.webp',
    'https://i.postimg.cc/1R6Gfgvc/rajasthancab-landing-jpg.jpg',
    'https://i.postimg.cc/JhvXhmJ2/ranthanbore.webp',
    'https://i.postimg.cc/fbJXZk3d/spiritual-travel-in-rajasthan-india-5.webp',
    'https://i.postimg.cc/V6tCrTWL/Uttrakhand-packages.jpg',
    'https://i.postimg.cc/tgfvnWfh/1672236551.webp',
    'https://i.postimg.cc/3wWbwnL8/28-09-2023-kerala-23542232.webp',
    'https://i.postimg.cc/3RvSXW5z/aerial-shot-boats-beach-with-palm-trees-scaled-jpg.webp',
    'https://i.postimg.cc/D03CBF70/backwater-1.webp',
    'https://i.postimg.cc/x8G6Z7dR/backwater-of-kerala-jpg.webp',
    'https://i.postimg.cc/qB2DgtG3/elephants.webp',
    'https://i.postimg.cc/VLR7B3ps/honeymoon-destination.webp',
    'https://i.postimg.cc/YqknFpXy/houseboat-honeymoon-tour2.webp',
    'https://i.postimg.cc/522sPsWB/Jatayu-Earth-Center-5-jpg.webp',
    'https://i.postimg.cc/Bv8M3t6t/Jeevess-Ayurveda-Resort-Kerala-24-jpg.webp',
    'https://i.postimg.cc/Y073Q3xm/kerala-backwaters.webp',
    'https://i.postimg.cc/MGhtpxM5/kerala-backwaters-jpg.webp',
    'https://i.postimg.cc/SRGGdMZ1/Kerala-banner.webp',
    'https://i.postimg.cc/MKdDj1fv/Kerala-Honeymoon-Packages-From-Mumbai.webp',
    'https://i.postimg.cc/26hGqJnD/kerala-night-life.webp',
    'https://i.postimg.cc/dQRnwbqR/kerala-tour-packages-3-nights-4-days.webp',
    'https://i.postimg.cc/t4v28F9L/Kerala-Tourism.webp',
    'https://i.postimg.cc/159Btvtk/kovalam.webp',
    'https://i.postimg.cc/YC0xNjQ8/Luxury-4-Star-Kerala-Holiday-Package.webp',
    'https://i.postimg.cc/wBscPPfm/Munnar.webp',
    'https://i.postimg.cc/LXKBMTw0/Munnar-in-Kerala.webp',
    'https://i.postimg.cc/RZYLg9Rm/munnar-travel-guide.jpg',
    'https://i.postimg.cc/DZrQfGKf/One-day-trip-places-in-kerala.webp',
    'https://i.postimg.cc/4yX6Y3J6/Romantic-Kerala.webp',
    'https://i.postimg.cc/T1QrgXwZ/wildlife-tour-near-cochin.webp',
    'https://i.postimg.cc/90f43wmn/1672236551.webp',
    'https://i.postimg.cc/hjsJ31Bm/28-09-2023-kerala-23542232.webp',
    'https://i.postimg.cc/SQZ26dVF/aerial-shot-boats-beach-with-palm-trees-scaled-jpg.webp',
    'https://i.postimg.cc/XqDrnNX7/backwater-1.webp',
    'https://i.postimg.cc/MKvcdBrc/backwater-of-kerala-jpg.webp',
    'https://i.postimg.cc/QMrH8yN5/elephants.webp',
    'https://i.postimg.cc/GmD41CRd/honeymoon-destination.webp',
    'https://i.postimg.cc/NfSKV0Wd/houseboat-honeymoon-tour2.webp',
    'https://i.postimg.cc/PqzNPQN7/Jatayu-Earth-Center-5-jpg.webp',
    'https://i.postimg.cc/PxXJZvw5/Jeevess-Ayurveda-Resort-Kerala-24-jpg.webp',
    'https://i.postimg.cc/1XT3LWY8/kerala-backwaters.webp',
    'https://i.postimg.cc/mkhrpxVx/kerala-backwaters-jpg.webp',
    'https://i.postimg.cc/43ZxkHwQ/Kerala-banner.webp',
    'https://i.postimg.cc/dtb06xyX/Kerala-Honeymoon-Packages-From-Mumbai.webp',
    'https://i.postimg.cc/v8STgBHG/kerala-night-life.webp',
    'https://i.postimg.cc/ZKBRrSCp/kerala-tour-packages-3-nights-4-days.webp',
    'https://i.postimg.cc/LXxXV4tB/Kerala-Tourism.webp',
    'https://i.postimg.cc/cLfLbB7J/kovalam.webp',
    'https://i.postimg.cc/k4gMDr0V/Luxury-4-Star-Kerala-Holiday-Package.webp',
    'https://i.postimg.cc/tJ1Xt3Cp/Munnar.webp',
    'https://i.postimg.cc/GpQhc35w/Munnar-in-Kerala.webp',
    'https://i.postimg.cc/V6ZfCGwK/munnar-travel-guide.jpg',
    'https://i.postimg.cc/yYZ1DybT/One-day-trip-places-in-kerala.webp',
    'https://i.postimg.cc/1XLyW8f6/Romantic-Kerala.webp',
    'https://i.postimg.cc/wxPxxG0v/wildlife-tour-near-cochin.webp',
    'https://i.postimg.cc/CLQ1C8g2/1662793150-nitin-karolla-3wvlgmgmhd0-unsplash-jpg.webp',
    'https://i.postimg.cc/pdNL4tyY/1716014680.webp',
    'https://i.postimg.cc/JzHhph7z/5-4-d115f28046.webp',
    'https://i.postimg.cc/VNjkcHCy/bhawan-img-cover.jpg',
    'https://i.postimg.cc/xCnTjyvX/honeymoon-in-kashmir.webp',
    'https://i.postimg.cc/pTCVmhCq/honeymoon-in-kashmir2.webp',
    'https://i.postimg.cc/SRKSCStq/Jammu-Kashmir.webp',
    'https://i.postimg.cc/ZnDTLG1N/j-XSN6-Izd3-XRfacsj-Oo-PZYVJGj-KBDv-FD2-XIbx5-M9-C.webp',
    'https://i.postimg.cc/QN6xs7HM/kashmir-1.webp',
    'https://i.postimg.cc/vHkYxd7F/kashmir-tour-2-jpg.webp',
    'https://i.postimg.cc/BQXZvvKB/Kashmir2.jpg',
    'https://i.postimg.cc/JzX1bdKy/Things-To-Do-In-Ladakh-03126bc347.webp',
    'https://i.postimg.cc/bwR08m0S/Andaman-and-Nicobar.webp',
    'https://i.postimg.cc/RVKQpSNR/Best-Beaches-in-North-Goa-1200x900.webp',
    'https://i.postimg.cc/YC7NJ5Fw/darjeeling.webp',
    'https://i.postimg.cc/SQwfG2NR/Himachal.webp',
    'https://i.postimg.cc/1t8DGPkD/kashmir.webp',
    'https://i.postimg.cc/Pq3mvNRt/kerala.webp',
    'https://i.postimg.cc/yx99GjYd/rajasthan-tourism-02.webp',
    'https://i.postimg.cc/KzCBQwbw/Taj-mahal-Timelapse.jpg',
    'https://i.postimg.cc/Z5J3frkb/UKspritual.webp',
    'https://i.postimg.cc/g24h1ndv/Uttrakhand.webp',
    'https://i.postimg.cc/j5J0GnV2/Andaman-and-Nicobar.webp',
    'https://i.postimg.cc/q7qdxZj8/Best-Beaches-in-North-Goa-1200x900.webp',
    'https://i.postimg.cc/0ycsmqdk/darjeeling.webp',
    'https://i.postimg.cc/3xKhdwGf/Himachal.webp',
    'https://i.postimg.cc/Xqchbwsj/kashmir.webp',
    'https://i.postimg.cc/xdhByjk2/kerala.webp',
    'https://i.postimg.cc/6qrsQspN/rajasthan-tourism-02.webp',
    'https://i.postimg.cc/pLXNP6Ng/Taj-mahal-Timelapse.jpg',
    'https://i.postimg.cc/rwhBsNMz/UKspritual.webp',
    'https://i.postimg.cc/T2rBg6fz/Uttrakhand.webp',
    'https://i.postimg.cc/DydFCbL6/Beautiful-Valleys-in-Himachal-Pradesh.jpg',
    'https://i.postimg.cc/J4WMcQDt/dalhousie-dharamshala.jpg',
    'https://i.postimg.cc/J0jmCsg1/Dharamshala.jpg',
    'https://i.postimg.cc/ZYNJdQq1/Dharamshala-India-1244x700.jpg',
    'https://i.postimg.cc/8C3VFdgp/Himachal-Pradesh-bg.jpg',
    'https://i.postimg.cc/bJtf1GqQ/Himachal-Pradesh-main-bg.png',
    'https://i.postimg.cc/kgJCLXym/Himachal-summers.jpg',
    'https://i.postimg.cc/pdyHXG7c/kasol.jpg',
    'https://i.postimg.cc/0yVvvRtJ/kullu.jpg',
    'https://i.postimg.cc/44pTdhLG/Kullu-Manali-Trip-in-May.jpg',
    'https://i.postimg.cc/cCGyhsJP/Kullu-Overview.jpg',
    'https://i.postimg.cc/C5Cy6WB5/Manali-Package.jpg',
    'https://i.postimg.cc/vHMw6HkV/Shimla-village.jpg',
    'https://i.postimg.cc/KvNS7hhs/Taj-mahal-Timelapse.jpg',
    'https://i.postimg.cc/d0rZ7JDL/beaches-goa.webp',
    'https://i.postimg.cc/rpgk86Qr/1485857759-darjeeling.jpg',
    'https://i.postimg.cc/HkDHz9rV/1655725396-img-20220620-170928.jpg',
    'https://i.postimg.cc/nLnxbVYx/377072.jpg',
    'https://i.postimg.cc/TwwX1k4H/Darjeeling.jpg',
    'https://i.postimg.cc/qR5H3sfB/Darjeeling-1024x639.jpg',
    'https://i.postimg.cc/T15MqKGV/Darjeeling-Tea-Garden-1024x576.jpg',
    'https://i.postimg.cc/w3KKW9TS/darjeeling-town.jpg',
    'https://i.postimg.cc/mZKtxMcG/dooars2.jpg',
    'https://i.postimg.cc/VLM5z6M0/img-1174-scaled.jpg',
    'https://i.postimg.cc/2j1VXTSw/tiger-hill-darjeeling-west-bengal-3-attr-hero.jpg',
    'https://i.postimg.cc/x1vQ4Nmg/862ab87a-4fc2-11ea-be2e-10ce700f7947.jpg',
    'https://i.postimg.cc/0QwsRVHg/1-the-andaman-nicobar-islands.jpg',
    'https://i.postimg.cc/j2S4n1Vm/1871ba445a90f7a24374a356d6dc2e40.jpg',
    'https://i.postimg.cc/8cgV1Lq7/18-RHdk84-BLp-Xsym-P1c-YIaw.jpg',
    'https://i.postimg.cc/3w6Tcs1C/Andaman-and-Nicobar-Island.jpg',
    'https://i.postimg.cc/LsqdLySq/Andaman-and-Nicobar-Islands-Package-1.jpg',
    'https://i.postimg.cc/BQgG0LNv/Andaman-Isles-of-Paradise-Radhanagar-Beach-2.webp',
    'https://i.postimg.cc/90PHzrhJ/andaman-nicobar-beach.jpg',
    'https://i.postimg.cc/Ghz6N0h8/Andaman-nicobar-islands-scaled.jpg',
    'https://i.postimg.cc/9FNJZcQp/Andaman-P1.webp',
    'https://i.postimg.cc/VN2xRjsK/best-andaman-honeymoon-packages.png',
    'https://i.postimg.cc/FRc2n77N/exotic-andaman-tour-packages.png',
    'https://i.postimg.cc/90hv3C7T/honeymoon-packages.jpg',
    'https://i.postimg.cc/6qfFtgrP/i-Stock-39016566-india-andaman-islands-havelock-island-letterbox.jpg',
    'https://i.postimg.cc/y6mMmgMT/photo-1586053226626-febc8817962f.jpg',
    'https://i.postimg.cc/Fsh2DFmX/ross-island.jpg',
    'https://i.postimg.cc/wMnRx49h/1-the-andaman-nicobar-islands.jpg',
    'https://i.postimg.cc/JnnsNCnN/1871ba445a90f7a24374a356d6dc2e40.jpg',
    'https://i.postimg.cc/RCYHThwN/18-RHdk84-BLp-Xsym-P1c-YIaw.jpg',
    'https://i.postimg.cc/sxMZrCCj/Andaman-and-Nicobar-Island.jpg',
    'https://i.postimg.cc/bwxS8RWt/Andaman-and-Nicobar-Islands-Package-1.jpg',
    'https://i.postimg.cc/vZFxpKqy/Andaman-Isles-of-Paradise-Radhanagar-Beach-2.webp',
    'https://i.postimg.cc/MKjj3wYt/andaman-nicobar-beach.jpg',
    'https://i.postimg.cc/PqdpqwnF/Andaman-nicobar-islands-scaled.jpg',
    'https://i.postimg.cc/1zMgV39R/Andaman-P1.webp',
    'https://i.postimg.cc/NGK4tW42/best-andaman-honeymoon-packages.png',
    'https://i.postimg.cc/76WfXtGp/exotic-andaman-tour-packages.png',
    'https://i.postimg.cc/w3K3Ytk2/honeymoon-packages.jpg',
    'https://i.postimg.cc/T15hsjnh/i-Stock-39016566-india-andaman-islands-havelock-island-letterbox.jpg',
    'https://i.postimg.cc/KvLDkBCZ/photo-1586053226626-febc8817962f.jpg',
    'https://i.postimg.cc/pV3BLqGG/ross-island.jpg'
];

function preloadImages(urls, batchSize = 10, delay = 500) {
    let index = 0;
    let loadedImages = [];

    // Try to retrieve loaded images from localStorage
    try {
        loadedImages = JSON.parse(localStorage.getItem("loadedImages")) || [];
    } catch (e) {
        console.error("Error accessing localStorage:", e);
    }

    function loadBatch() {
        if (index >= urls.length) return;

        const batch = urls.slice(index, index + batchSize);
        batch.forEach(url => {
            if (loadedImages.includes(url)) {
                console.log(`Already cached: ${url}`);
                return;
            }

            const img = new Image();
            img.src = url;
            img.onload = () => {
                console.log(`Image loaded: ${url}`);
                loadedImages.push(url);
                try {
                    localStorage.setItem("loadedImages", JSON.stringify(loadedImages));
                } catch (e) {
                    console.error("Error saving to localStorage:", e);
                }
            };
            img.onerror = () => {
                console.error(`Error loading image: ${url}`);
            };
        });

        index += batchSize;
        setTimeout(loadBatch, delay);
    }

    loadBatch();
}

document.addEventListener("DOMContentLoaded", () => preloadImages(urls));