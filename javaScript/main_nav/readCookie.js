$(function(){
	var COOKIE_NAME = 'username';
	var COOKIE_PRICE = "userprice"
	 if( $.cookie(COOKIE_NAME) ){  
	   	console.log($.cookie("username"));
	   	console.log($.cookie("userprice"));
	   $("#shopping_center ul .text").text( $.cookie("username") );  
	   $("#shopping_center ul .text span").text( $.cookie("userprice"));  
	 } 
})
