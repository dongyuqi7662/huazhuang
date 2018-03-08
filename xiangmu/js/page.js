window.onload = function(){
	
	$(".header-lb").css("position","absolute")
   var timer = setInterval( headerplay , 3000);
//  var oUlist = $(".header-lb li")
//  var index = 0;

	function headerplay(){
     $(".header-lb").animate( {"top" : "-30px"},2000,function(){
     	$(".header-lb li:first").appendTo( $(".header-lb") )
     } )
     $(".header-lb").mouseenter(function(){
     	clearInterval( timer )
     }).mouseout( function(){
     	timer = setInterval( headerplay , 3000);
     })

	}
//-------------------------------搜索框------------------------------------------
$(".sousuo").focus(function(){
	$(this).val("");
})


//------------------------------鼠标滑过购物袋-------------------------------------------
$(".right_box").mousemove(function(){
	
	$(".right_none").css({"display" :"block" , "zIndex" : 1})
	$(".right_bottom").css("display" ,"none")
	
}).mouseout(function(){
	$(".right_none").css("display" ,"none")
	$(".right_bottom").css("display" ,"block")
	
})
//点击购物袋中的登录按钮
$(".seach-dl").click(function(){
	location.href = "denglu.html";
})

//=============================================================返回首页==
	
$(".returnl").click(function(){
	location.href = "shouye.html";
})

//==============================================================鼠标滑过小图
//$(".glassL").mouseover(function(){
//	$(".mask").css("display" , "block")
//	$(".glassR").css("display" , "block")
//}).mouseout(function(){
//
//	$(".mask").css("display" , "none")
//	$(".glassR").css("display" , "none")
//})



//=====================================================创建商品详情

	 var str = getCookie("tablist");
      console.log(str)
     for( var i = 0 ; i < str.length ; i ++){
     	  var pros = str[i]
     	  var html = `<div class="glassL">
        				
        				<div class="maskIMG"><img src="img/lt2/${pros.tsrc}"/></div>
        				<div class="mask"></div>
        			</div>
        		
        			<div class="glassLS">
        				<div class="glaLS1 glaS0"> < </div>
        				<div class="glaLS2">
        					<ul>
        						<li><img style="width:50px" src="img/lt2/${pros.tsrc}"/></li>
        					</ul>
        				</div>
        				<div class="glaLS3 glaS0"> > </div>
        			</div>
        		
        			<div class="glassR">
        				<div class="glaRIMG"><img style="width:1200px;height:1200px" src="img/lt2/${pros.tsrc}" alt="" /></div>
        			</div>`

     	  var shoplist = ` 
	        	    	<div class="maessageT">
	        	    		<h1>${pros.tname}</h1>
	        	    		<p class = "masTp1">${pros.tid}</p>
	        	    		<p class = "masTp2">肌肤更加澄澈清透，焕发光采。</p>
	        	    	</div>
	        	    	
	        	    	<div class="maessageC1">
	        	    		<h2>价格</h2>
	        	    		<p class = "maC1p">
	        	    		
	        	    			<span class = "maC1span2">${pros.tprice}</span> 
	        	    			<span class = "maC1span3">新品</span> 
	        	    		</p>
	        	    	</div>
	        	    	
	        	    	
	        	    	<div class="maessageB">
	        	    		<div class="maBinput"><input type="text" value = "${pros.cont}"/></div>
	        	    		<div class="maBcnt">
	        	    			<p class="maBp1">+</p>
	        	    		    <p class="maBp2">-</p>
	        	    		</div>
	        	    		<div class="maBpage">
	        	    			<p>加入购物车</p>
	        	    			
	        	    		</div>
	        	    		
	        	    	</div>`
	     	 
     }
     $(".messagew").html(shoplist);
     $(".glassw").html(html)

//console.log( str )

//============================================================拖动遮罩层运动
$(".glassL").mouseover(function(){
	$(".mask").css("display" , "block")
	$(".glassR").css({"display":"block", "z-index" : 5})
	
	
	$(".glassL").mousemove(function(e){  //=============鼠标拖动
		var e = e || event ;
	//mask的移动距离
		var x = e.pageX - $(".glassw").offset().left - $(".mask").width()/2;
		var y = e.pageY - $(".glassw").offset().top - $(".mask").height()/2;

       
		
		var maxL = $(".glassw").width() - $(".mask").width();
		var maxT = $(".glassw").height() - $(".mask").height();
		
		x = x < 0 ? 0 : ( x > maxL ? maxL : x);
		y= y < 0 ? 0 : ( y > maxT ? maxT : y)
		
	    // 大图的移动距离	
		 var bigX = x * ( $('.glaRIMG img').width() - $(".glaRIMG").width())/
		                ( $(".glassw").width() - $(".mask").width() )
		                
		 var bigY = y * ( $('.glaRIMG img').height() - $(".glaRIMG").height())/
		                ( $(".glassw").height() - $(".mask").height() )
		
		
		
		$(".mask").css({"left" : x , "top" : y})
		$(".glaRIMG").css({"left" : -bigX , "top" : -bigY})
		return false;
	});
	
	
	
	$(".glassL").mouseout(function(){   //-------------鼠标抬起
		$(".mask").css("display" , "none")
	    $(".glassR").css("display" , "none")
	})
	
}) //鼠标移入左图















}  //窗口加载