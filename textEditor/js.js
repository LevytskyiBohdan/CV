let fontBtn = document.getElementById('font');
let heightBtn = document.getElementById('heightText');
let colorsBtn = document.getElementById('colors');
let imagesBtn = document.getElementById('images');

let getID = x =>document.getElementById(x);
let getQuery = y =>document.querySelector(y);

//------------------------------------------------------------------------------------------------------------------
getID('bold').addEventListener('click',function () {
    if (getComputedStyle(document.querySelector('.mainText')).fontWeight == 700){
        document.querySelector('.mainText').style.fontWeight = 'normal';
    } else{
        document.querySelector('.mainText').style.fontWeight = 'bold';
    }
})
getID('italic').addEventListener('click',function () {
    if (getComputedStyle(document.querySelector('.mainText')).fontStyle == 'italic'){
        document.querySelector('.mainText').style.fontStyle = 'normal';
    } else{
        document.querySelector('.mainText').style.fontStyle = 'italic';
    }
})
getID('underline').addEventListener('click',function () {
    if (getComputedStyle(document.querySelector('.mainText')).textDecoration == 'underline'){
        document.querySelector('.mainText').style.textDecoration = 'normal';
    } else{
        document.querySelector('.mainText').style.textDecoration = 'underline';
    }
})
getID('strikethrough').addEventListener('click',function () {
    if (getComputedStyle(document.querySelector('.mainText')).textDecoration == 'line-through'){
        document.querySelector('.mainText').style.textDecoration = 'normal';
    } else{
        document.querySelector('.mainText').style.textDecoration = 'line-through';
    }
})
//------------------------------------------------------------------------------------------------------------------

getID('textLeft').addEventListener('click',function () {
    document.querySelector('.mainText').style.textAlign = 'left';
})
getID('textCenter').addEventListener('click',function () {
    document.querySelector('.mainText').style.textAlign = 'center';
})
getID('textRight').addEventListener('click',function () {
    document.querySelector('.mainText').style.textAlign = 'right';
})
//------------------------------------------------------------------------------------------------------------------



getID('font').addEventListener('click', function () {
    if (getComputedStyle(document.getElementById('fontWindow')).display == 'none'){
        getID('fontWindow').style.display = 'block';
    } else{
        getID('fontWindow').style.display = 'none';
    }
    for (let i=0; i<getQuery('.fontWindowIn').children.length; i++){
        getQuery('.fontWindowIn').children[i].addEventListener('click',function () {
            getQuery('.mainTextCol').style.fontFamily = getQuery('.fontWindowIn').children[i].innerHTML;
        })
    }
})

getID('heightText').addEventListener('click', function () {
    if (getComputedStyle(document.getElementById('heightTextWindow')).display == 'none'){
        getID('heightTextWindow').style.display = 'block';
    } else{
        getID('heightTextWindow').style.display = 'none';
    }
    for (let i=0; i<getQuery('.heightTextWindowIn').children.length; i++){
        getQuery('.heightTextWindowIn').children[i].addEventListener('click',function () {
            getQuery('.mainTextCol').style.fontSize = getComputedStyle(getQuery('.heightTextWindowIn').children[i].children[0]).fontSize;
        })
    }
})

//------------------------------------------------------------------------------------------------------------------

// console.log(document.querySelectorAll('#textColor .modal-body>.col'));

getID('colors').addEventListener('click',function () {
    for (let i=0; i<document.querySelectorAll('#textColor .modal-body>.col').length; i++){
        for (let j=0; j<document.querySelectorAll('#textColor .modal-body>.col')[i].children.length; j++){
            document.querySelectorAll('#textColor .modal-body>.col')[i].children[j].addEventListener('click', function () {
                getQuery('.mainTextCol').style.color = document.querySelectorAll('#textColor .modal-body>.col')[i].children[j].children[0].value;
            })
        }
    }
})

//------------------------------------------------------------------------------------------------------------------

function fCol(){
    for (let i=0; i<document.querySelectorAll('.bgcColorIn .modal-body>.col').length; i++){
        for (let j=0; j<document.querySelectorAll('.bgcColorIn .modal-body>.col')[i].children.length; j++){
            document.querySelectorAll('.bgcColorIn .modal-body>.col')[i].children[j].addEventListener('click', function () {
                getQuery('.container-fluid').style.background = document.querySelectorAll('.bgcColorIn .modal-body>.col')[i].children[j].children[0].value;
            })
        }
    }
}
fCol();
getQuery('#bgcColor button[value=colors]').addEventListener('click',function () {
    getQuery('.bgcColorIn').style.display = 'block';
    getQuery('.bgcImgIn').style.display = 'none';
    getQuery('.bgcFileIn').style.display = 'none';
    fCol();
})

