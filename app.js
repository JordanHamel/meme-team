function makeClicksController(element) {
  var clicksController = {
    canvas: null,

    bind: function (canvas) {
      this.canvas = $(canvas);
      // add click event trigger
      this.canvas.click(this.doClick.bind(this));
    },

    doClick: function (event) {
      // Get the coord of where the click event took place
      var coords = {
        x: event.pageX,
        y: event.pageY
      };

      // Create a facebox object
      var name = prompt("Who is this?");
      var faceBox = makeFaceBox(coords, this.canvas, name);
      faceBoxes.push(faceBox);
    }
  }

  clicksController.bind(element);

  return clicksController;
};

var faceBoxes = [];

function makeFaceBox(coords, canvas, name) {
  var faceBox = {
    name: name,
    coords: coords,
    canvas: canvas
  };

  return faceBox;
};

function printFaceBox (facebox) {
  facebox.canvas.append(
    $("<div></div>")
      .addClass("box")
      .css("left", facebox.coords.x)
      .css("top", facebox.coords.y)
  )
}

function toggleFaceBoxes(canvas){
  canvas = $("#"+canvas);
  if(canvas.is(':empty')){
    $(faceBoxes).each(function () {
      printFaceBox(this);
    });
  } else {
    $(canvas).empty();
  }
}

$(function() {
 // any stuff that manipulates the dom
   makeClicksController($("#canvas"));
});