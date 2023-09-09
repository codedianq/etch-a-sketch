//variables
// let gridNum = prompt('Input number for rows and columns:');

//reference for the sketchpad
const container = document.querySelector('#container');
let gridRow = document.getElementsByClassName('rows');
let gridCol = document.getElementsByClassName('cols');

//create a function that will generate the sketchpad grid
function defaultGrid() {
    createRow(16);
    createCol(16);
}
function createRow(numRow) {
    for(let i = 0; i < numRow; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('rows');
        container.appendChild(rowDiv);
    }
}

function createCol(numCol) {
    for(let i = 0; i < gridRow.length; i++) {
        for(let j = 0; j < numCol; j++){
            let colDiv = document.createElement('div');
            colDiv.classList.add('cols');
            gridRow[j].appendChild(colDiv);
            colDiv.addEventListener('mouseover', function() {
                colDiv.style.backgroundColor = 'black'
            })
        }
        
    }
}


defaultGrid()



