var isMobile;
var hamburgerToggle;

function onScreenSizeChange() {
    isMobile = window.matchMedia && window.matchMedia('(max-device-width: 700px)').matches || screen.width <= 700;
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