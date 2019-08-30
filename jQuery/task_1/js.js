$('.box').animate({
    width: '300px',
    height: '300px',
    opacity: '0.5',
},2000, function(){
    $('.box').animate({
        width: '150px',
        height: '150px',
        opacity: '1',
    }, 2000)
})