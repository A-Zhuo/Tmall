/*首页广告*/
$(function() {
	setInterval("roll()",3000);
})
var p = 1;		
function roll() {
	if(p < 2) {
		$(".ad").animate({left:'-=795px'},1500);
		p++;
	}else{
		$(".ad").animate({left:"0px"},1500);
		p = 1;
	}
}
	
