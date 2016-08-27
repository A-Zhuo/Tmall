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
function button() {
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
/*立即购买*/
function buy() {
	var buy_btn = document.getElementById("buy_now");
	buy_btn.onclick = function() {
		alert("购买完成");
	}
}
/*加入购物车*/
function add() {
	var add_btn = document.getElementById("add_car");
	add_btn.onclick = function() {
		alert("已成功加入购物车");
	}
}


addLoadEvent(buy);
addLoadEvent(add);
addLoadEvent(button);