const maahmaahyo = [
  "1. Geel laba jir ma kala ordo.",
  "2. War la helay xumo ma leh.",
  "3. Nin aan shaqaysan shilin ma helo.",
  "4. Gari laba nin kama wada qosliso.",
  "5. Dab kaa qaaday ilayn laguu sitaa.",
  "6. Nin xil qaaday eed qaad.",
  "7. Nimaan dhididin ma dhergo.",
  "8. Meel adag laguma nasto.",
  "9. Af jooga looma adeego.",
  "10. Dadaalaa wuu gaaraa"
];

let index = 0;

const maahmaahDiv = document.getElementById('maahmaah');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dhamaadMsg = document.getElementById('dhamaadMsg');

function showMaahmaah() {
  let currentText = maahmaahyo[index];

  // Maahmaahda 10aad
  if (index === 9) {
    dhamaadMsg.classList.remove('hidden'); // muuji "dhamaad"
  } else {
    dhamaadMsg.classList.add('hidden'); // qari haddii aan ahayn dhamaad
  }

  // Maahmaahda 5aad guduud samee
  if (index === 4) {
    maahmaahDiv.style.color = "red";
  } else {
    maahmaahDiv.style.color = "black";
  }

  maahmaahDiv.textContent = currentText;

  // Disable buttons haddii loo baahdo
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === maahmaahyo.length - 1;
}

function nextMaahmaah() {
  if (index < maahmaahyo.length - 1) {
    index++;
    showMaahmaah();
  }
}

function prevMaahmaah() {
  if (index > 0) {
    index--;
    showMaahmaah();
  }
}

showMaahmaah(); // Bilowga
