/*
 * This represents the mountains in the background
 */
var road = new GenericObject("road")
road.assemble = function(roadContext) {

    roadContext.beginPath()
    roadContext.strokeStyle = "black"
    roadContext.fillStyle = jungleColor

    roadContext.moveTo(0,-1.2)
    roadContext.lineTo(0,0.8)
    roadContext.lineTo(1.5,1.65)
    roadContext.lineTo(1.8,1.3)
    roadContext.lineTo(3,-2.1)

    roadContext.closePath()
    roadContext.stroke()
    roadContext.fill()


    roadContext.beginPath()
    roadContext.strokeStyle = "black"
    roadContext.fillStyle = jungleColor

    roadContext.moveTo(2,-1.2)
    roadContext.lineTo(-4.7,0.7)
    roadContext.lineTo(6.1,3.2)
    roadContext.lineTo(7,1.8)
    roadContext.lineTo(7,-1)

    roadContext.stroke()
    roadContext.closePath()
    roadContext.fill()


    // draw the white peak
    roadContext.beginPath()
    roadContext.strokeStyle = "white"
    roadContext.fillStyle = "white"

    roadContext.moveTo(6.4,2.75)
    roadContext.lineTo(5.45,3.05)
    roadContext.lineTo(6.103,3.2)

    roadContext.stroke()
    roadContext.closePath()
    roadContext.fill()
}
