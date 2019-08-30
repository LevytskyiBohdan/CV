$('.s1 article div').each(function (index, element) {
    $(element).mouseenter(function () {
        let a = $(element).children()[3];
        $(a).animate({"opacity": "1"}, 1000);
    })
})
$('.s1 article div').each(function (index, element) {
    $(element).mouseleave(function () {
        let a = $(element).children()[3];
        $(a).animate({"opacity": "0"}, 1000);
    })
})