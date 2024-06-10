define([], function () {
  return {
    initialProperties: {},
    definition: {},
    snapshot: {
      canTakeSnapshot: false,
    },
    paint: function ($element, layout) {
      $element.css("overflow-y", "scroll");
      $element.css("overflow-x", "hidden");
      $element.html(
        "<!DOCTYPE HTML><html><head><title>Error!</title></head><body><p>Something went wrong!</p></body></html>"
      );
    },
  };
});
