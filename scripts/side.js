/*侧边栏鼠标点击事件*/
$(function() {
	$(".cat_btn").click(function() {
		var $img = $(this);
		var $cat = $(this).parents(".cat").find("ul");
		$cat.toggle();
		var src = $(this).attr("src");
		var i = src.lastIndexOf(".");
		var num = src.substr(i-1,1);
		if(num == 2) {
			$img.attr("src","images/buttons/button_001.png")
		}else{
			$img.attr("src","images/buttons/button_002.png")
		}
	})
})
/*侧边栏鼠标经过Tab事件*/
$(function() {
	var $div_li = $(".rank_list_tab ul li");
	$div_li.mouseover(function() {
		var index = $div_li.index(this);
		$(".box > ul").eq(index).show().siblings().hide();
	}).hover(function() {
		$(this).removeClass("out").addClass("hover");
		$(this).siblings().addClass("out").removeClass("hover");
	},function() {
		$(this).removeClass("hover");
	})
})

