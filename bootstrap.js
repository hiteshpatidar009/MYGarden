// var angle = 0;
// function galleryspin(sign) { 
// spinner = document.querySelector("#spinner");
// if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
// spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
// }

let angle = 0;
let spinning;

function galleryspin(sign) {
    let spinner = document.querySelector("#spinner");
    
    if (spinning) {
        clearInterval(spinning);
        spinning = null;
    } else {
        spinning = setInterval(() => {
            angle += sign ? -90 : 90;
            spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
        }, 1000); // Change interval speed here (1000 ms = 1 second)
    }
}
