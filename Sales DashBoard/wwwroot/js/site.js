const toggle = document.getElementById("toggle-logo");

toggle.addEventListener("click", (() =>{
    toggleIcon();
}));

function changeIcon(toggle, logo) {
    toggle.classList.toggle(logo);
}

function toggleIcon() {
    changeIcon(toggle, "fa-bounce");

    setTimeout(() => {
        changeIcon(toggle, "fa-bounce");
    }, 1000);
}
