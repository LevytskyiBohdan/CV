// console.log($('body').html())
function randomizer(min,max){
    return min+Math.round(Math.random()*(max-min));
}

let divT = $('<div></div>').css({
    width: '100vw',
    height: '100vh',
    position: 'relative',
});
let divBox = $('<div></div>').css({
    width: '100px',
    height: '100px',
    border: '1px solid black',
    position: 'absolute',
    top: '1vh',
    left: '1vw',
    borderRadius: '50%',
});
divT.append(divBox);
$(divBox).mouseover(function () {
    $(divBox).animate({
        top: randomizer(0,85)+"vh",
        left: randomizer(0,85)+"vw",
        height: randomizer(30,200)+"px",
        width: randomizer(30,200)+"px",
    },1000)
    $(divBox).css({
        background: `rgba(${randomizer(0,255)},${randomizer(0,255)},${randomizer(0,255)},${randomizer(0,255)})`
    })
})



console.log(divT)
$('body').append(divT);
console.log($('body'));
    // document.createElement('div');
//
// $(divT).html = '2';
// $('body').append(divT);
// divT.innerText = '1'
// document.querySelector('body').appendChild(divT);
