/**
 * Scales the coordinate system
 * This function can be considered as a configuration
 * https://www.i-programmer.info/programming/javascript/14730-javascript-canvas-custom-coordinates.html
 */
function configureCanvas(limitContext, leftX, rightX, topY, bottomY, preserveAspect) {
    var extraSpace
    
    if (preserveAspect) {
        var canvasParameters = Math.abs(canvas.height / canvas.width)
        var userParameters = Math.abs(( bottomY - topY ) / ( rightX - leftX ))

        if (canvasParameters > userParameters) {
           extraSpace = (bottomY - topY) * (canvasParameters / userParameters - 1)
           bottomY += extraSpace/2
           topY -= extraSpace/2
        }

        else if (canvasParameters < userParameters) {
           extraSpace = (rightX - leftX) * (userParameters / canvasParameters - 1)
           rightX += extraSpace / 2
           leftX -= extraSpace / 2
        }
    }
    pixelScale = Math.min(Math.abs(( rightX - leftX ) / canvas.width),Math.abs(( bottomY - topY ) / canvas.height))
    limitContext.scale( canvas.width / (rightX - leftX), canvas.height / (bottomY - topY) )
    limitContext.translate( -leftX, -topY )
}
 