/*首页广告*/
$(function() {
	setInterval("roll()",2500);
})
var p = 1;		
function roll() {
	if(p < 3) {
		$(".ad").animate({left:'-=795px'},1500);
		p++;
	}else{
		$(".ad").animate({left:"0px"},0);
		p = 1;
	}
}
	
