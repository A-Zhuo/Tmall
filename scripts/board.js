
window.onload = function() {
	var btn = document.getElementById("btn");
	btn.onclick = function() {
		var oMsg = document.getElementById("message");
		var sTxt = oMsg.value;
		var len = sTxt.length;
		if(len > 140) {
			alert("字数不能超过140字！");
		} else if(len <= 0) {
			alert("留言内容不能为空！")
		} else {
			alert("感谢您的留言！")
		};
		var oUl = document.getElementsByClassName("board_msg")[0];
		var oLi = document.createElement("li");
		var oNode = document.createTextNode(sTxt);
		oLi.appendChild(oNode);
		oUl.appendChild(oLi);
	}
}