// var name= prompt("what is your name");
// alert("swagat hai londe "+name);

// for detecing button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonInnerhtml= this.innerHTML;
        key_pressed(buttonInnerhtml);
        buttonAnimation(buttonInnerhtml);

    } );

}
function  key_pressed(key) {
  

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        default:
            break;
    }
}

// to detect the keyboard press
document.addEventListener("keydown", function(event) {
    
    key_pressed(event.key);
    buttonAnimation(event.key);
}
);


// animation button 
function buttonAnimation(currentkey) {
    var activeButton=document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout( function(){
        activeButton.classList.remove("pressed");
           
    }, 100);
}
