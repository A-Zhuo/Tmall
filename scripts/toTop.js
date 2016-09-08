window.onload = function toTop () {
	var oBtn = document.getElementById("toTop");
	oBtn.onclick = function() {
		document.documentElement.scrollTop = document.body.scrollTop = 0;
		}
	window.onscroll =  function show() {
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