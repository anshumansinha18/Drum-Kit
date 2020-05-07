

var len = document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
         
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(){
      makeSound(event.key);
});


function makeSound(x){
    switch(x){
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom3 = new Audio("sounds/tom-4.mp3");
            tom3.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var  kickBass= new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            var  crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
    }
}