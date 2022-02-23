// let progressWrap = $('.progress_bar'), 
//     progressBar = progressWrap.find('.bar'),
//     progressText = progressWrap.find('.num'),
//     progressNum = progressText.attr('data-num');

//     progressBar.animate({width:progressNum+"%"},2000);

//     setInterval(textAni,100);
//     function textAni(){
//         let currentWidth = progressBar.width() / progressWrap.width()*100;
//         progressText.text(Math.ceil(currentWidth)+"%");
//     };

$('.progress_bar').each(function () {
    let progressWrap = $(this),
        progressBar = progressWrap.find('.bar'),
        progressText = progressWrap.find('.num'),
        progressNum = progressText.attr('data-num');

    progressBar.animate({ width: progressNum + "%" }, 2000);

    setInterval(textAni, 100);
    function textAni() {
        let currentWidth = progressBar.width() / progressWrap.width() * 100;
        progressText.text(Math.ceil(currentWidth) + "%");
    };
});