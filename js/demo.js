$(function(){
	var canvas_arr = [0.8,0.85,0.5,0.9,0.74,0.9,0.5];//基数数组，从0--0.99设置，顺序：JavaScript，JQ，bootstrap，HTML/CSS，Photoshop，Dreamweaver
	var huabi = 5;
	/*cnavas start*/
	var step=30;//80步骤完成
// 	console.log(2*Math.PI*0.8/80)
	var canvas = document.getElementsByTagName("canvas");
	for(var i = 0;i<canvas.length;i++){   
		!function(n){
			var ctx = canvas[n].getContext("2d");
		  	ctx.steplv=(canvas_arr[n]*(2*Math.PI))/step;
// 			console.log(ctx.steplv)
          		ctx.stephui=((1-canvas_arr[n])*2*Math.PI)/step;
// 			console.log(ctx.stephui)
	      		ctx.endlv=0;
		  	ctx.lenghui=0;
			function canvas_up(){
            			ctx.endlv = ctx.endlv+ctx.steplv;
            			ctx.lenghui+=ctx.stephui;
				ctx.lineWidth = huabi;
				ctx.clearRect(0,0,130,130);
				ctx.strokeStyle = "#1abc9c";//蓝色
				ctx.beginPath();
				ctx.arc(65,65,55,-Math.PI/2,ctx.endlv-Math.PI/2,false);
				ctx.stroke();
				ctx.closePath();
				ctx.strokeStyle = "#ecf0f1";//灰色
				ctx.beginPath();
				ctx.arc(65,65,55,(ctx.endlv+0.03)-(Math.PI/2),(ctx.endlv+0.03+ctx.lenghui-0.06)-(Math.PI/2),false);
				ctx.stroke();
				ctx.closePath();
				if(ctx.endlv.toFixed(3)>=canvas_arr[n]*2*Math.PI){
					clearInterval(ctx.timer)
				}
			}
	     		ctx.timer = setInterval(canvas_up,30)
	  	}(i)
	}
	/*canvas end*/
	/*锚点动画 start*/
	$(".header ul li a").click(function(e){
		var id_name = this.name;
		var indent = "#"+id_name;
		$("html,body").animate({scrollTop: $(indent).offset().top}, 1000)
		console.log(id_name)
	})
	/*锚点动画 end*/
})

