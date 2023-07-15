const pop = document.getElementById("pop");

let row = 3;
let col = 3;

const set = () => {
  for (let i = 0; i < row; i++) {
    const rowBox = document.createElement("div");

    for (let j = 0; j < col; j++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => toggle(button));
      rowBox.appendChild(button);
    }

    pop.appendChild(rowBox);
  }
};

const toggle = (el) => {
  el.classList.toggle("pop");
};

set();
