document.addEventListener('DOMContentLoaded', () => {

    const blueSquare = document.getElementById('blueSquare');

    blueSquare.addEventListener('mouseenter', () => {
        blueSquare.remove();
    });

});