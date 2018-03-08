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
//---------------------------------------------------手机----------------背景色

$(".truesub1").mouseenter(function(){
	if( flagph&&flagpwd&&flagqrpwd &&flagyz){
      	$(".truesub1").css("background","rgba(0,2,2,.7)");
      	
      }
})

//$(".truesub1").click(function(){
//	if( flagph&&flagpwd&&flagqrpwd &&flagyz){
//    	
//    	
//    }
//})

//---------------------------------------------------邮箱----------------背景色

$(".truesub2").mouseenter(function(){
	if( flagemail&&flagpwd2&&flagqrpwd2 &&flagyz2){
      	$(".truesub2").css("background","rgba(0,2,2,.7)")
      	$(".truesub2").click(function(){
      		location.href = "denglu.html";
      	})  
      }
})

//--------------------------------------------------------验证手机号
$(".phonum").focus(function(){
		$(".phonum").val("")
})
 var flagph = null ; 
$(".phonum").blur(function(){	
	  
	var phostr = $(".phonum").val();
	var phoreg = /^1[3|4|5|7|8][0-9]{9}$/;
	if( phoreg.test(phostr) && phostr.length == 11){
		flagph = true;
		console.log("手机号正确")
	}else{
		flagph = false;
		console.log("手机号正确")
	}
})
  
//-----------------------------------------------------验证密码
$(".pwdnum").focus(function(){
	$(this).val("");
})
	var flagpwd = null ;
$(".pwdnum").blur(function(){

	 pwdstr = $(".pwdnum").val();
	var pwdreg = /\w{6,16}/;
	if(pwdreg.test(pwdstr) && pwdstr.length > 6 ){
		flagpwd = true ;
		console.log("密码正确")
	}else{
		flagpwd = false ;
		console.log("密码错误")
	}
})


//----------------------------------------------------确认密码
$(".qrpwdnum").focus(function(){
	$(this).val("");
})
  var flagqrpwd = null;
$(".qrpwdnum").blur(function(){
	
	var qrpwdnum = $(this).val();
	if( qrpwdnum == pwdstr){
		flagqrpwd = true;
		console.log("zhengque")
	}else{
		flagqrpwd = false;
		console.log("错误")
	}
})

//--------------------------邮箱---------------------------验证密码
$(".pwdnum2").focus(function(){
	$(this).val("");
})
var flagpwd2 = null ;
$(".pwdnum2").blur(function(){
	
	 pwdstr2 = $(".pwdnum2").val();
	var pwdreg = /\w{6,16}/;
	if(pwdreg.test(pwdstr2) && pwdstr2.length > 6 ){
		flagpwd2 = true ;
		console.log("密码正确")
	}else{
		flagpwd2 = false ;
		console.log("密码错误")
	}
})

//-------------------------邮箱---------------------------确认密码
$(".qrpwdnum2").focus(function(){
	$(this).val("");
})
  var flagqrpwd2 = null;
$(".qrpwdnum2").blur(function(){
	
	var qrpwdnum2 = $(this).val();
	if( qrpwdnum2 == pwdstr2){
		flagqrpwd2 = true;
		console.log("zhengque")
	}else{
		flagqrpwd2 = false;
		console.log("错误")
	}

})

//----------------------------------------验证邮箱注册码
$(".emalSum").focus(function(){
	$(this).val("")
})
var flagemail = null ;
$(".emalSum").blur(function(){
	var emalstr = $(this).val();
	var emalreg = /^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/;
	if( emalreg.test(emalstr)){
		flagemail = true ;
		console.log("zhengque ")
	}else{
		flagemail = false ;
		console.log("cuowu ")
	}
})


//----------------------------------------------- 验证码
//得到随机函数-----------------------
   function getSum(){   	
   	var arr = [];
   	for( var i = 0 ; i < 4 ; i ++){
   		var cont = rand(48,122)
   		if( cont >= 58 && cont <= 64 || cont >= 91 && cont <= 96 ){
   			i--;
   		}else{
   			arr[i] = String.fromCharCode(cont)
   		}   	
   	}
   		return arr.join("");   	
   }
   
  $(".oIMG").css("color" , getColor() )
  
  $(".oIMG").html( getSum() )
   $(".oIMG2").html( getSum() )
  $(".oIMG").click(function(){
	$(this).html( getSum() )
	$(this).css("color" , getColor() )
})
//-----------------------------------------------------验证码是否正确
  var flagyz = null ;
$(".yzsum").blur(function(){
	
	var yzstr = $(".yzsum").val();
	var Imgstr = $(".oIMG").html();
	if(yzstr == Imgstr ){
		flagyz = true ;
		console.log("验证成功")
	}else{
		flagyz = false ;
		console.log("验证失败")
	}
	
})

//------------------------邮箱-----------------------------验证码是否正确
  var flagyz2 = null ;
$(".yzsum2").blur(function(){
	
	var yzstr2 = $(".yzsum2").val();
	var Imgstr2 = $(".oIMG2").html();
	if(yzstr2 == Imgstr2 ){
		flagyz2 = true ;
		console.log("验证成功")
	}else{
		flagyz2 = false ;
		console.log("验证失败")
	}
	
})

//--------------------------------------------------------------------手机邮箱之间的跳转

$(".brick1").click(function(){
	$(".bannerinpt").css("display" , "none");
	$(".bannerinpt2").css("display" , "block");
})

$(".brick2").click(function(){
	$(".bannerinpt2").css("display" , "none");
	$(".bannerinpt").css("display" , "block");
})
//--------------------------------手机邮箱cookie的存-------------------------
$(".truesub1").click(function(){
	
	if( flagph&&flagpwd&&flagqrpwd &&flagyz){
      	console.log (setCookie("uname1",$(".phonum").val(),3)  )
      	console.log (setCookie("upwd1",$(".pwdnum").val(),3)  )
      	location.href = "denglu.html";
      }

})


$(".truesub2").click(function(){
	
	if( flagemail&&flagpwd2&&flagqrpwd2 &&flagyz2){
      	console.log (setCookie("uname2",$(".emalSum").val(),3)  )
      	console.log (setCookie("upwd2",$(".pwdnum2").val(),3)  )
      }

})
















}//页面加载
