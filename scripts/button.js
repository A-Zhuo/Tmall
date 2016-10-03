/*getElementsByClassName*/
function getElementsByClassName(node,classname)  
{  
    if(node.getElementsByClassName){  
        return node.getElementsByClassName(classname);  
    }  
    else   
    {  
        var results = new Array();  
        var elems = node.getElementsByTagName("*");  
        for(var i = 0;i < elems.length;i++)  
        {  
            if(elem[i].classname.indexOf(classname) != -1)  
            {  
                results[results.length] = elems[i];  
            }  
        }  
        return results;  
    }  
} 
/*增加、减少数量按钮*/ 
function num_button() {
	var val = document.getElementsByClassName("buy_num")[0].getAttribute("value");
	var inc = document.getElementsByClassName("btn_increase")[0];
	var dec = document.getElementsByClassName("btn_decrease")[0];
	inc.onclick = function() {
		if (val < 99){
			val++;
			document.getElementsByClassName("buy_num")[0].value = val;
		}
	}
	dec.onclick = function() {
		if (val > 1) {
			val--;
			document.getElementsByClassName("buy_num")[0].value = val;
		}
	}
}
/*立即购买与加入购物车*/
function button() {
	var val;
	var buy_btn = document.getElementById("buy_now");
	var add_btn = document.getElementById("add_car");
	var oDialog = document.getElementById("dialog");
	var oP = oDialog.getElementsByTagName("p")[0];
	var oSpan = oDialog.getElementsByTagName("span")[0];
	var oMask = document.getElementById("mask");
	buy_btn.onclick = function() {
		val = document.getElementsByClassName("buy_num")[0].value;
		oDialog.style.display = "block";
		oMask.style.display = "block";
		oP.innerHTML = "感谢购买，您购买的数量为：" + val;
	}
	oSpan.onclick = function() {
		oDialog.style.display = "none";
		oMask.style.display = "none";
	}
	add_btn.onclick = function() {
		oDialog.style.display = "block";
		oMask.style.display = "block";
		oP.innerHTML = "已成功加入购物车";
	}
}
window.onbeforeunload = function() {
	var val = document.getElementsByClassName("buy_num")[0].value = 1;
}

addLoadEvent(num_button);
addLoadEvent(button);