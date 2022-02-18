let tabMenu = $('.tab-menu');
function tabsMenu(e){
    e.preventDefault();
    let $this = $(this);
    $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
}
tabMenu.find('>ul>li>a').click(tabsMenu).focus(tabsMenu);