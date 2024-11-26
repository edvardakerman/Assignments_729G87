document.addEventListener('DOMContentLoaded', () => {

    const startStopAnimation = (e, height) => {
        console.log(e);
        anime({
            targets: e,
            height: height,
            easing: 'easeInOutQuad',
            direction: 'vertical',
        });
    }

    const rectangles = document.querySelectorAll('.rectangle');

    rectangles.forEach(function (item) {
        item.addEventListener('mouseenter', () => {
            startStopAnimation(item, '80vh');
        });
        item.addEventListener('mouseleave', () => {
            startStopAnimation(item, '5vh');
        });
    });

});