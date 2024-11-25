document.addEventListener('DOMContentLoaded', () => {

    const dropdown = document.getElementById('dropdown');
    const squares = document.getElementById('squares');

    const generateSquare = (n) => {
        for (let i = 0; i < n; i++) {
            const square = document.createElement('div');
            squares.appendChild(square);
        }
    }

    dropdown.addEventListener('change', (event) => {
        squares.innerHTML = '';
        generateSquare(event.target.value);
    });

});