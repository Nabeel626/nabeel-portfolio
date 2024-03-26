
//BOUNCE AND TIMING FOR NAV NAME

const makeEaseOut = (timing) => { //This creates a timing for how long the duration is
    return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}

const bounce = (timeFraction) => { //This ensures that the timing of the bounce and duration is caluclated when clicking on the variable 
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

let bounceEaseOut = makeEaseOut(bounce); //This creates a variable for the variable easeout when pressed and then bounce

headerButton.onclick = function() { //This function animates the header name when clicked
    animate({
        duration: 4000, 
        timing: bounceEaseOut, //The timing is to ease out of the current place
        draw: function(progress) {

            if(document.body.clientWidth > 500 && document.body.clientWidth < 700) {
                headerButton.style.left = progress * (document.body.clientWidth - 420) + 'px';
                //This checks the progress of the animation and then calcualtes the width of desktop/ mobile and bounces accordingly
            } else if(document.body.clientWidth > 700) {
                headerButton.style.left = progress * (document.body.clientWidth - 620) + 'px';
                //This checks the progress of the animation and then calcualtes the width of desktop/ mobile and bounces accordingly
            }
        }
    });
};






//REFRESH CONTENT EACH TIME WINDOW IS RESIZED

window.addEventListener("resize", function(event) {
    location.reload(); //This refreshes the webpage every time the screen is adjusted

    // console.log("The width of the document is " + document.body.clientWidth);
    //This writes in the console the size of the browser when resizing
})

// const scrollfuntion = () => {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementsByClassName("navigation").style.fontSize = "30px";
//     } else {
//         document.getElementsByClassName("navigation").style.fontSize = "90px";
//     }
// }

// window.onscroll = scrollfuntion();