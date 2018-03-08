//页面加载
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
	
	
//-----------------------------------------------------------创建商品logo
  $.ajax({
  	"type" : "get",
  	"url" : "pro.json" ,
  	success : function(json){
  		var str = "";
  		for( var attr in json){
  			for( var i = 0 ; i < json[attr].length ; i++){
  				var pro = json[attr][i];
  			    str += `<li>
							<p class = "logonone tabltnone">Check</p>
							<img class = "tabltnone" src="img/images/${pro}" alt="" />
						</li>`
  		    }
  		}
  		$(".tablogos").append( str )
  		
  	}
  })

//-----------------------------------------------鼠标移入li


$(".tablogos").on("mouseenter" , "li", function(){
	
	$(this).find(".logonone").css( {"display" : "block" , "background" : "rgba(0,0,0,.8)" } )
}).on("mouseleave" , "li" , function(){
	$(this).find(".logonone").css("display" , "none")
})

//======================================================鼠标移入商品分类里面的li

$(".tabseschS li").mouseenter(function(){
	$(this).css("color" , "red")
}).mouseleave(function(){
	$(this).css("color" , "#000")
})
//-------------------------------------------------多选的变化
$(".tabp").mouseenter(function(){
	$(this).css("color" , "red")
}).mouseleave(function(){
	$(this).css("color" , "#000")
})
//------------------------------------------鼠标移入商品购物车出现
$(".tablistli").on("mouseenter" , "li" , function(){
	$(this).find(".borderli").css({"border":"1px solid #000" , "width":205,"height" : 301});
	$(this).find(".tabnone").css("display" ,"block")
})

$(".tablistli").on("mouseleave" , "li" , function(){
	$(".borderli").css( "border", "1px solid rgb(247, 247, 247)")
	$(this).find(".tabnone").css("display" ,"none");
})



//==================================动态创建列表信息==========列表分页

