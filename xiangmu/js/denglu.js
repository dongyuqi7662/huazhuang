window.onload = function(){
	//点击图标，调回到首页
$(".nav-left img").click(function(){
	location.href = "shouye.html";
})
//聚焦后input框有下边框
$(".borderbot").focus(function(){
	$(this).css("borderBottom" , "1px solid #000").siblings().css("","")
}).blur(function(){
	$(this).css("borderBottom" , "")
})

//---------------------------------------------------------------------聚焦时内容消失

$(".inpt1").focus(function(){
	$(this).val("");
})

$(".inpt2").focus(function(){
	$(this).val("");
})

//-------------------------------------失去焦点事件


$(".bansub").click(function(){
	if(flagpwd && flagname ){
		location.href = "shouye.html";
	}else{
		alert("登录失败")
	}

})



var flagname = null ;
$(".inpt1").blur(function(){
	var ptname = $(this).val();
	if(ptname == getCookie("uname1") ){
		flagname = true ;
	}else{
		flagname = false ;
	}
})

var flagpwd = null ;
$(".inpt2").blur(function(){
	var ptpwd = $(this).val();
	if(ptpwd == getCookie("upwd1") ){
		flagpwd = true ;
	}else{
		flagpwd = false ;
	}
})






   




//console.log ( getCookie("uname2")  )
//console.log ( getCookie("upwd2")  )

console.log ( getCookie("uname1") )
console.log ( getCookie("upwd1")  )






}//页面加载
