window.onload = function toTop () {
	var oBtn = document.getElementById("toTop");
	//单击按钮页面回到顶部
	oBtn.onclick = function() {
		document.documentElement.scrollTop = document.body.scrollTop = 0;
		}
	window.onscroll =  function show() {
		//兼容Chrome,IE,Firefox
		if (document.body.scrollTop) {
			if (document.body.scrollTop < 400) {
				oBtn.style.display = "none";
			} else {
				oBtn.style.display = "block";
			}
		} else {
			if (document.documentElement.scrollTop < 400) {
				oBtn.style.display = "none";
			} else {
				oBtn.style.display = "block";
			}
		}
	}
}
//刷新时让页面回到顶部
window.onbeforeunload = function() {
	document.documentElement.scrollTop = document.body.scrollTop = 0;
}