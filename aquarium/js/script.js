    move_bubble($("#bubble1Id"));
    move_bubble($("#bubble2Id"));
    move_bubble($("#bubble3Id"));
    move_bubble($("#bubble4Id"));

// Implement the aquarium dynamics in this file

$(".bubbleClass").click(function(){
        
        $(this).stop();
        
        $(this).animate({"opacity": 0}).delay(100);
        
        $(this).animate({"left" : Math.floor(Math.random() * ($(window).width() - 120)) + "px", "top" : $(window).height() + Math.floor(Math.random() * 500)});
        $('embed').remove();
		$('body').append('<embed src="images/bubble.mp3" autostart="true" hidden="true" loop="false">');
        $(this).animate({"opacity": 0.85}, function(){ move_bubble(this); });
        
    });

function move_bubble(ref)
    {
        $(ref).css({"left" : Math.floor(Math.random() * ($(window).width() - 120)) + "px", "top" : $(window).height() + Math.floor(Math.random() * 400)});
        
        $(ref).animate({"top" : "-75px", "left" : "+=300px"} , 9000, "linear", function(){ move_bubble(ref) });
    }


$("#fish1Id").animate({left: "=10"}, function () {squareMovement(this)});

//Declaration of function
function squareMovement(IdRef) {
    
    var windowWidth = $(window).width(); //retrieve current window width
    var windowHeight = $(window).height(); //retrieve current window height
    
    var x = Math.random();
    var y = Math.random();
    
    var newWidth= (windowWidth * x);
     
    var newHight= (windowHeight * y);
    $(IdRef).animate({top:newHight-100, left: newWidth-100},10000).animate({top:newHight-100, left: newWidth-100}, function(){squareMovement(IdRef);});
    
}


$(window).click(function(e) {
    
    $("#fish1Id").stop();
    $("#fish1Id").stop();
    $("#fish1Id").stop();
    $("#fish1Id").stop();
    
    var relativeX = (e.pageX - $(e.target).offset().left);
    var relativeY = (e.pageY - $(e.target).offset().top);
   
    
     $("#fish1Id").animate({top:relativeY-120, left: relativeX-120},1000);
      $("#fish1Id").animate({left: "+=1"},function() {squareMovement(this)});
    });

$("#fish1Id").dblclick(function(){
    $("#fish1Id").stop();
    $("#fish1Id").stop();
    $("#fish1Id").stop();
    $("#fish1Id").stop();
    
$("#fish1Id").css("height","400px");
$("#fish1Id").css("width","400px");
$("#fish1Id").animate({left: "+=1"},function() {squareMovement(this)});
setTimeout(backToNormalSize, 3000);
    $('embed').remove();
		$('body').append('<embed src="images/fish1.mp3" autostart="true" hidden="true" loop="false">');

});




function backToNormalSize(){
$("#fish1Id").css("height","250px");
$("#fish1Id").css("width","250px");
}




$("#fish2Id").animate({left: "+=1"},function() {squareMovement(this)});

//Declaration of function
function squareMovement(IdRef) {
    
    var windowWidth = $(window).width(); //retrieve current window width
    var windowHeight = $(window).height(); //retrieve current window height
    
    var x = Math.random();
    var y = Math.random();
    
    var newWidth= (windowWidth * x);
     
    var newHight= (windowHeight * y);
    $(IdRef).animate({top:newHight-100, left: newWidth-100},10000).animate({top:newHight-100, left: newWidth-100}, function(){squareMovement(IdRef);});
    
}

$("#fish2Id").hover(function(){
    
    $("#fish2Id").stop();
    $("#fish2Id").stop();
    $("#fish2Id").stop();
    $("#fish2Id").stop();
    
var windowWidth = $(window).width(); //retrieve current window width
var windowHeight = $(window).height(); //retrieve current window height
    
    var x = Math.random();
    var y = Math.random();
    
    var newWidth= windowWidth * x;
     
    var newHight= windowHeight * y;
    
    $("#fish2Id").animate({top:newHight-100, left: newWidth-100},1000);
    
    $("#fish2Id").animate({left: "+=1"},function() {squareMovement(this)});
    $('embed').remove();
		$('body').append('<embed src="images/fish2.mp3" autostart="true" hidden="true" loop="false">');

});


