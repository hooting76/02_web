$('.tabSet').each(function(){
    let tabDiv = $(this);
    let anchors = tabDiv.find('ul li a'); //클릭할 a테그
    let panelDiv = tabDiv.find('.panels .panel'); //클릭하면 보여질 내용
    let lastAnchor;
    let lastPanel;

    lastAnchor=anchors.filter('.on');
    lastPanel = $(lastAnchor.attr('href'));

    panelDiv.hide();
    lastPanel.show();

    anchors.click(function(e){
        e.preventDefault();
        let currentAnchor=$(this);
        let currentPanel=$(currentAnchor.attr('href'));
        
        lastAnchor.removeClass('on');
        currentAnchor.addClass('on');

        lastPanel.hide();
        currentPanel.show();

        lastAnchor= currentAnchor;
        lastPanel = currentPanel;
    });
});