//页面加载
window.onload = function(){
	//----------------------------------------------header  中的轮播效果
	
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
     }).mouseleave( function(){
     	headerplay();
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

//--------------------------大轮播图banner-------------------------------------------------------

var banetimer = setInterval(bannerplay , 3000) // 定时器
var index = 0 ; //li中的下标

function bannerplay(){
	     index ++;
	      if(index == $(".banall-img li").size() ){
		      index = 0;
	        }
	$(".banall-img li").eq(index).fadeIn(2000)
	                 .siblings().fadeOut(2000);
	
	$(".bansum span").eq(index).css("background" , "rgba(255,255,255,1)" )  
	                 .siblings().css("background" , "rgba(255,255,255,0.5)" )
     
	                 	               
}   
//鼠标移入轮播图片事件
    $(".banall-img").mouseenter(function(){
    	
    	clearInterval(banetimer);
    	$(".ospan").css("display" , "block")
    	$(".ospan").mouseover(function(){
    		$(this).css("background" , "rgba(2,2,2,.4)")    		    		
    	}).mouseout(function(){
    		$(this).css("background" , "rgba(2,2,2,.1)")
    	})
//  	//点击事件  	
    }).mouseleave(function(){
    	$(".ospan").css("display" , "none")
    	banetimer = setInterval(bannerplay , 3000)    	
    })
    $(".banimg-left").click(function(){
    	if( index == 0){
    		index = 0;
    		$(".banall-img li").eq(index).fadeIn(2000)
	                 .siblings().fadeOut(2000);
	        $(".bansum span").eq(index).css("background" , "rgba(255,255,255,1)" )  
	                 .siblings().css("background" , "rgba(255,255,255,0.5)" )
	        
    	}else{
    		index --;
    		$(".banall-img li").eq(index).fadeIn(2000)
	                 .siblings().fadeOut(2000);
	        $(".bansum span").eq(index).css("background" , "rgba(255,255,255,1)" )  
	                 .siblings().css("background" , "rgba(255,255,255,0.5)" )
    	}

                 
    })
//  
    $(".banimg-right").click(function(){
    	if( index == 2){
    		index = 2;
    		$(".banall-img li").eq(index).fadeIn(2000)
	                 .siblings().fadeOut(2000);
	        $(".bansum span").eq(index).css("background" , "rgba(255,255,255,1)" )  
	                 .siblings().css("background" , "rgba(255,255,255,0.5)" )
	        
    	}else{
    		index ++;
    		$(".banall-img li").eq(index).fadeIn(2000)
	                 .siblings().fadeOut(2000);
	        $(".bansum span").eq(index).css("background" , "rgba(255,255,255,1)" )  
	                 .siblings().css("background" , "rgba(255,255,255,0.5)" )
    	}
              
                 
    })
//  
//=========================================================content全部品牌 鼠标滑过文字
$(".contyi").mouseenter(function(){
	$(this).css({"color":"#000" , "font-weight":"bold"})
}).mouseleave(function(){
	$(this).css({"color":"#474747" , "font-weight":"normal"})
})
//商店logo查看
$(".cont-flo li").mouseenter(function(){
	$(this).find(".cont-none").css("display" , "block")
	                          .siblings()
	                          .find(".cont-none")
	                          .css("display" , "none")
}).mouseleave(function(){
	$(this).find(".cont-none").css("display" , "none")
})

//小轮播
var conttimer = setInterval( contplay,3000)
var indexcont = 0;

    function contplay(){
   
    	$(".contentimg li").eq(indexcont).fadeIn(2000)
    	                   .siblings()
    	                   .fadeOut(2000)
    	                   
    	$(".contentsum span").eq(indexcont).css("background","rgba(255,255,255,1)" )
    	                     .siblings()
    	                     .css("background","rgba(255,255,255,.3)" )
    	 	   	indexcont ++;
    	  if( indexcont == $(".contentimg li").size() ){
    		indexcont =0
    	  }
 
    }
$(".contbot-left").mouseover(function(){
	clearInterval( conttimer )
	$(".ospan1").css("display" , "block")
    
}).mouseout(function(){
	conttimer = setInterval( contplay,3000);
	$(".ospan1").css("display" , "none")

})

$(".bh div").mouseenter(function(){
	$(this).css("background","rgba(2,2,2,.4)")
}).mouseleave(function(){
	$(this).css("background","rgba(2,2,2,.1)")
})

$(".contimg-left").click(function(){
	if( indexcont == 0){
		indexcont = 1
		$(".contentimg li").eq(indexcont).fadeIn(2000)
    	                   .siblings()
    	                   .fadeOut(2000)
    	                   
    	$(".contentsum span").eq(indexcont).css("background","rgba(255,255,255,1)" )
    	                     .siblings()
    	                     .css("background","rgba(255,255,255,.3)" )
		
	}else{
		indexcont --;
		$(".contentimg li").eq(indexcont).fadeIn(2000)
    	                   .siblings()
    	                   .fadeOut(2000)
    	                   
    	$(".contentsum span").eq(indexcont).css("background","rgba(255,255,255,1)" )
    	                     .siblings()
    	                     .css("background","rgba(255,255,255,.3)" )
	}
})
$(".contimg-right").click(function(){
	if( indexcont == 1){
		indexcont = 0
		$(".contentimg li").eq(indexcont).fadeIn(2000)
    	                   .siblings()
    	                   .fadeOut(2000)
    	                   
    	$(".contentsum span").eq(indexcont).css("background","rgba(255,255,255,1)" )
    	                     .siblings()
    	                     .css("background","rgba(255,255,255,.3)" )
	}else{
		indexcont ++;
		$(".contentimg li").eq(indexcont).fadeIn(2000)
    	                   .siblings()
    	                   .fadeOut(2000)
    	                   
    	$(".contentsum span").eq(indexcont).css("background","rgba(255,255,255,1)" )
    	                     .siblings()
    	                     .css("background","rgba(255,255,255,.3)" )
	}
})

// 精品推荐  news
$(".newsbot img").mouseenter(function(){
	$(this).animate({"marginLeft" :80} , 500)
}).mouseleave(function(){
	$(this).animate({"marginLeft" : 95} , 500)
})

//吸顶效果---------------------------
$(window).scroll(function(){
	var stop = $(document).scrollTop()
	if( $(document).scrollTop() > 700){
		
		$(".seachxdw").css({ "display":"block","top" : 0, "zIndex" : 6})
	}else{
		$(".seachxdw").css({"display":"none", "top" : -100})
	}


})
//	$(".tabw").clone().appendTo( "body" )
//楼梯中标题的文字鼠标滑过文字加粗效果
//$(".acolor").find("a").mouseenter(function(){
//	$(this).css({"color":"#000" , "font-weight":"bold"})
//}).mouseleave(function(){
//	$(this).css({"color":"#474747" , "font-weight":"normal"})
//})



$(".tabss").on("mouseenter" , ".achange",function(){
	$(this).css({"color":"#000" , "font-weight":"bold"})
})

$(".tabss").on("mouseleave" , ".achange",function(){
		$(this).css({"color":"#474747" , "font-weight":"normal"})
})
//图片动画
//$(".ntips").mouseenter(function(){
//	$(this).animate({"marginLeft" :-10} , 300)
//}).mouseleave(function(){
//	$(this).animate({"marginLeft" :0} , 300)
//})

$(".tabss").on("mouseenter" , ".ntips",function(){
	$(this).animate({"marginLeft" :-10} , 300)
})

$(".tabss").on("mouseleave" , ".ntips",function(){
	$(this).animate({"marginLeft" :0} , 300)
})

//动态创建楼梯
for( var i = 7 ; i >= 1 ; i --){
	
	//最大的盒子
	$tabw = $("<div class='tabw louti'></div>");	
	$(".tabss").append($tabw);
	//剧中的盒子7
	$tabs = $( "<div class='tabs'></div>");	
	$tabw.append($tabs);
	//上边的盒子
	$tabtop = $( "<div class='tab-top'></div>");
	$tabs.append($tabtop)
	//上边h1的盒子
	$tabtoph1 = $( "<div class='tab-top1'><h1></h1></div>");
	$tabtop.append($tabtoph1)
    
	//上边ul的盒子
	$tabtopul = $( "<ul class='tab-top2 acolor'></ul>");
	$tabtop.append($tabtopul)
	//中间的盒子
	$tabcent = $( "<div class='tab-cent'></div>");
	$tabs.append($tabcent)
	
	 //中上盒子
	$tabcentl = $( "<div class='tab-centl'></div>");
	$tabcent.append($tabcentl)
	// 中右
	$tabcentr = $("<div class='tab-centr tips'><ul></ul></div>")
    $tabcent.append($tabcentr)
  //下边的盒子
	$tabbot = $( "<div class='tab-bot'><div class = 'tab-bot1'></div></div>");
	$tabs.append($tabbot)

	
}

//分类选择
function htext(bname,attname){
	$.ajax({
		"type" : "get",
		"url" : "shouye.json",
		success : function(json){
			var html = "";
			for( var i = 0 ; i < json[attname].htext.length ; i ++){
				var pro =  json[attname].htext[i]
				html += `
				        <li><a class = "achange" href="#">${pro}</a><em>|</em></li>
						`
						
			}
			bname.append( html )
		}
	})
}
htext( $(".tab-top2").eq(0) , "shopname1")
htext( $(".tab-top2").eq(1) , "shopname2")
htext( $(".tab-top2").eq(2) , "shopname3")
htext( $(".tab-top2").eq(3) , "shopname4")
htext( $(".tab-top2").eq(4) , "shopname5")
htext( $(".tab-top2").eq(5) , "shopname6")
htext( $(".tab-top2").eq(6) , "shopname7")





//八张图片的调用
   function playlt( bname , attname){
   	//console.log( bname[0].nodeName )
   	 //获取数据
   	 $.ajax({
   	 	type:"get",
   	 	url:"shouye.json",
   	 	async:true,
   	 	success : function(json){
   	 		var strban = "";
 			for( var i = 0 ; i < json[attname].list.length; i ++){
 				var pro = json[attname].list[i];
 				strban += `<li>
							<h1> ${pro.id} </h1>
		 					<h2>${pro.name}</h2>
		 					<h3>${pro.price}</h3>	 					
		 					<img class="ntips" src="img/lt2/${pro.src}"/>
						</li>`
 			}
 			bname.html( strban )
   	 	}
   	 });
   }
   //八张图片调用
	playlt( $(".tab-centr ul").eq(0) ,"shopname1");
	playlt( $(".tab-centr ul").eq(1) ,"shopname2");
	playlt( $(".tab-centr ul").eq(2) ,"shopname3");
	playlt( $(".tab-centr ul").eq(3) ,"shopname4");
	playlt( $(".tab-centr ul").eq(4) ,"shopname5");
	playlt( $(".tab-centr ul").eq(5) ,"shopname6");
	playlt( $(".tab-centr ul").eq(6) ,"shopname7");



	//左边大图的调用	  
	function playimg(bname , attname){
		$.ajax({
			type:"get",
			url:"shouye.json",
			success : function(json){
				var ims = "";
				ims += `<img src="img/lt2/${json[attname].leftsrc}" alt="" />`
				bname.html( ims );
			}
			
		});
	}

	playimg($(".tab-centl").eq(0) , "shopname1");
	playimg($(".tab-centl").eq(1) , "shopname2");
	playimg($(".tab-centl").eq(2) , "shopname3");
	playimg($(".tab-centl").eq(3) , "shopname4");
	playimg($(".tab-centl").eq(4) , "shopname5");
	playimg($(".tab-centl").eq(5) , "shopname6");
	playimg($(".tab-centl").eq(6) , "shopname7");
	

	//下边商铺的logo
	function shoplogo( bname , attname){
	   	
	   	 //获取数据
		 $.ajax({
		 	"type" : "get",
		 	"url" : "shouye.json",
		 	success : function( json ){
		 		var logo = "";
		 		//遍历json
	 			

	               
		 			for( var i = 0 ; i < json[attname].shopsrc.length; i ++){
		 				var pro = json[attname].shopsrc[i];
		 				logo += `<ul>
									<li><img src="img/lt2/${pro}" alt="" /><em>|</em></li>
						
								</ul>`
		 			}
		 			
		 		bname.html( logo );
			
		 	}
		 })
	   	
	   }//八张图片调用
	shoplogo( $(".tab-bot1").eq(0) ,"shopname1");
	shoplogo( $(".tab-bot1").eq(1) ,"shopname2");
	shoplogo( $(".tab-bot1").eq(2) ,"shopname3");
	shoplogo( $(".tab-bot1").eq(3) ,"shopname4");
	shoplogo( $(".tab-bot1").eq(4) ,"shopname5");
	shoplogo( $(".tab-bot1").eq(5) ,"shopname6");
	shoplogo( $(".tab-bot1").eq(6) ,"shopname7");
	
	//猜你喜欢克隆
	
	$.ajax({
		type:"get",
		url:"mens.json",
		success : function(json){
			for( var attr in json){

				var page = "";
			for( var i = 0 ; i < json[attr].length ; i ++){
				var pro = json[attr][i];
				page += `<div class="menubotimg">
								<div class="menbot1"><img src="img/lt/${pro.src}" alt="" /></div>
								<div class="menbot2">${pro.id}</div>
								<div class="menbot3"><a href="#">${pro.name}</a></div>
								<div class="menbot4">${pro.price}</div>
						</div>`
			    }
			}
			
			$(".menubot").append( page )
		}
	});
	
	
	//楼梯点击效果
	//当滚动到1500px时,楼梯导航出来
	//当滚动到900px时,返回顶部出现导航出来
	
	//楼层效果-----------------------------------------------
	  
	
	    //出现和隐藏
	    
	  //6347 --1632
	  
	$(window).scroll(function(){
		var stop = $(document).scrollTop();
	
	    if( stop > 1400){
	    	$(".guildw").css("display" , "block")
	    }else{
	    	$(".guildw").css("display" , "none")
	    }
//窗口滚动------------------------------------------------------------
	    $floor = $(".louti").filter(function(){
					//符合条件的楼层 ：   绝对值(该楼层的top-页面滚走距离) <  楼层高度/2
					return Math.abs( $(this).offset().top - stop ) < $(this).outerHeight()/2;
				})
				var index = $floor.index();
	        
	        if( index != -1){
	        	$(".guild").eq(index).css("color" , "red").siblings().css("color" , "rgb(157, 157, 157)")
	        }else{
	        	$(".guild").css("color" , "rgb(157, 157, 157)")
	        }
	        
	//    console.log(index)
	//鼠标滑过
	$(".guild").eq(index).css("color" ,"red")
	
	      
	})  //窗口滚动
	
	            //点击楼层-----------------------------------------------------------------  
	      
	    $(".guild").click(function(){
	    	
	    	var t = $(".louti").eq($(this).index() ).offset().top;
	    	$("html,body").animate({"scrollTop" : t} , 1500 ,function(){
	    		$(".guild").eq(index).css("color" , "red")
	    	})
	    })
	    
	    
	 //  ---------------------------------------------点击返回顶部
	 
	 $(".notes li").mouseover(function(){
	 	var index = $(this).index();
	 	$(this).find(".notes-none").css("display" , "block").end()
	 	                           .siblings().find(".notes-none").css("display" , "none");
	 	$(this).find(".notes-ntwo").css("background" , "rgba(0,0,0,.6)").end()
	 	                           .siblings().find(".notes-ntwo").css("background" , "#ccc");
	 }).mouseout(function(){
	 	$(this).find(".notes-none").css("display" , "none")
	 	$(this).find(".notes-ntwo").css("background" , "#ccc")                           
	 })
	
	$(".notes-none:last").click(function(){
		$("html,body").animate({"scrollTop" : 0}, 2500)
	})
	  
	//---------------------------------------------------------返回顶部出现和隐藏

	$(window).scroll(function(){
		var stop = $(document).scrollTop();
		if( stop > 1200){
			$(".note").css("display" , "block")
		}else{
			$(".note").css("display" , "none")
		}
	})
	
//---------------------------------------------------点击图片跳转到列表页

$(".tabss").on( "click" , ".tab-centr li" , function(){
	location.href = "details.html";
})

//-------------------------猜你喜欢
$(".menubot").on("click", ".menubotimg" ,function(){
	location.href = "details.html";
})


//====================================================选项卡的数据获取
//$tabw = $("<div class='tabw louti'></div>");	
	$(".tabss").append($tabw);
	
	

//================================================================热门名称获取
$(".shoplist1").mouseenter(function(){
	$(".shoplist-none").css("display" , "block")
		 index = $(this).index();
		
	//---------------------------------------------------热门名称获取	
		$.ajax({
			type:"get",
			url:"sx.json",
			success : function(json){
				var str = "";
				for( var attr in json){
						
						var pro = json[attr][index];
						str += `<h1>${pro}</h1>`
					}

				
				$(".list1").html(str) // 热门名称
			}
		});

   

//------------------------------------------------------------------ul名称获取

		$.ajax({
			type:"get",
			url:"sxul.json",
			success : function(json){
//				console.log(json.allname["0"])
				var strul = "";
				var allName = json.allname;
//				console.log(allName[index]);
					for( var i = 0 ; i < allName[index].length; i++){
//						console.log(allName[index][i])
//console.log(index)
						var pro = allName[index][i];
//						console.log(pro)
						strul =`<span>${pro}</span>`;					
						$(".liatul").eq(i).html(strul)
					}
						
					
			}
		});



})

$(".shoplist1").mouseleave(function(){
	$(".shoplist-none").css("display" , "none")

})






}//窗口加载