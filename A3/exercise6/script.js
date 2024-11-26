document.addEventListener('DOMContentLoaded', () => {

    const btns = document.querySelectorAll('button');
    const boxes = document.querySelectorAll('.box');

    const startAnimation = (e, scaleV, ) => {
        anime({
            targets: e,
            scale: {
                value: scaleV,
                easing: 'easeInOutQuart'
              }
        });
    }

    // Iteration to scale correct element
    const elementIteration = (e) => {
        for (let i = 0; i < 3; i++) {
            if (btns[i] === e) {
                startAnimation(boxes[i], 2);
                startAnimation(btns[i], 1.5);
            } else {
                startAnimation(boxes[i], 1);
                startAnimation(btns[i], 1);
            }
        }
    }

    // Events listeners
    btns.forEach(function (btn) {
        btn.addEventListener('click', () => {
            elementIteration(btn);
        });
    });

});