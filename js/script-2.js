// const colorPalette = document.querySelector('.color-palette');
// const selectedColor = document.querySelector('.output');

// colorPalette.addEventListener('click', selectColor);

// function selectColor(event){
//     if(event.target.nodeName !== "BUTTON"){
//         return
//     }
//     const selectedColorrr = event.target.dataset.color;
//     selectedColor.textContent = `Selected color: ${selectedColorrr}`;
//     selectedColor.style.color = selectedColorrr;
// }
// createPaletteItems();
// function createPaletteItems(){
//         const items = [];
//         for (let i = 0; i < 50; i += 1){
//             const color = getRandomHexColor();
//             const item = document.createElement('button');
//             item.type = 'button';
//             item.dataset.color = color;
//             item.style.backgroundColor = color;
//             item.classList.add('item');
//             items.push(item);
//         }
//         colorPalette.append(... items);
// }

// function getRandomHexColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
  
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }