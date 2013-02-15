function makeClicksController(element) {
  var clicksController = {
    canvas: null,

    bind: function (canvas) {
      this.canvas = canvas;
      // add click event trigger
      this.canvas.click(this.doClick.bind(this));
    },

    doClick: function (event) {
      // Get the coord of where the click event took place
      var coords = {
        x: event.pageX - $("#container").offset().left,
        y: event.pageY - $("#container").offset().top
      };

      // Create a facebox object
      var name = ; //call list
      makeFaceBox(coords, this.canvas, name);
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

  faceBoxes.push(faceBox);

  return faceBox;
};

function printFaceBox (facebox) {
  facebox.canvas.append(
    $("<div></div>")
      .addClass("box")
      .css("left", facebox.coords.x)
      .css("top", facebox.coords.y)
      .append($("<div></div>")
         .addClass("name")
         .text(facebox.name)
      )
  )
}

function toggleFaceBoxes(canvas) {
  if(canvas.is(':empty')){
    $(faceBoxes).each(function () {
      printFaceBox(this);
    });
  } else {
    canvas.empty();
  }
}

function showNameList(names) {
  var theDiv = $("#name-list");
  var theUl = $("<ul></ul>");

  for(var i=0; i<names.length; i++) {
    theUl.append(
      $("<li></li>").text(names[i])
    )
  }

  theDiv.append(theUl);
}

function loadSeedData(seedData){
  $.each(seedData, function(){
    makeFaceBox(this.coords, this.canvas, this.name);
  });
}

var names = ["Jordan", "Mario", "Sarah", "Flowers", "Puppies"];

$(function() {
  var canvas = $("#canvas");
  var faceBoxSeeds = [
    {
      name: "Wolf",
      coords: { x: 307, y: 414 },
      canvas: canvas
    },
    {
      name: "WTF Dog",
      coords: { x: 1064, y: 556 },
      canvas: canvas
    }
  ];


  makeClicksController(canvas);
  $("#toggle").click(function(){ toggleFaceBoxes(canvas) });
  $("#loadSeedData").click(function(){ loadSeedData(faceBoxSeeds) });
});