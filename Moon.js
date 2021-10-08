var moon = new GenericObject("moon")
moon.assemble = function(moonContext) {
    
    moonContext.beginPath()
    moonContext.strokeStyle = moonColor
    moonContext.fillStyle = moonColor

    moonContext.arc(6,3.65,0.2,0,2*Math.PI)
    moonContext.stroke()
    moonContext.fill()
}    
