$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

 $('body').click(function(){
 		var random = Math.floor(Math.random() * 13) + 1;
 		$(".img").css("background", "url(../images/j-smith"+random+".jpg) no-repeat")
	 	$.ajax({
	 		type: "POST",
	 		url: '/',
	 		dataType: 'json'	
	 	}).done(function(data){
	 		$("h2").html(data);
	 	})
	 }); 
});