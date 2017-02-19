$(function(){
	var canvas_arr = [0.8,0.85,0.6,0.9,0.74,0.9,0.65];//基数数组，从0--0.99设置，顺序：JavaScript，JQ，bootstrap，HTML/CSS，Photoshop，Dreamweaver
	var huabi = 5;
	var step=30;//80步骤完成
	var canvas = document.getElementsByTagName("canvas");
	var on_off = true;
	var img_par = $(".lazyload");
/*封装img lazyload start*/
	function aftload(arr){
		var seeclient = document.documentElement.clientHeight || document.body.clientHeight;
		var scrollheight = $(window).scrollTop();
		var mingan = seeclient*0.2;
		for(var i = 0;i<img_par.length;i++){
			var img = $("img");
			if(img_par[i].dataset){
				img_src = img_par[i].dataset.src;
			}else{
				img_src = img_par[i].getAttribute("data-src");
			}
			if(scrollheight>img_par[i].offsetTop-seeclient +mingan && !img_par[i].isload){
				img[i].src = img_src;
			}
		}
	}
/*封装img lazyload end*/
/* 封装canvas lazyload start*/
	function canvasload(){
		/*canvas 懒加载 start*/
			var elHeight = $("#art").height();
			var b = document.documentElement.clientHeight || document.body.clientHeight;//浏览器可是窗口高度
			// console.log(b)
			var mingan = b*0.3;//敏感度
			// console.log(mingan)
			var c = $("#art").offset().top;//元素距文档顶部距离
			var d = $(window).scrollTop();//滚动条滚动距离
			if(d>=c-b+mingan && on_off == true){
				for(var i = 0;i<canvas.length;i++){   
					!function(n){
						var ctx = canvas[n].getContext("2d");
						ctx.steplv=(canvas_arr[n]*(2*Math.PI))/step;
				        ctx.stephui=((1-canvas_arr[n])*2*Math.PI)/step;
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
							if(ctx.endlv+0.03>ctx.endlv+0.03+ctx.lenghui-0.06){
							}else{
								ctx.arc(65,65,55,(ctx.endlv+0.03)-(Math.PI/2),(ctx.endlv+0.03+ctx.lenghui-0.06)-(Math.PI/2),false);
							}
							ctx.stroke();
							ctx.closePath();
							if(ctx.endlv.toFixed(3)>=canvas_arr[n]*2*Math.PI){
								clearInterval(ctx.timer)
							}
						}
					on_off = false;
			     	ctx.timer = setInterval(canvas_up,30)
		 			}(i)
				}
			}
		}
/*封装canvas lazyload end*/
/*滚动监听 lazyload start*/
	window.onscroll = function(){
		aftload();
		canvasload();
	}
/*滚动监听 lazyload end*/
/*锚点动画 start*/
	$(".header ul li a").click(function(e){
		var id_name = this.name;
		var indent = "#"+id_name;
		$("html,body").animate({scrollTop: $(indent).offset().top}, 1000)
		console.log(id_name)
	})
/*锚点动画 end*/
})
