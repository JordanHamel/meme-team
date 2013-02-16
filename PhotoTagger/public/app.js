function makeClicksController(element, names) {
  var clicksController = {
    canvas: null,
    faceBox: null,
    names: names,

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
      var faceBox = makeFaceBox(coords.x, coords.y, this.canvas, "unnamed");
      this.doNameListSelector();
      this.faceBox = faceBox;
      printFaceBox(faceBox);
    },

    doNameListSelector: function () {
      var that = this;
      //prints name options list
      var theDiv = $("#name-list");
      var theUl = $("<ul></ul>");

      for(var i=0; i<this.names.length; i++) {
        var theLi = $("<li></li>").text(this.names[i]);
        theUl.append(theLi);
        theLi.click(function(){
          that.faceBox.name = $(this).text();
          $("#name-list").empty();
          toggleFaceBoxes(that.canvas);
          toggleFaceBoxes(that.canvas);
          saveFaceBox(that.faceBox);
        });
      }

      theDiv.append(theUl);
    }
  }

  clicksController.bind(element);

  return clicksController;
};

var faceBoxes = [];

function makeFaceBox(coordx, coordy, canvas, name) {
  var faceBox = {
    name: name,
    coords: { x: coordx, y: coordy },
    canvas: canvas
  };

  faceBoxes.push(faceBox);

  return faceBox;
};


function saveFaceBox(faceBox) {
  console.log(faceBox);
  var faceBoxConverted = {
    facebox: {
      name: faceBox.name,
      coordx: faceBox.coords.x,
      coordy: faceBox.coords.y,
      canvas_id: canvas.id
    }
  }
  console.log(faceBoxConverted);
  $.post("/faceboxes.json", faceBoxConverted, function(data){ console.log(data) });
}

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

function loadFaceBoxData(seedData){
  $.each(seedData, function(){
    makeFaceBox(this.coordx, this.coordy, $("#"+this.canvas_id), this.name);
  });
}

$(function() {
  var canvas = $("#canvas");

  var names = ["Dog", "Courage Wolf", "Honey Boo Boo", "Floating Cat",
               "Puppies", "WTF Dog", "Squirrel", "Antoine", "Old Spice Man",
               "Leonardo"];
  makeClicksController(canvas, names);
  $("#toggle").click(function(){ toggleFaceBoxes(canvas) });

  // Prepopulate the face boxes
  $.getJSON('/faceboxes.json', function (data) {
    loadFaceBoxData(data);
  });

});




