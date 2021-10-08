/** 
 * @note
 * Check Read me for details on how this was built
 * 
 * @credit https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
 * @credit https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save
 * @credit https://www.w3resource.com/html5-canvas/html5-canvas-lines.php
 * @credit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * @credit https://graphics.cs.wisc.edu/Courses/559-f2015/Examples/QuadCopter/quad.html
 * @credit https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 * @credit https://codepen.io/kona_hk/pen/RBeawb
 * @credit https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth
*/

/**
 *  Create the scene graph data structure.  The global variable world must
 *  refer to the root node of the scene graph.  This function is called in
 *  the init() function.
 */
function setup() {
    // initialize the objects in the scene
    setupHelper()
    
    // create the scene object
    scene = new PuzzleObject("main scene")
    
    // add the road
    scene.add(road)
    
    // add the moon
    scene.add(moon)
    
    // create the windmills
    scene.add(new DynamicObject(windmill, "first windmill").scale(0.3,0.3).translate(1.75,1))
    scene.add(new DynamicObject(windmill, "second windmill").scale(0.2,0.2).translate(3.2,1.3))
    scene.add(new DynamicObject(windmill, "third windmill").scale(0.5,0.5).translate(4.7,0.8))
    
    // create the sun
    scene.add(new DynamicObject(sun, "sun").translate(sunPositionX,3.3))
    
    // create the road
    scene.add(new DynamicObject(filledRect, "road").scale(7,0.8).translate(3.5,0).setColor(asphaltColor)) 
    scene.add(new DynamicObject(filledRect, "orange line on the road").scale(7,0.06).translate(3.5,0).setColor(trafficLineColor))
    
    // add the cars
    scene.add(car1)
    scene.add(car2)
}

// initialize the objects needed by the setup
function setupHelper() {
    addWheels()
    addSun()
    addWindmills()
    addCars()
}

function addWheels() {
    var wheelComponent = new PuzzleObject("wheel component")
    wheelComponent.setColor("black") // color for all but one of the subobjects
    wheelComponent.add(new DynamicObject(filledCircle, "filled circle at 2 scale").scale(2,2))
    wheelComponent.add(new DynamicObject(filledCircle, "fillted circle at 1.6 scale").scale(1.6,1.6).setColor("#CCCCCC"))
    wheelComponent.add(new DynamicObject(filledCircle, "filled circle at 0.4 scale").scale(0.4,0.4))
    for (i = 0; i < 10; i++) {  // add the 12 spokes
       wheelComponent.add(new DynamicObject(lineForWheel, "line for wheel").rotate(i*30))
    }
    wheel = new DynamicObject(wheelComponent, "wheel")
}

function addSun() {
    var sunComponent = new PuzzleObject("Sun Component")
    sunComponent.setColor("yellow") // color for filled circle and light rays
    
    for (var i = 0; i < 12; i++) {  // add the 12 light rays, with different rotations
       sunComponent.add(new DynamicObject(lineForSun, "line #" + i).scale(0.75,0.75).rotate(i * 30))
    }

    sunComponent.add( filledCircle )  // the face of the sun
    sunComponent.add(new DynamicObject(circle, "sun circle").setColor(sunEdgeColor)) // outlines the face
    sun = new DynamicObject(sunComponent, "sun")
}

function addWindmills() {
    var rotorComponent = new PuzzleObject("Componentorary rotor") // a "rotor" consisting of three vanes
    rotorComponent.setColor( "white" ) // color for all of the vanes
    rotorComponent.add( windmillVane )
    rotorComponent.add( new DynamicObject(windmillVane, "first windmill vane").rotate(120) )
    rotorComponent.add( new DynamicObject(windmillVane, "second windmill vane").rotate(240) )
    rotor = new DynamicObject(rotorComponent, "actual rotor")
    
    windmill = new PuzzleObject("windmill")
    windmill.setColor("#E0C8C8") // color for the pole
    windmill.add( new DynamicObject(filledRect, "windmill pole").scale(0.1,3).translate(0,1.5) ) // the pole
    windmill.add( new DynamicObject(rotor, "windmill rotor").translate(0,3) ) // the rotating vanes
}

function addCars() {
    var carComponent1 = new PuzzleObject("car component 1")
    carComponent1.setColor("red") // color for the rectangular body of the cart
    carComponent1.add( new DynamicObject(wheel, "wheel #1").scale(0.8,0.8).translate(1.5,1) )
    carComponent1.add( new DynamicObject(wheel, "wheel #2").scale(0.8,0.8).translate(-1.5,1) )
    carComponent1.add( new DynamicObject(carBody, "body of cart").scale(5,2).translate(0,1) ) // the body of the cart
    car1 = new DynamicObject(carComponent1, "actual cart").scale(0.3,0.3)
    
    var carComponent2 = new PuzzleObject("car component 2")
    carComponent2.setColor("red") // color for the rectangular body of the cart
    carComponent2.add( new DynamicObject(wheel, "wheel #1").scale(0.8,0.8).translate(20.5,-0.1) )
    carComponent2.add( new DynamicObject(wheel, "wheel #2").scale(0.8,0.8).translate(17.5,-0.1) )
    carComponent2.add( new DynamicObject(secondCarBody, "body of cart").scale(5,2).translate(4,1) ) // the body of the cart
    car2 = new DynamicObject(carComponent2, "actual cart").scale(0.3,0.3)
}

/**
 * This will be called before each frame is drawn.
 * Handles the animation of everything in the scene.
 */
async function updateFrame() {
    frameCount += 1
    sunPositionX += 0.01
    car1.translate(-3 + 13 * (frameCount % 300) / 300.0, 0)
    car2.translate(3 - 13 * (frameCount % 300) / 300.0, 0)

    wheel.rotate(-frameCount * 3.1)
    sun.rotate(-frameCount)
    sun.translate(-varyingGradient * 1.65, 0)
    rotor.rotate(frameCount * 2.7)
}

var lastOperation = "sum"
var isBackgroundIntervalPaused = false
var backgroundInterval
var waitTime = 0 // wait time to restart the backgroun interval 

async function updateBackground() {
    // change the background color
    varyingGradient = 
        lastOperation === "sum" 
            ? varyingGradient + 0.01 : varyingGradient - 0.01

    if (varyingGradient > 0.98) {
        varyingGradient -= 0.04
        lastOperation = "subtraction"

        clearInterval(backgroundInterval)
        isBackgroundIntervalPaused = true

    } else if (varyingGradient < 0.02) {
        varyingGradient += 0.04
        lastOperation = "sum"
        clearInterval(backgroundInterval)
        isBackgroundIntervalPaused = true
    }
    backgroundColor = setGradient(0, varyingGradient, 1)
}

async function draw() {
    ctx.save() // reset the changes from the other draw() call 
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    configureCanvas(ctx, leftX, rightX, topY, bottomY, true)
    ctx.lineWidth = pixelScale
    scene.draw(ctx)
    ctx.restore()

    // matches the sun animation with the background gradient parameters
    handleSunAnimation()
}

function start() {
    setup()

    setInterval(async function () {
        updateFrame()
        draw()
    }, 33)

    var changeBackground = async function() {
        updateBackground()
    }

    backgroundInterval = setInterval(changeBackground, 40)
}

start()