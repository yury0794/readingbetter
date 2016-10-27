$(function(){
	$("#btn-login").on("click", function(){
		var id = $("input[name=id]").val();
		var pw = $("input[name=pw]").val();
		
		var vo = {
				"id" : id,
				"pw" : pw
		}
		
		$.ajax({
			url : "../main/login",
			type : "POST",
			data : JSON.stringify(vo),
			contentType: "application/json", 
//			dataType : "json",
			success : function(url) {
				var url = "../" + url;
				
				location.replace(url);
			},
			error : function(jqXHR, status, error) {
				console.error(status + " : " + error);
			}
		});
	});
});