let s1 = document.querySelector('.s1');
let f2 = document.forms['f2'];
let i = 0;

function create (x){
    let divT = document.createElement('div');
    divT.setAttribute('class', 'divTask');
    let inputT = document.createElement('input');
    inputT.setAttribute('type', 'checkbox');
    let labelT = document.createElement('label');
    let pT = document.createElement('p');
    i++;
    inputT.setAttribute('id', 'id' + i);
    labelT.setAttribute('for', 'id' + i);
    pT.innerText = x;
    labelT.appendChild(pT);
    divT.appendChild(inputT);
    divT.appendChild(labelT);
    divT.addEventListener('click', function () {
        if (s1.children.length>2){
            s1.removeChild(this);
        } else if(s1.children.length===2) {
            alert('Останній елемент не видаляється');
        }

    })
    s1.appendChild(divT);
}

create('Зробити домашку по JS');
create('Дитину в садок');
create('Купити молоко');
f2.button.addEventListener('click', function () {
    if (f2.text.value != ''){
        create(f2.text.value);
    }
})
