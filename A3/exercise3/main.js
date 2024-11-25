document.addEventListener('DOMContentLoaded', () => {

    const dropdown = document.getElementById('dropdown');
    let output = document.getElementById('output')
    const changeStyleBtn = document.getElementById('changeStyle')
    const input = document.getElementById('input')
    const newPBtn = document.getElementById('new');
    const pContainer = document.getElementById('pContainer');

    changeStyleBtn.addEventListener('click', () => {
        output.classList = [];
        output.classList.add(dropdown.value);
    });

    input.addEventListener('input', (event) => {
        output.textContent = event.target.value;
    });

    newPBtn.addEventListener('click', () => {
        let newP = output.cloneNode(true);
        output.textContent = "Once upon a time...";
        output.classList = [];
        pContainer.appendChild(newP);
        input.value = '';
    });

});