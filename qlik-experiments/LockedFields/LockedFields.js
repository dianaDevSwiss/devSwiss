requirejs.config({
  paths: {
    LockedFields: [
      "/extensions/LockedFields/component",
      "/extensions/LockedFields/error",
    ],
  },
});

define(["LockedFields"], function (component) {
  return component;
});