$.ajax({
	type : "get",
	url : "xxk.json" ,
	success : function(json){
		var str = "" ; 
		var shoplist = "";
		for( var attr in json){
//			console.log(json[attr])
			str +=`<span cname = '${attr}'>${json[attr].nameall }</span> `;
			for( var i = 0 ; i < json[attr].list.length ; i++){
				var pro = json[attr].list[i];
//				console.log(pro.name);
				shoplist += `<li data-id = '${pro.id}' data-name = '${pro.name}' data-src = '${pro.src}' data-price = '${pro.price}' class = "taball">
				                <div class = "borderli">
								<div class="tabli1">
									<div data-id = '${pro.id}' data-name = '${pro.name}' data-src = '${pro.src}' data-price = '${pro.price}' class="tabnone">加入购物车</div>
									<img src="img/lt2/${pro.src}" alt="" />
								</div>
								<div class="tabli2"><span class= "tabli2l">新品</span><span class= "tabli2r">至尊</span></div>
								<div class="tabli3">${pro.name}</div>
								<div class="tabli4">${pro.price}</div>
								</div>
							</li>`
			}
		}
		$(".tabbot2").html(str);
		$(".tablistli").append(shoplist)
		$(".tabbot2 span").eq(0).css({"color" : "#fff" , "background" : "#000"})
		$(".tabbot3").css("color" , "#000")


		
		$(".tabbot2 span").click(function(){
			var index = $(this).index();
			$(this).css({"color" : "#fff" , "background" : "#000"}).siblings().css({"color" : "#ccc" , "background" : ""})
			var cname = $(this).attr("cname")
			var html = "";
//              console.log( cname )
			for( var i = 0 ; i < json[cname].list.length ; i++){
				var pro = json[cname].list[i];
				html += `<li data-id = '${pro.id}' data-name = '${pro.name}' data-src = '${pro.src}' data-price = '${pro.price}' class = "taball">
				                <div class = "borderli">
								<div class="tabli1">
									<div data-id = '${pro.id}' data-name = '${pro.name}' data-src = '${pro.src}' data-price = '${pro.price}' class="tabnone">加入购物车</div>
									<img src="img/lt2/${pro.src}" alt="" />
								</div>
								<div class="tabli2"><span class= "tabli2l">新品</span><span class= "tabli2r">至尊</span></div>
								<div class="tabli3">${pro.name}</div>
								<div class="tabli4">${pro.price}</div>
								</div>
							</li>`
			}
			$(".tablistli").html( html )
			
			var index = $(this).index();
			if( index == 0){
				$(".tabbot3").css("color" , "#000")
				$(".tabbot1").css("color" , "#a8a8a8")
			}else{
				$(".tabbot1").css("color" , "#000")
				$(".tabbot3").css("color" , "#a8a8a8")				
			}
			
	  })
		
//====================================================================上下页切换
			$(".tabbot3").click(function(){
				$(this).css("color" , "#a8a8a8");
				$(".tabbot1").css("color" , "#000")
				$(".tabbot2 span").eq(0).css({"color" : "#000" , "background" : ""})
				$(".tabbot2 span").eq(1).css({"color" : "#fff" , "background" : "#000"})
				var cname = $(".tabbot2 span").eq(1).attr("cname")
				
				var html = "";
                console.log( cname )
			for( var i = 0 ; i < json[cname].list.length ; i++){
				var pro = json[cname].list[i];
				html += `<li data-id = '${pro.id}' data-name = '${pro.name}' data-src = '${pro.src}' data-price = '${pro.price}' class = "taball">
				                <div class = "borderli">
								<div class="tabli1">
									<div data-id = '${pro.id}' data-name = '${pro.name}' data-src = '${pro.src}' data-price = '${pro.price}' class="tabnone">加入购物车</div>
									<img src="img/lt2/${pro.src}" alt="" />
								</div>
								<div class="tabli2"><span class= "tabli2l">新品</span><span class= "tabli2r">至尊</span></div>
								<div class="tabli3">${pro.name}</div>
								<div class="tabli4">${pro.price}</div>
								</div>
							</li>`
			}
			$(".tablistli").html( html )
			
			})
		$(".tabbot1").click(function(){
				$(this).css("color" , "#a8a8a8");
				$(".tabbot3").css("color" , "#000")
				$(".tabbot2 span").eq(1).css({"color" : "#000" , "background" : ""})
				$(".tabbot2 span").eq(0).css({"color" : "#fff" , "background" : "#000"})
				var cname = $(".tabbot2 span").eq(0).attr("cname")
				
				var html = "";
                console.log( cname )
			for( var i = 0 ; i < json[cname].list.length ; i++){
				var pro = json[cname].list[i];
				html += `<li data-id = '${pro.id}' data-name = '${pro.name}' data-src = '${pro.src}' data-price = '${pro.price}' class = "taball">
				                <div class = "borderli">
								<div class="tabli1">
									<div data-id = '${pro.id}' data-name = '${pro.name}' data-src = '${pro.src}' data-price = '${pro.price}' class="tabnone">加入购物车</div>
									<img src="img/lt2/${pro.src}" alt="" />
								</div>
								<div class="tabli2"><span class= "tabli2l">新品</span><span class= "tabli2r">至尊</span></div>
								<div class="tabli3">${pro.name}</div>
								<div class="tabli4">${pro.price}</div>
								</div>
							</li>`
			}
			$(".tablistli").html( html )
			
		})	

	} //得到数据	

	
})//ajax函数
	


//=========================================================================点击加入购物车按钮

$(".tablistli").on("click" , ".tabnone" , function(e){
	e.stopPropagation();
	  
	var flag = true;
	var arr = []; //定义空数组用来接收商品的价格名称
	var json = {
		"pid" : $(this).data("id"),
		"pname" : $(this).data("name"),
		"psrc" : $(this).data("src"),
		"pprice" : $(this).data("price"),
		cont : 1
	}
	
	var oldCookie = getCookie("shoplist")
	    if( oldCookie != 0){
	    	arr = oldCookie;
	    	for( var i = 0 ; i < arr.length ; i ++){
	    		if( json.pname == arr[i].pname && json.pid == arr[i].pid){
	    			arr[i].cont++;
	    			flag = false;
	    			break;
	    		}
	    	}
	    }
	    if( flag ){
	    	arr.push( json ) ; 
	    }

	setCookie("shoplist" , JSON.stringify(arr)) // 设置cookie
	getCookie("shoplist");
	if( ! confirm("是否添加到购物车") ){
          	  location.href = "cart.html";
          }

	
})

//==================================================================点击图片存在的每一个li跳转到放大镜页面
$('.tablistli').on("click" , ".taball" , function(){
	var taballarr = [];
	var json = {
		         "tid" : $(this).data("id"),
		         "tname" : $(this).data("name"),
		         "tprice" : $(this).data("price"),
		         "tsrc" : $(this).data("src"),
		         "cont" : 1,
           	}
	 taballarr.push(json);
	setCookie("tablist" , JSON.stringify( taballarr ))
	location.href = "page.html";

})









	
}//页面加载
