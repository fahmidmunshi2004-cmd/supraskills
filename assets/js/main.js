//================== border rotate ==================//
const boxes = document.querySelectorAll('.border-rotate-box');
let angle = 45;
function rotateBorder() {
    angle += 0.5;
    if (angle >= 360) angle = 0;
    boxes.forEach(box => {
        box.style.setProperty('--border-angle', angle + 'deg');
    });
    requestAnimationFrame(rotateBorder);
}
rotateBorder();

