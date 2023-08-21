const counterField = document.querySelector('#main__glass__counter--js');
const addBtn = document.querySelector('#add-btn--js');
const removeBtn = document.querySelector('#remove-btn--js');

let counter = Number(counterField.textContent);

addBtn.addEventListener('click', () => {
    counter += 1;
    counterField.textContent = counter;
})

removeBtn.addEventListener('click', () => {
    if(counter > 0){
        counter = counter - 1;
        counterField.textContent = counter;
    } 
})