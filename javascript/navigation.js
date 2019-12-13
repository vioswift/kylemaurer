var isMobile;
var hamburgerToggle;

function onScreenSizeChange() {
    isMobile = window.matchMedia && window.matchMedia('(max-device-width: 1024px)').matches || screen.width <= 1024;
    hamburgerToggle = document.getElementById("hamburgerToggle");

    if (isMobile) {
        hamburgerToggle.checked = false;
    } else {
        hamburgerToggle.checked = true;
    }
};

function closeNavMenu() {
    if (isMobile) {
        hamburgerToggle.checked = false;
    }
}