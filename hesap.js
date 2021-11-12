let screen = document.querySelector("#result");
let btn = document.getElementsByTagName("button");
let calcu = document.querySelector("#calculate");
let del = document.querySelector("#delete");
for (let i = 0; i < 16; i++) {
  if (i != 12 && i != 14) {
    btn[i].addEventListener("click", writerFunc);
  }
}

function writerFunc() {
  screen.value = screen.value + this.value;
}

calcu.addEventListener("click", processFunc);
function processFunc() {
    screen.value = eval(screen.value)
}

del.addEventListener("click", delFunc)
function delFunc() {
    screen.value = ""
}
