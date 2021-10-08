var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

// set 4x3 layout
canvas.width = 1200
canvas.height = 900

// The root of the scene graph.
var scene

// Pixel scale in the scene.
var pixelScale
        
// pick a nice natural gradient background color
var varyingGradient = 0.1
var backgroundColor = setGradient(0, varyingGradient, 1)

// Current frame count.
var frameCount = 0

// DynamicObjects that are animated.
var car1  
var car2           
var wheel
var sun
var moon
var rotor
var star1
var star2
var windmill

// Dynamic object animation properties
var sunPositionX = 1
var maxSunPositionX = 8

// Let us add divisions to the scene. So it is easier for us to make transformations with the dynamic objects
var leftX = 1   
var rightX = 6  
var bottomY = -1
var topY = 4
