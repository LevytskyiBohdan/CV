let f1 = document.forms['f1'];
let pink = document.querySelector('.pink');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
let wrepper = document.querySelector('.wrapper');
// console.log(f1,pink,green,blue);
f1.newElement.addEventListener('click', function () {
    let divT = document.createElement('div');
    divT.style.width = '50px';
    divT.style.height = '50px';
    divT.style.position = 'absolute';
    divT.style.top = '10px';
    divT.style.left = '10px';
    divT.style.backgroundColor = 'lightgrey';
    divT.style.border = '1px solid grey';
    wrepper.appendChild(divT);

    f1.width.addEventListener('change', function () {
        divT.style.width = f1.width.value + 'px';
    })
    f1.height.addEventListener('change', function () {
        divT.style.height = f1.height.value + 'px';
    })
    pink.addEventListener('click', function () {
        divT.style.backgroundColor = 'pink';
        divT.style.border = '3px double deeppink';
    })
    green.addEventListener('click', function () {
        divT.style.backgroundColor = 'lightgreen';
        divT.style.border = '3px double green';
    })
    blue.addEventListener('click', function () {
        divT.style.backgroundColor = 'lightblue';
        divT.style.border = '3px double blue';
    })
    let arrX = [], arrY = [];
    let a = 0;
    f1.coordinates.addEventListener('click', function () {
        let count = +prompt('Enter the number of pairs');
        for (let i=0; i<count; i++){
            let x = +prompt('Coordinates along the X axis in %');
            arrX[i] = x;
        }
        for (let i=0; i<count; i++){
            let y = +prompt('Coordinates along the Y axis in %');
            arrY[i] = y;
        }
        f1.style.display = 'none';
        // console.log(arrX,arrY);
        divT.addEventListener('mouseover', function () {
            divT.style.top = arrX[a]+'%';
            divT.style.left = arrY[a]+'%';
            if (a==arrX.length){
                a=0;
            } else{
                a++;
            }
        })
    })
})