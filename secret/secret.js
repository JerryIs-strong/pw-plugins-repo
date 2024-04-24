const titleElement = document.getElementById('title');
let clickCount = 0;
let ObjectCount = 0;
let overflow = 0;
styleInfo("Welcome to", "secret plugins", "#91b185", "#fff");
titleElement.addEventListener("click", function () {
  clickCount++;
  if (clickCount === 10) {
    titleElement.innerText = "";
    clickCount = 0;
    ObjectCount += 1;
    if (ObjectCount > 0 && ObjectCount <= 3) {
      titleElement.innerText += '❤'.repeat(ObjectCount);
    } else {
      titleElement.innerText += "💘x" + (overflow += 1);
    }
  }
});
