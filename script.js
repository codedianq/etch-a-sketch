//variables
let gridSize = 0;

//reference for the sketchpad
const container = document.querySelector('#container');
let gridRow = document.getElementsByClassName('rows');
let gridCol = document.getElementsByClassName('cols');

//reference for the controls
const controls = document.querySelector('#controls');
const pickSize = document.querySelector('.size-btn');
const rainbow = document.querySelector('.rainbow-btn');
const reset = document.querySelector('.reset-btn');
const eraser = document.querySelector('.erase-btn')

//create a function for Pick Size button that will generate the sketchpad grid
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

//create a function for rainbow button
function rainbowColor() {
    for(let i = 0; i < gridRow.length; i++) {
        for(let j = 0; j < gridCol.length; j++) {
            let randomR = Math.floor(Math.random() * 256) + 1;
            let randomB = Math.floor(Math.random() * 256) + 1;
            let randomG = Math.floor(Math.random() * 256) + 1;
            gridCol[j].addEventListener('mouseover', () => {
                gridCol[j].style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            })
        }
    }
}

//create a function for eraser button
function eraserButton() {
    for(let i = 0; i < gridRow.length; i++) {
        for(let j = 0; j < gridCol.length; j++) {
            gridCol[j].addEventListener('mouseover', () =>{
                gridCol[j].style.backgroundColor = '#000000';
            })
        }
    }
}


//create a function for reset button that resets the sketchpad
function clearReset() {
    for(let i = 0; i < gridRow.length; i++) {
        for(let j = 0; j < gridCol.length; j++) {
            gridCol[j].style.backgroundColor = '#000000'
        }
    }
}

//button for generating grids
pickSize.addEventListener('click', gridNum);
//button for making the color rainbow
rainbow.addEventListener('click', rainbowColor)
//button for eraser that will erase the color painted in sketchpad
eraser.addEventListener('click', eraserButton)
//button for reset that will clear the sketchpad
reset.addEventListener('click', clearReset);

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
                colDiv.style.backgroundColor = 'white'
            })
        }
        
    }
}


defaultGrid()



