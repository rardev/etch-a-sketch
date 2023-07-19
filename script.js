const defaultBoardWidth = 16;
const defaultBoardHeight = 16;

let currentBoardHeight;
let currentBoardWidth;

let currentBoard = [];

function displayBoardSlider()
{
    document.getElementById("board-slider").style.visibility = "visible";
}

function initEASBoard(boardWidth, boardHeight)
{
    for(let i = 0; i < boardHeight; i++)
    {
        for(let j = 0; j < boardWidth; j++)
        {
            currentBoard[i][j] = 0;
            createElement("div", "board-cell", "board", "cell-" + i + "-" + j);
        }
    }
}