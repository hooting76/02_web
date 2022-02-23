$(function(){
	$('.box div').css({opacity:0, background:"#fff"});
	$('.box').hover(function(){
		var th=$(this);
		var thHv1=th.find('.hover1');
		var thHv2=th.find('.hover2');
		var thHv3=th.find('.hover3');
		var thHv4=th.find('.hover4');
		
		thHv1.css('opacity','0.2').stop().animate({height:"0%"},500);
		thHv2.css('opacity','0.2').stop().animate({height:"0%"},500);
		thHv3.css('opacity','0.2').stop().animate({width:"0%"},500);
		thHv4.css('opacity','0.2').stop().animate({width:"0%"},500);
		
	},function(){
		var th=$(this);
		var thHv1=th.find('.hover1');
		var thHv2=th.find('.hover2');
		var thHv3=th.find('.hover3');
		var thHv4=th.find('.hover4');
		
		thHv1.stop().animate({height:'50%', opacity:0},500);
		thHv2.stop().animate({height:'50%', opacity:0},500);
		thHv3.stop().animate({width:'50%', opacity:0},500);
		thHv4.stop().animate({width:'50%', opacity:0},500);
	});
});