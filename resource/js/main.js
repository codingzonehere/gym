$(".carousel").carousel({
	interval : 10000,
	pause : "hover",
	wrap : true,
	keyboard: true,
});	

$(document).ready(function(){
    $(".fa-bars").click(function(){
        $(".cover-molbile").show(1000);
    }); 
    $(".fa-close").click(function(){
        $(".cover-molbile").hide(1000);
    });
});