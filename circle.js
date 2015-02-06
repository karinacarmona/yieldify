  var circleCanvas = Object.create(HTMLElement.prototype);

  circleCanvas.createdCallback= function(){
    this.canvas = document.createElement('canvas');
    this.canvas.height = this.clientHeight;
    this.canvas.width = this.clientWidth;
    this.appendChild(this.canvas);

    var context = this.canvas.getContext('2d');
    context.globalCompositeOperation = "multiply";
    var color = 0;

    this.addEventListener('click', function(event){
      var inputSelector = this.getAttribute("input");
      var inputElement = document.querySelector(inputSelector);
      var inputWord = inputElement.value;
      var inputWordArray = inputWord.split("");
      var colorArray =["#0AB0F7","#F249C8","#FAF60A"];

      color = (color + 1) % colorArray.length;
      context.beginPath();
      var radius = Math.floor((Math.random()*60)+20);
      context.arc(event.x, (event.y-100), radius, 0, 2*Math.PI);
      context.fillStyle = colorArray[color];
      context.fill();

      var letter = inputWordArray.shift();
      if (letter == undefined) { letter = "" };

      context.font = "bold " + radius + "px Lucida Grande";
      var width = context. measureText(letter).width;
      var height = context.measureText("w").width;
      context.fillStyle = "black";
      context.fillText(letter, (event.x-(width/2)), (event.y-100 + (height/2)));
      inputElement.value = inputWordArray.join("");
    });
  }
  document.registerElement('circle-canvas',{prototype:circleCanvas})

