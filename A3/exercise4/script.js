document.addEventListener('DOMContentLoaded', () => {

    const circleClick = (e) => {
        if (e.target.classList.contains('green')) {
            e.target.classList.remove('green');
        } else {
            e.target.classList.add('green');
        }
    }

    const squareClick = (e) => {
        e.target.style.width = `${e.target.offsetWidth / 2}px`;
        e.target.style.height = `${e.target.offsetHeight / 2}px`;
    }

    const rectangleClick = (e) => {
        let top = parseFloat(window.getComputedStyle(e.target).getPropertyValue('top').slice(0, -2));
        e.target.style.top = `${top + 10}px`;
    }

    window.onclick = e => {
        switch (e.target.classList[0]) {
            case 'circle':
                circleClick(e);
                break;
            case 'square':
                squareClick(e);
                break;
            case 'rectangle':
                rectangleClick(e);
                break;
            default:
                break;
        }
    }
});