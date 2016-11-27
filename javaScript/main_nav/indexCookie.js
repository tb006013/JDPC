$(function(){
	$("#guessyoulike .car_btn").click(function(){
		var index = $(this).index();
		var name = $(this).siblings(".p-info").children(".p-name").children("a").html();
		var price = $(this).siblings(".p-info").children(".p-price").children("a").text()
//		console.log(name,price);
	     $.cookie("username"+index, name , { path: '/', expires: 10 });  
	     $.cookie("userprice"+index, price , { path: '/', expires: 10 });  
		console.log($.cookie("username"+index),$.cookie("userprice"+index));
		console.log("username"+index);
		console.log("userprice"+index);
	})

	
	
})