function draw() {
  	var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();   // Create new img element
    var background = new Image();
    img.src = 'https://cdn.codeandweb.com/blog/2014/11/05/animate-sprites-in-css-with-texturepacker/capguy-walk.png'; 
    background.src = 'http://more-sky.com/data/out/10/IMG_420684.png';
    ctx.save();

    function drawImg(image, num) {
   	  num = num ? num - 1: 0; 
   	  ctx.drawImage(img, 184*num, 0, 184, 325, 0, 50, 184, 325);
    };

    function drawBg(img, k) {
      ctx.drawImage(img, 0, 0, 800, 450)
     // ctx.drawImage(img, 0, 0, 50+k*10, 640, 800-10*k, 0, 0+k*10, 450)
    }

    var i = 1;


  setInterval(function() {
  	ctx.clearRect(0,0,800,450);
    drawBg(background)
  	drawImg(img, i);
  	if(i >= 8) {
  		i = 1;
  	} else {
  		i +=1;	
  	};
  }, 100) 
  console.log(1)
}