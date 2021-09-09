let rows = document.getElementById('rows');
let cells = document.getElementById('cells');
var bombs = document.getElementById('bombs');
let noOfElements = document.getElementById('noOfElements');

function generateBoard(noOfRows, noOfCells) {
  let getId = 0;
  for (let i = 0; i < noOfRows; ++i) {
    let tr = table.insertRow(i);
    for (let j = 0; j < noOfCells; ++j) {
        let td = tr.insertCell(j);
        td.id = getId++;
        td.value = 'false';
        td.style.border='1px solid #333';
        td.style.width= '30px';
        td.style.height= '30px';
        td.style.backgroundColor = "grey";
        td.style.textAlign= "center";
        td.onclick = function() {
          checkCell(i, j);
        }  //, {once: true});*/
        /*td.addEventListener ('click', ev => {
        }, {once:true});*/
        td.oncontextmenu = function() {
          putFlag(i, j);
          return false;
        }
      }
    }
    rows = noOfRows;
    cells = noOfCells;
    noOfElements = rows * cells;
    if (noOfElements == 81) {
      bombs = 10;
    } else if (noOfElements == 256) {
      bombs = 40;
    } else {
      bombs = 99;
    }
  putBombs();
}


function putBombs() {
   while (bombs > 0) {
    var randomValue = Math.floor(Math.random() * noOfElements);
    for (var i = 0; i < rows; ++i) {
      for (var j = 0; j < cells; ++j) {
        if (table.rows[i].cells[j].id == randomValue && table.rows[i].cells[j].value == 'false') {
          table.rows[i].cells[j].value = 'true';
          --bombs;
        }
      }
    }
  }
  setCellsValue();
}

function setCellsValue() {
  for (var i = 0; i < rows; ++i) {
    for (var j = 0; j < cells; ++j) {
      countIfBombs = 0;
      for (var indexLine = i - 1; indexLine <= i + 1; ++indexLine) {
        for (var indexCol = j - 1; indexCol <= j + 1; ++indexCol) {
          if (i == 0 && indexLine == i - 1) {
            ++indexLine;
          } else if (indexLine == rows) {
            continue;
          }
          if (j == 0 && indexCol == j - 1) {
            ++ indexCol;
          } else if (indexCol == cells) {
            continue;
          }
          if (table.rows[indexLine].cells[indexCol].value == 'true') {
            ++countIfBombs;
          }
        }
      }
      if (table.rows[i].cells[j].value == 'false') {
        table.rows[i].cells[j].name = countIfBombs;
      }
    }
  }
}

function checkCell(i, j) {
  table.rows[i].cells[j].style.backgroundColor = "white";
  if (table.rows[i].cells[j].value == 'true') {
    endGame();
  } else if (table.rows[i].cells[j].value == 'false' && table.rows[i].cells[j].name != 0) {
    table.rows[i].cells[j].textContent = table.rows[i].cells[j].name;
  } else if (table.rows[i].cells[j].value == 'false' && table.rows[i].cells[j].name == 0) {
      table.rows[i].cells[j].textContent = ' ';
      showMoreCells(i, j);
  }
}

function showMoreCells(i, j) {
  for (var row = i - 1; row <= i + 1; ++row) {
    for (var col = j - 1; col <= j + 1; ++col) {
      if (i == 0 && row == i - 1) {
        ++row;
      } else if (row == rows) {
        continue;
      }
      if (j == 0 && col == j - 1) {
        ++col;
      } else if (col == cells) {
        continue;
      }
      if (table.rows[row].cells[col].name != 0) {
        table.rows[row].cells[col].style.backgroundColor = "white";
        table.rows[row].cells[col].textContent = table.rows[row].cells[col].name;
      } else if (table.rows[row].cells[col].name == 0 && table.rows[row].cells[col].style.backgroundColor == "grey") {
        table.rows[row].cells[col].style.backgroundColor = "white";
        table.rows[row].cells[col].textContent = ' ';
        showMoreCells(row, col);
      }
    }
  }
}

function putFlag(row, col) {
  let idCell = row + "." + col;
  document.getElementById(idCell).style.backgroundImage = "url('img/flag.png')";
  return false;
}

function endGame() {
  document.getElementById("message").innerHTML = "Unlucky you! You just lost!";
  for (var i = 0; i < rows; ++i) {
    for (var j = 0; j < cells; ++j) {
      if (table.rows[i].cells[j].name == 0) {
        table.rows[i].cells[j].textContent = " ";
      } else {
        table.rows[i].cells[j].textContent = table.rows[i].cells[j].name;
      }
      if (table.rows[i].cells[j].value == "true") {
        var img = document.createElement('img');
        img.src = 'bomb.png'
        //table.rows[i].cells[j].style.backgroundImage = "url('img/bomb.png')";
        table.rows[i].cells[j].src = "bomb.png";
      }
    }
  }
  var button = document.getElementById("start");
    button.style.visibility = "visible";
}
