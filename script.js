//variables
let gridSize = 0;

//reference for the sketchpad
const container = document.querySelector('#container');
let gridRow = document.getElementsByClassName('rows');
let gridCol = document.getElementsByClassName('cols');

//reference for the controls
const controls = document.querySelector('#controls');
const pickSize = document.querySelector('.size-btn');

//create a function that will generate the sketchpad grid
function gridNum() {
    for(let i = 0; i < gridRow.length; i++) {
        for(let j = 0; j < gridCol.length; j++) {
            container.removeChild(gridRow[i])
        }
    }
    gridSize = prompt('Pick your grid size between 1 - 100 only', '16');
    let gridSizeInt = parseInt(gridSize)
    if(gridSizeInt > 100) {
        alert(`${gridSizeInt} is not Valid. Choose between 1 - 100 only`)
        defaultGrid()
    } else if(gridSizeInt < 0) {
        alert(`${gridSizeInt} is not Valid. Choose between 1 - 100 only`)
        defaultGrid()
    } else {
        createRow(gridSize);
        createCol(gridSize);
    }
    
}

//button for generating grids
pickSize.addEventListener('click', (gridNum))

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



