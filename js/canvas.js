var img = new Image();
img.src = 'https://www.logomoose.com/wp-content/uploads/2014/03/horizon.jpg';
var CanvasXSize = 400;
var CanvasYSize = 400;
var speed = 30;
var scale = 1.05;
var y = -4.5; 
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;
    
    if (imgW > CanvasXSize) {
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }
    
    ctx = document.getElementById('canvas').getContext('2d');
 
    
    return setInterval(draw, speed);
}

function draw() {
    ctx.clearRect(0, 0, clearX, clearY); 
    
 
    if (imgW <= CanvasXSize) {
        
        if (x > CanvasXSize) {
            x = -imgW + x;
        }
    
        if (x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
        }
    
        if (x - imgW > 0) {
            ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
    }

    else {
    
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        
        if (x > (CanvasXSize-imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
    ctx.drawImage(img, x, y,imgW, imgH);
    x += dx;
}