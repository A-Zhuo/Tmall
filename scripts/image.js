/*图片切换*/
$(function(){
	var $imgrolls = $(".pro_img ul li");
	var $imgcolor = $(".pro_color ul li");
	var index = 0;
	$imgrolls.mouseover(function(){
		index = $imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();	
	$imgcolor.click(function(){
		index = $imgcolor.index(this);
		showImg(index+5);
	});	
})
/*显示相应图片*/
function showImg(index){
	var $pro_img = $(".pro_img");
	var $imglist = $pro_img.find("ul li a");
	$(".pro_img").find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$imglist.css("opacity","0.7").eq(index).css("opacity","1"); 
}