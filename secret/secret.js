const titleElement = document.getElementById('title');
let clickCount = 0;
let loveCount = 0;
let aboveLove = 0;
styleInfo("Welcome to", "secret plugins", "#91b185", "#fff");
titleElement.addEventListener("click", function () {
  clickCount++;
  if (clickCount === 10) {
    titleElement.innerText = "";
    clickCount = 0;
    loveCount += 1;
    if (loveCount > 0 && loveCount <= 3) {
      titleElement.innerText += '❤'.repeat(loveCount);
    } else {
      titleElement.innerText += "💘x" + (aboveLove += 1);
    }
  }
});