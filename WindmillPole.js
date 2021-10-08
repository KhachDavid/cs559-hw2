/**
 * @credit https://developpaper.com/html5-canvas-rotating-windmill-drawing/
 */
 var windmillVane = new GenericObject("windmill vane")
 windmillVane.assemble = function(windmillContext) {
     windmillContext.beginPath()
     windmillContext.moveTo(0,0)
     windmillContext.lineTo(0.5,0.1)
     windmillContext.lineTo(1.5,0)
     windmillContext.lineTo(0.5,-0.1)
     windmillContext.closePath()
     windmillContext.fill()
 }
 