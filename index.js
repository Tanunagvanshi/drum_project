

for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".sound")[i].addEventListener("click", clickFunction)
    function clickFunction() {
        var buttonInnerHTML = this.innerHTML
        drumSound(buttonInnerHTML)
    }}

    document.addEventListener("keypress",function(event){

        drumSound(event.key)
    })



function drumSound(key){
        switch (key) {
            case "a":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play()
                break;
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play()
                break;

            case "m":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play()
                break;
            case "z":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play()
                break;
            case "p":
                var snare = new Audio("sounds/snare.mp3");
                snare.play()
                break;
            case "q":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play()
                break;
            case "r":
                var crash = new Audio("sounds/crash.mp3");
                crash.play()
                break;

            default:
                console.log("clicked")
        }



    }

