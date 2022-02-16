$(function(){
    $('.afterAndBefore p:eq(2)').after("<p>after 추가함</p>");
    $("<p>insertAfter</p>").insertAfter('#wrap p:eq(1)');
    
    $('.afterAndBefore p:eq(0)').before("<p>before 추가함</p>");
    $("<p>insertBefore</p>").insertBefore('#wrap p:eq(3)');

    // append appendTo (방향전치사)

    let basket = $('.append .basket');
    let apple = $('.append .apple');
    let banana = $('.append .banana');
    let orange = $('.append .orange');

    basket.append(apple);
    basket.append(orange);
    basket.append(banana);

    let basket1 = $('.append1 .basket');
    let apple1 = $('.append1 .apple');
    let banana1 = $('.append1 .banana');
    let orange1 = $('.append1 .orange');

    apple1.appendTo(basket1);

    let basket2 = $('.prepend .basket');
    let apple2 = $('.prepend .apple');
    let banana2 = $('.prepend .banana');
    let orange2 = $('.prepend .orange');

    basket2.prepend(apple2);
    basket2.prepend(banana2);
    basket2.prepend(orange2);

    // clone
    let copyObj = $('.clone .box1').children().clone();
    copyObj.prependTo('.clone .box2');

    $('.clone .box2 p:nth-child(3)').remove();
    $('.clone .box2 p:first').empty();

    // replace
    $('.replace h2').replaceWith('<h3>나 바뀜</h3>');
    $('<p>나도 바뀜</p>').replaceAll('.replace div');
});

