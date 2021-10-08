function handleSunAnimation() {
    if (isBackgroundIntervalPaused ) {

        if (waitTime < 2000 && waitTime >= 0) {
            waitTime += 33 // 33 is the interval of draw function    
        }

        else if (waitTime >= 2000) {
            isBackgroundIntervalPaused = false
            waitTime = 0
            backgroundInterval = setInterval(updateBackground, 33)    
        }    
    }
}