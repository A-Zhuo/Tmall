
window.onload = function() {
	var btn = document.getElementById("btn");
	btn.onclick = function() {
		var oMsg = document.getElementById("message");
		var sTxt = oMsg.value;
		var oUl = document.getElementsByClassName("board_msg")[0];
		var oLi = document.createElement("li");
		var oNode = document.createTextNode(sTxt);
		oLi.appendChild(oNode);
		oUl.appendChild(oLi);
	}
}