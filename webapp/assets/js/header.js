$(function(){
	// 카테고리 드랍박스
	$("#dLabel1").mouseover(function(){
		$("#dLabel1").dropdown('toggle');
	});
	
	$("#dLabel2").mouseover(function(){
		$("#dLabel2").dropdown('toggle');
	});
	
	$("#dLabel3").mouseover(function(){
		$("#dLabel3").dropdown('toggle');
	});
	
	$("#dLabel4").mouseover(function(){
		$("#dLabel4").dropdown('toggle');
	});
	
	$("#dLabel5").mouseover(function(){
		$("#dLabel5").dropdown('toggle');
	});
	
	// 로고
	$("#logo").mouseover(function(){
		document.getElementById("logo").src = "http://ec2-52-34-170-68.us-west-2.compute.amazonaws.com/images/design/logo_p.png";
	});
	
	$("#logo").mouseout(function(){
		document.getElementById("logo").src = "http://ec2-52-34-170-68.us-west-2.compute.amazonaws.com/images/design/logo.png";
	});
	
	// btn-book
	$("#btn-book").mouseover(function changeElement(id){
		var el = document.getElementById("btn-book");
		el.src = "http://ec2-52-34-170-68.us-west-2.compute.amazonaws.com/images/design/p_reading.png";
	});
	
	$("#btn-book").mouseout(function(){
		var el = document.getElementById("btn-book");
		el.src = "http://ec2-52-34-170-68.us-west-2.compute.amazonaws.com/images/design/b_reading.png";
	});
	
	// btn-rank
	$("#btn-rank").mouseover(function changeElement(id){
		var el = document.getElementById("btn-rank");
		el.src = "http://ec2-52-34-170-68.us-west-2.compute.amazonaws.com/images/design/p_ranking.png";
	});
	
	$("#btn-rank").mouseout(function(){
		var el = document.getElementById("btn-rank");
		el.src = "http://ec2-52-34-170-68.us-west-2.compute.amazonaws.com/images/design/b_ranking.png";
	});
	
	   // btn-info
	   $("#btn-info").mouseover(function changeElement(id){
	      var el = document.getElementById("btn-info");
	      el.src = "http://ec2-52-34-170-68.us-west-2.compute.amazonaws.com/images/design/p_myinfo.png";
	   });
	   
	   $("#btn-info").mouseout(function(){
	      var el = document.getElementById("btn-info");
	      el.src = "http://ec2-52-34-170-68.us-west-2.compute.amazonaws.com/images/design/b_myinfo.png";
	   });
	   
	   // btn-center
	   $("#btn-center").mouseover(function changeElement(id){
	      var el = document.getElementById("btn-center");
	      el.src = "http://ec2-52-34-170-68.us-west-2.compute.amazonaws.com/images/design/p_center.png";
	   });
	   
	   $("#btn-center").mouseout(function(){
	      var el = document.getElementById("btn-center");
	      el.src = "http://ec2-52-34-170-68.us-west-2.compute.amazonaws.com/images/design/b_center.png";
	   });
	   //
	   
	   // btn-store
	   $("#btn-store").mouseover(function changeElement(id){
	      var el = document.getElementById("btn-store");
	      el.src = "http://ec2-52-34-170-68.us-west-2.compute.amazonaws.com/images/design/p_store.png";
	   });
	   
	   $("#btn-store").mouseout(function(){
	      var el = document.getElementById("btn-store");
	      el.src = "http://ec2-52-34-170-68.us-west-2.compute.amazonaws.com/images/design/b_store.png";
	   });
});