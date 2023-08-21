const counterField = document.querySelector('#main__glass__counter--js');
const addBtn = document.querySelector('#add-btn--js');
const removeBtn = document.querySelector('#remove-btn--js');
const key = new Date().toISOString().slice(0, 10);

if(localStorage.getItem(key) == null){
    localStorage.setItem(key, 0);
}

counterField.textContent = localStorage.getItem(key);

let counter = Number(counterField.textContent);

console.log(localStorage.getItem(key));

addBtn.addEventListener('click', () => {
    counter += 1;
    counterField.textContent = counter;
    localStorage.setItem(key, counter);
})

removeBtn.addEventListener('click', () => {
    if(counter > 0){
        counter = counter - 1;
        counterField.textContent = counter;
        localStorage.setItem(key, counter);
    } 
})