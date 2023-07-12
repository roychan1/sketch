const run = () => {
    const container = document.querySelector('.container');
    makeGrid(16, container);

    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        const size = window.prompt("Enter number of squares per side for the new grid (no more than 100)");
        if (isNaN(Number(size)) || Number(size) < 1 || Number(size) > 100) {
            alert("Invalid number entered!")
        } else {
            container.innerHTML = "";
            makeGrid(Number(size), container);
        }
    })
}

const makeGrid = (size, container) => {
    let mouseIsDown = false;
    for (let i = 0; i < size ** 2; i++) {
        const square = document.createElement('div');
        container.appendChild(square);
        square.style.width = `calc(100% / ${size})`;
        square.classList.add('square');
        square.addEventListener('mousedown', () => { mouseIsDown = true; });
        square.addEventListener('mouseup', () => { mouseIsDown = false; });
        square.addEventListener('mouseover', () => {
            if (mouseIsDown) {
                square.style.backgroundColor = 'black';
            }
        });
    }
}

run();