getQuery('#bgcColor button[value=images]').addEventListener('click',function () {
    getQuery('.bgcColorIn').style.display = 'none';
    getQuery('.bgcImgIn').style.display = 'block';
    getQuery('.bgcFileIn').style.display = 'none';
    for (let i=0; i<document.querySelectorAll('.bgcImgIn .modal-body>.col').length; i++){
        for (let j=0; j<document.querySelectorAll('.bgcImgIn .modal-body>.col')[i].children.length; j++){
            document.querySelectorAll('.bgcImgIn .modal-body>.col')[i].children[j].addEventListener('click', function () {
                getQuery('.container-fluid').style.background = getComputedStyle(document.querySelectorAll('.bgcImgIn .modal-body>.col')[i].children[j].children[0]).background;
                console.log(getComputedStyle(document.querySelectorAll('.bgcImgIn .modal-body>.col')[i].children[j].children[0]).background)
                console.log(document.querySelectorAll('.bgcImgIn .modal-body>.col')[i].children[j].children[0])
            })
        }
    }

})

getQuery('#bgcColor button[value=files]').addEventListener('click',function () {
    getQuery('.bgcColorIn').style.display = 'none';
    getQuery('.bgcImgIn').style.display = 'none';
    getQuery('.bgcFileIn').style.display = 'block';
    console.log(getQuery('.bgcFileIn input[type=file]'))
    getQuery('.bgcFileIn input[type=file]').onchange = function(event) {
        let reader = new FileReader();
        reader.readAsDataURL(event.srcElement.files[0]);
        let me = this;
        reader.onload = function () {
            let fileContent = reader.result;
            // console.log(fileContent);
            getQuery('.container-fluid').style.background = `url(${fileContent})`;
            getQuery('.container-fluid').style.backgroundSize = '100% 100%';
        }
    }
})

//------------------------------------------------------------------------------------------------------------------
let bollEdit = false;
getID('editBtn').addEventListener('click', function (){
    if (!bollEdit){
        alert('Виконайте вхід');
    }
})


function editF(){
    //edit button
    getID('editBtn').addEventListener('click', function () {
        getQuery('.main').style.display = 'none';
        getQuery('.edit').style.display = 'flex';
        getQuery('.mainTextCol').innerText = getQuery('.mainTextCol').innerHTML;
    })
//save button
    getID('save').addEventListener('click', function () {
        getQuery('.main').style.display = 'flex';
        getQuery('.edit').style.display = 'none';
        getQuery('.mainTextCol').innerHTML = getQuery('.mainTextCol').innerText;
    })
    getID('createTable').addEventListener('click', function () {
        let divTab = document.createElement('div');
        let tableT = document.createElement('table');
        for (let i=0; i<getID('basic-url').value; i++){
            let trT = document.createElement('tr');
            for (let j=0; j<getID('basic-ur4').value; j++){
                let tdT = document.createElement('td');
                tdT.innerText = `text ${j}`;
                tdT.style.border = `${getID('basic-ur3').value}px ${getID('basic-ur7').value} ${getID('basic-ur6').value}`;
                tdT.style.width = `${getID('basic-ur2').value}px`;
                tdT.style.height = `${getID('basic-ur5').value}px`;
                trT.appendChild(tdT);
            }
            trT.style.border = `${getID('basic-ur3').value}px ${getID('basic-ur7').value} ${getID('basic-ur6').value}`;
            tableT.appendChild(trT);

        }
        divTab.appendChild(tableT);
        getQuery('.mainTextCol').innerText += divTab.innerHTML;
    })

    getID('resetTable').addEventListener('click',function () {
        getID('basic-url').value = '';
        getID('basic-ur2').value = '';
        getID('basic-ur3').value = '';
        getID('basic-ur4').value = '';
        getID('basic-ur5').value = '';
        getID('basic-ur6').value = '';
    })

    getID('createOl').addEventListener('click', function () {
        let divT = document.createElement('div');
        let olT = document.createElement('ol');
        for (let i=0; i<getID('basic-urli1').value; i++){
            let liT = document.createElement('li');
            liT.innerText = `item ${i}`;
            liT.style.listStyleType = `${getID('basic-urli3').value}`;
            olT.appendChild(liT);
        }
        divT.appendChild(olT);
        getQuery('.mainTextCol').innerText += divT.innerHTML;
    })
    getID('resetOl').addEventListener('click',function () {
        getID('basic-urli1').value = '';
        getID('basic-urli3').value = '';
    })

    getID('createUl').addEventListener('click', function () {
        let divT = document.createElement('div');
        let ulT = document.createElement('ul');
        for (let i=0; i<getID('basic-urli4').value; i++){
            let liT = document.createElement('li');
            liT.innerText = `item ${i}`;
            liT.style.listStyleType = `${getID('basic-urli5').value}`;
            ulT.appendChild(liT);
        }
        divT.appendChild(ulT);
        getQuery('.mainTextCol').innerText += divT.innerHTML;
    })
    getID('resetUl').addEventListener('click',function () {
        getID('basic-urli4').value = '';
        getID('basic-urli5').value = '';
    })
}


getID('singIn').addEventListener('click', function () {
    console.log(getID('logInForm').value);
    console.log(getID('logInPass').value);
    if (getID('logInForm').value == 'admin' && getID('logInPass').value=='admin'){
         getID('truePass').style.display = 'block';
        getID('wrongPass').style.display = 'none';
        editF();
        bollEdit = true;
    } else {
        getID('wrongPass').style.display = 'block';
        getID('truePass').style.display = 'none';

    }
})