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


//===================================================接收数据
var arr = getCookie("shoplist")
var str = "";

for( var i = 0 ; i < arr.length ; i ++){
	var pros = arr[i];

//'<div class="checkBR" '+'data-name="'+ pros.pname +'" '+'data-id="'+pros.pid +'" data-cont="'+pros.cont+'"'+'>'+
console.log( pros.pname)
	
	str += '<div class="checkB">'+
	    		'<p class = "ckBP"><input class= "ck" type="checkbox" /></p>'+
	    	    '<div class="checkBR" '+'data-name="'+ pros.pname +'" '+'data-id="'+pros.pid +'" data-cont="'+pros.cont+'"'+'>'+
	    			'<a href="javascript:; "><img src="img/lt2/'+ pros.psrc +'"/></a>'+
	    			'<div class="chBdiv1">'+
	    				'<h3>' + pros.pid + '</h3>'+
	    				'<h3>' + pros.pname +'</h3>' +
	    	        ' </div>'+
	    	         '<div class="chBdiv2">'+
	    				'<h1>￥' + pros.pprice + '元</h1>' +
	    			'</div>'+
	    			
	    			'<div class="chBdiv3">'+
	    				'<p class = "consum" data-num = "-1" >-</p>'+
	    				'<p class = "chBdiv3p">' + pros.cont + '</p>' +
	    				'<p class = "consum" data-num = "1" >+</p>'+
	    			'</div>'+
	    			
	    			'<div class="chBdiv4">'+
	    				'<h1 class = "allmoney">' +(pros.pprice*pros.cont )+ '元</h1>' +
	    				
	    			'</div>' +
	    			
	    			'<div class="chBdiv5"></div>' +
	     '</div>' +
	'</div>' ;

}
$(".checks").append( str );
console.log( $(".checkBR").data("name") )



//$(".checKT").click(function(){
//alert();
//})

function jiesuan(){
	 	//定义总的商品数量，和总的钱数
	 	var allcont = 0;
	 	var allmoney = 0;
	 	$(".ck:checked").each(function(){
	 		allcont += parseInt( $(this).parent().parent().find(".chBdiv3p").html() )//得到的是字符串，要转换成数字
	 		allmoney += parseInt( $(this).parent().parent().find(".allmoney").html() )//得到的是字符串，要转换成数字
	 	    
	 	    $(".Rlisum em").html(allcont);
	 	    $(".Rlinum").html(allmoney);	 	
	 	})	 	
	 	
    }
               
   //点击复选框结算
$(".checks").on("click" , ".ck" , function(){
     jiesuan();
})
               
//     全选框点击事件
     $(".chekqx").click(function(){
     	// alert()
     	$(".ck").prop( "checked" , $(this).prop("checked") );
     	jiesuan();
//   	console.log( $("ck").parent().parent().find(".allmoney").html() )
     })
               
//================加减的操作
$(".consum").click(function(){
	// alert()
	var sig = $(this).data("num");
	var pid = $(this).parent().parent().data("id")
	var pname = $(this).parent().parent().data("name");
	var pcont = $(this).parent().find(".chBdiv3p").html();
	if( pcont ==1 && sig == "-1"){
	 		return;
	 	}
	
	for( var i = 0 ; i < arr.length ; i ++){
	 		if( arr[i].pid == pid && arr[i].pname == pname){
	 			
	 			sig == 1 ? arr[i].cont++ : arr[i].cont-- ; 	 			
	 		   setCookie("shoplist" , JSON.stringify(arr) );
	 		    break ; 
	 		}	 		
	 }
	$(this).parent().parent().find(".chBdiv3p").html( arr[i].cont);
	$(this).parent().parent().find(".allmoney").html( arr[i].cont*arr[i].pprice);
	jiesuan();

})
           
           
   //================删除cookie
    $(".chBdiv5").click(function(){
	 	console.log(arr)
	 	var pid = $(this).parent().data("id");
	 	var pname = $(this).parent().data("name");
	 	for( var i = 0 ; i < arr.length ; i ++){
	 		//通过判断点击的删除属于哪一个父级元素来判断，删除arr中那条数据，
		 	if( arr[i].pid == pid && arr[i].pname == pname){
		 		arr.splice( i , 1);//找到对应的arr中要删除的数据的下标，删除长度为1；
		 		setCookie("shoplist" , JSON.stringify(arr) );//重新存储cookie	
		 		break;
		 	}		 	
	 	}
	 	$(this).parent().parent().remove();//为了用户体验更好，在页面上也将点击的删除
	 })
               

}//窗口加载
