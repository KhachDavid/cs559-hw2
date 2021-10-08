/**
 * Create a teeny-tiny line GenericObject using
 * the custom assemble() method. The line is very short
 * it goes on the x-axis from (0,0) to (1,0).
 * This is intended to be used for the wheels
*/
var lineForWheel = new GenericObject();
lineForWheel.assemble = function(lineContext) {
    lineContext.beginPath();
    lineContext.moveTo(0,0);
    lineContext.lineTo(1,0);
    lineContext.stroke();
}

/**
 * Create a teeny-tiny line GenericObject using
 * the custom assemble() method. The line is very short
 * it goes on the x-axis from (0,0) to (1,0).
 * This is intended to be used for the sun
*/
var lineForSun = new GenericObject();
lineForSun.assemble = function(lineContext) {
    lineContext.beginPath();
    lineContext.lineWidth = 0.05
    lineContext.moveTo(0,0);
    lineContext.lineTo(1,0);
    lineContext.stroke();
}


/**
 * Same logic as line
 * Create a teeny-tiny filled rectangle GenericObject using the assmeble() method.
*/
var filledRect = new GenericObject();
filledRect.assemble = function(rectContext) {
    rectContext.fillRect(-0.5,-0.5,1,1);
}

var filledCircle = new GenericObject();
filledCircle.assemble = function(circleContext) {
    circleContext.beginPath();
    circleContext.arc(0,0,0.5,0,2*Math.PI);
    circleContext.fill();
}

var circle = new GenericObject();
circle.assemble = function(circleContext) {
    circleContext.beginPath();
    circleContext.arc(0,0,0.5,0,2*Math.PI);
    circleContext.stroke();
}
 