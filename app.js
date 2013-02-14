function makeClicksController(element) {
  var clicksController = {
    canvas: null,

    bind: function (canvas) {
      this.canvas = $(canvas);
      // add click event trigger
      this.canvas.click(this.doClick.bind(this));
    },

    doClick: function (event) {
      // Get the coord of where the click event took
      // place
      var coords = {
        x: event.pageX,
        y: event.pageY
      };

      // Pop a face box @ the event's coords
      this.addFaceBox(coords);
    },

    addFaceBox: function (coords) {
      this.canvas.append(
        $("<div></div>")
          .addClass("box")
          .css("left", coords.x)
          .css("top", coords.y)
      )
    }
  }

  clicksController.bind(element);

  return clicksController;
};


$(function() {
 // any stuff that manipulates the dom
   makeClicksController($("#canvas"));
});