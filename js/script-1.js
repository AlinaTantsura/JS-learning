// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скріпт має самостійно визначати переможця гри та виводити модальне вікно з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

const combination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];
let player = 'X';
const historyX = [];
const historyO = [];

const playField = document.querySelector('.content');

createMarup()

playField.addEventListener('click', handleGame);

function handleGame(event) {
    const { target, currentTarget } = event;
    const { id } = target.dataset;
    
    if (target === currentTarget || target.textContent) {
        return;
    }
    target.textContent = player;
    let isWinner = false;
    if (player === 'X') {
        historyX.push(Number(id));
        isWinner = historyX.length > 2 ? checkWinner(historyX) : false;
    }
    else {
        historyO.push(Number(id));
        isWinner = historyO.length > 2 ? checkWinner(historyO) : false;
    }
    let moves = historyX.length + historyO.length;
    if (isWinner) {
        const instance = basicLightbox.create(`
    <div class="box"><h1>Player - ${player} is winner </h1></div>`)
        instance.show();
        resetGame();
        return;
    }
    else if (moves === 9) {
        const instance = basicLightbox.create(`
    <div class="box"><h1>Everybody wons!!!Try one more time!</h1></div>`)
        instance.show();
        resetGame();
        return;
    }
    player = player === 'X' ? 'O' : 'X';

}

function checkWinner(arr) {
    return combination.some(item => item.every(number => arr.includes(number)));
}

function resetGame() {
    player = 'X';
    historyX.splice(0);
    historyO.splice(0);
    createMarup()
}

function createMarup() {
    let markup = '';
    for (let i = 0; i < 9; i += 1){
    markup += `<div class="item" data-id="${i+1}"></div>`;
    }
    playField.innerHTML = markup;
}

