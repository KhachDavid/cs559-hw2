function setGradient(scale1, scale2, scale3) {
    my_gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height)
    my_gradient.addColorStop(scale1, gradientColor1)
    my_gradient.addColorStop(scale2, gradientColor2)
    my_gradient.addColorStop(scale3, "#fff")

    return my_gradient
}