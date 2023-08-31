let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

function makeMove(cellIndex) {
  const cell = cells[cellIndex];

  if (cell.textContent === '') {
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);
    
    if (checkWin()) {
      setTimeout(() => {
        alert(currentPlayer + ' wins!');
        wins.innerHTML = `<h1>${currentPlayer} wins!</h1>`
      }, 100);
    } else if (isBoardFull()) {
      setTimeout(() => {
        alert('It\'s a draw!');
         wins.innerHTML = `<h1>It\'s a draw!</h1>`
      }, 100);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winningCombos.some(combo => {
    const [a, b, c] = combo;
    return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
  });
}

function isBoardFull() {
  return Array.from(cells).every(cell => cell.textContent !== '');
}

function resetGame() {
  wins.innerHTML = "";
  Array.from(cells).forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('X', 'O');
  });
  currentPlayer = 'X';
}
