let editStyle = document.forms['editStyle'];
let editBlock = document.querySelector('.editBlock');
let styleBlock = document.querySelector('.styleBlock');
let s1 = document.querySelector('.s1');
let s2 = document.querySelector('.s2');
let s3 = document.querySelector('.s3');
let s4 = document.querySelector('.s4');
let fontSize = document.forms['fontSize'];
let fontWeight = document.forms['fontWeight'];
let textarea = document.forms['textarea'];
let fontFamily = document.forms['fontFamily'];
let chooseColorBG = document.querySelector('.chooseColorBG');
let chooseColorText = document.querySelector('.chooseColorText');
let color = document.forms['colors'];
let addElement = document.forms['addElement'];
let radioTable = document.getElementById('radio6');
let radioList = document.getElementById('radio7');
let table = document.forms['table'];
let list = document.forms['list'];

console.log(addElement);

editStyle.edit.addEventListener('click', function () {
    editBlock.style.display = 'block';
    styleBlock.style.display = 'none';
    textarea.textareaIn.value = s1.innerHTML;
})
editStyle.style.addEventListener('click', function () {
    editBlock.style.display = 'none';
    styleBlock.style.display = 'flex';
})
textarea.add.addEventListener('click', function () {
    s1.style.display = 'none';
    s2.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'flex';
})
textarea.save.addEventListener('click', function () {
    s1.innerHTML = textarea.textareaIn.value;
    editBlock.style.display = 'none';
})

for (let j = 0; j < fontSize.radio.length; j++) {
    fontSize.radio[j].addEventListener('click', function () {
        s1.style.fontSize = this.value + 'px';
    })
}

fontFamily.selFF.addEventListener('change', function () {
    s1.style.fontFamily = this.value;
})

color.bgColor.addEventListener('click', function () {
    chooseColorBG.style.display = 'flex';
    chooseColorText.style.display = 'none';
    for (let i = 0; i < chooseColorBG.children.length; i++) {
        chooseColorBG.children[i].addEventListener('click', function () {
            s1.style.backgroundColor = chooseColorBG.children[i].getAttribute('class');
            chooseColorBG.style.display = 'none';
        })
    }
})

color.textColor.addEventListener('click', function () {
    chooseColorText.style.display = 'flex';
    chooseColorBG.style.display = 'none';
    for (let i = 0; i < chooseColorText.children.length; i++) {
        chooseColorText.children[i].addEventListener('click', function () {
            s1.style.color = chooseColorText.children[i].getAttribute('class');
            chooseColorText.style.display = 'none';
        })
    }
})

fontWeight.checkboxBold.addEventListener('click', function () {
    if (this.value == 'bold') {
        s1.style.fontWeight = this.value;
        this.value = 'normal';
    } else {
        s1.style.fontWeight = this.value;
        this.value = 'bold';
    }

})
fontWeight.checkboxItalic.addEventListener('click', function () {
    if (this.value == 'italic') {
        s1.style.fontStyle = this.value;
        this.value = 'normal';
    } else {
        s1.style.fontStyle = this.value;
        this.value = 'italic';
    }

})


radioTable.addEventListener('click', function () {
    table.style.display = 'flex';
    list.style.display = 'none';
})

radioList.addEventListener('click', function () {
    table.style.display = 'none';
    list.style.display = 'flex';
})


table.createTable.addEventListener('click', function () {
    let divT = document.createElement('div');
    let tableT = document.createElement('table');
    divT.appendChild(tableT);
    for (let i = 0; i < table.countTR.value; i++) {
        let trT = document.createElement('tr');
        tableT.appendChild(trT);
        for (let i = 0; i < table.countTD.value; i++) {
            let tdT = document.createElement('td');
            trT.appendChild(tdT);
            tdT.style.width = table.widthTD.value + 'px';
            tdT.style.height = table.heightTD.value + 'px';
            tdT.style.borderWidth = table.widthBorder.value + 'px';
            tdT.style.borderStyle = table.typeBorder.value;
            tdT.style.borderColor = table.colorBorder.value
            tdT.innerText = 'TD';
        }
    }
    s1.style.display = 'block';
    s2.style.display = 'flex';
    s3.style.display = 'block';
    s4.style.display = 'none';
    textarea.textareaIn.value = s1.innerHTML;
    textarea.textareaIn.value += divT.innerHTML;
})
list.createList.addEventListener('click', function () {
    let divT = document.createElement('div');
    let ulT = document.createElement('ul');
    divT.appendChild(ulT);
    for (let i = 0; i < list.countLi.value; i++) {
        let liT = document.createElement('li');
        ulT.appendChild(liT);
        liT.style.listStyleType = list.typeMarks.value;
        liT.innerText = 'text ' + i;
    }
    s1.style.display = 'block';
    s2.style.display = 'flex';
    s3.style.display = 'block';
    s4.style.display = 'none';
    textarea.textareaIn.value = s1.innerHTML;
    textarea.textareaIn.value += divT.innerHTML;
})

