var carBody = new GenericObject();
carBody.assemble = function(carContext) {
    carContext.beginPath();
    carContext.strokeStyle = "black";
    carContext.fillStyle = "black";
    carContext.moveTo(-0.5, 0-0.4+0.53);
    carContext.lineTo(0.5, 0-0.4+0.53);
    carContext.lineTo(0.5, 0.3-0.4+0.53)
    carContext.lineTo(0.1, 1-0.4+0.53)
    carContext.lineTo(-0.4, 1-0.4+0.53)
    carContext.lineTo(-0.5, 0.3-0.4+0.53)
    carContext.closePath();
    carContext.stroke()
    carContext.fill();
}

var secondCarBody = new GenericObject();
secondCarBody.assemble = function(carContext) {
    carContext.beginPath();
    carContext.strokeStyle = "black";
    carContext.fillStyle = "white";
    
    carContext.moveTo(-0.5 + leftX + 2, 0-0.4);
    carContext.lineTo(0.5 + leftX + 2, 0-0.4);
    carContext.lineTo(0.5 + leftX + 2, 0.3-0.4)
    carContext.lineTo(0.4 + leftX + 2, 1-0.4)
    carContext.lineTo(-0.1 + leftX + 2, 1-0.4)
    carContext.lineTo(-0.5 + leftX + 2, 0.3-0.4)

    carContext.closePath();
    carContext.stroke()
    carContext.fill();
}
