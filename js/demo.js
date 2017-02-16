$(function(){
	// var js = $("#javascript");
	var js = document.getElementById("javascript");
	var bst = document.getElementById("boot");
	var htcs = document.getElementById("hs");
	var jq = document.getElementById("jq");
	var phs = document.getElementById("pht");
	var drem = document.getElementById("drem");
	var canvas_arr = [0.8,0.85,0.7,0.9,0.7,0.9,0.5];//基数数组，从0--0.99设置，顺序：JavaScript，JQ，bootstrap，HTML/CSS，Photoshop，Dreamweaver
	var huabi = 5;
	/*javascript cnavas start*/
	var js_ctx = js.getContext("2d");

	var start = 1.51;
	var add = 0.05;
	var canvas = document.getElementsByTagName("canvas");
	for(var i = 0;i<canvas.length;i++){
		var jieguo = canvas_arr[i]*360*(1/180)-0.5;
		var ctx = canvas[i].getContext("2d");
		function canvas_up(){
			
			ctx.lineWidth = huabi;
			ctx.strokeStyle = "#1abc9c";
			ctx.beginPath();

			ctx.arc(65,65,55,1.505*Math.PI,jieguo*Math.PI);
			// ctx.closePath();
			ctx.stroke();
			ctx.strokeStyle = "#ecf0f1";
			ctx.beginPath();
			ctx.arc(65,65,55,(jieguo+0.01)*Math.PI,1.495*Math.PI);
			// ctx.closePath();
			ctx.stroke();
		}
		
	canvas_up();
	}

	/*javascript canvas end*/

})