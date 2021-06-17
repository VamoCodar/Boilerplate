
export default
function segueMouse() {
    let root = document.documentElement;
    root.addEventListener("mousemove", e => {
        root.style.setProperty('--mouse-x', e.clientX + "px");
        root.style.setProperty('--mouse-y', e.clientY + "px");
    });
}