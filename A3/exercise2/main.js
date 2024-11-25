document.addEventListener('DOMContentLoaded', () => {

    const dropdown = document.getElementById('dropdown');
    const squares = document.getElementById('hiddenSquares')

    const showSquare = (n) => {
        for (let i = 0; i < 5; i++) {
            if (i < n) {
                squares.children[i].style.display = 'block';
            }
            else {
                squares.children[i].style.display = 'none';
            }
        }
    }

    dropdown.addEventListener('change', (event) => {
        showSquare(event.target.value);
    });

});