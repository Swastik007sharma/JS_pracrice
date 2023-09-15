var rect = document.querySelector(".rect");
console.log(rect);

rect.addEventListener("mousemove",function(details){
    var rectlocation = rect.getBoundingClientRect();
    rect.style.backgroundColor = "rgb(0 0 0)";

    // position of mouse according to rectangle inside it
    var insiderval = details.clientX-rectlocation.x;

    if(insiderval < rectlocation.width/2){
        // left side from center of rectangle
        var redcolor = gsap.utils.mapRange(0, rectlocation.width/2, 255, 0, insiderval);
        gsap.to(rect, {
            background: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,
        });
        

    }
    else if(insiderval > rectlocation.width/2){
        // right side from center of rectangle
        var bluecolor = gsap.utils.mapRange(rectlocation.width/2, rectlocation.width, 0, 255, insiderval);
        gsap.to(rect, {
            background: `rgb(0, 0, ${bluecolor})`,
            ease: Power4,
        });

    }
})

rect.addEventListener("mouseleave",function(details){
    gsap.to(rect, {
        background: "#ffffff",
    });
})

