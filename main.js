document.addEventListener("mousemove", event => {
    document.body.style.setProperty("--x-mouse", event.clientX + "px");
    document.body.style.setProperty("--y-mouse", event.clientY + "px");
});