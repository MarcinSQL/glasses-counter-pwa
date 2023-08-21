const counterField = document.querySelector("#main__glass__counter--js");
const addBtn = document.querySelector("#add-btn--js");
const removeBtn = document.querySelector("#remove-btn--js");
const key = new Date().toISOString().slice(0, 10);

if (localStorage.getItem(key) == null) {
  localStorage.setItem(key, 0);
}

counterField.textContent = localStorage.getItem(key);

let counter = Number(counterField.textContent);

addBtn.addEventListener("click", () => {
  counter += 1;
  counterField.textContent = counter;
  localStorage.setItem(key, counter);
});

removeBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter = counter - 1;
    counterField.textContent = counter;
    localStorage.setItem(key, counter);
  }
});

var animateButton = (e) => {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("main__add-btn");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
