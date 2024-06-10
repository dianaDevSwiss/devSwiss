function sanitizeInput(input) {
  return input
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

define(["jquery", "qlik"], function ($, qlik) {
  "use strict";

  let initialSelections = null;
  let currentSelections = null;
  let lockedFieldNames = null;

  const app = qlik.currApp(this);

  // window.qlik = qlik;
  // window.app = app;

  const selectionState = app.selectionState();

  function ensureLocked() {
    // console.log("ensureLocked", lockedFieldNames, initialSelections);
    if (lockedFieldNames === null || initialSelections === null) {
      return;
    }

    if (initialSelections === currentSelections) {
      for (const fieldName of lockedFieldNames) {
        // console.log("iterating", fieldName);
        if (fieldName in initialSelections) {
          // console.log("locking", fieldName);
          app.field(fieldName).lock();
        }
      }
    } else {
      // for (const fieldName in initialSelections) {
      //   app.field(fieldName).selectedValues([initialSelections[fieldName]]);
      // }
    }
  }

  function lockFields(fields) {
    lockedFieldNames = fields;

    // console.log("lockFields", lockedFieldNames);
    ensureLocked();
  }

  function listener() {
    currentSelections = selectionState.selections.reduce(
      (memo, selection) => ({
        ...memo,
        [selection.fieldName]: selection.qSelected,
      }),
      {}
    );
    // console.log("listener", currentSelections);

    if (initialSelections === null) {
      initialSelections = currentSelections;
    }

    ensureLocked();
  }

  selectionState.OnData.bind(listener);

  return {
    definition: {
      type: "items",
      component: "accordion",
      items: {
        appearancePanel: {
          uses: "settings",
          items: {
            ds_fields: {
              ref: "ds.fields",
              type: "string",
              label: "comma separated locked fields",
              defaultValue: "",
              component: "textarea",
              rows: 10,
              maxlength: 1000000,
            },
          },
        },
      },
    },
    paint: function ($element, layout) {
      lockFields(sanitizeInput(layout.ds.fields));
    },
  };
});
