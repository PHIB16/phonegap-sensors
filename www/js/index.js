<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
    
    
    $('#taptext').on("tap",function(){
        
      // submitText();
      $("#responseText").text( randomAnswer());
        beepOrVibrate();
    });
    
    var onShake = submitText();
     shake.startWatch(onShake, 40);
    
  	   
    
});

var responses = [
        "Yes",
        "No",
        "Maybe",
        "Why are you asking me?",
        "Are you sure about that?",
        "Depends",
        "Please insert bribe for answer",
        "Don't do it",
        "Do it",
        "Elton John",
        "If you say so",
    ]





function beepOrVibrate(){
    
     var rand = random();
        
    	
        
        if(rand){
            beep();
           
           }
        else {
            vibrate();
            
        }
    
}


function random() {
    
    var num = Math.round(Math.random() * 10);
    
    return num;
    
    
}


function randomAnswer(){
    var result = responses[random()];
	return result;
}

function beep(){
    
   
            navigator.notification.beep(1);
           
     
        
}


    
function vibrate(){
        //vibrate for 2000 milliseconds
        navigator.vibrate(2000);
        
    }

function submitText() {
	//var text = $('#textinput').val();
    $("#responseText").text( randomAnswer());
    beepOrVibrate();
}