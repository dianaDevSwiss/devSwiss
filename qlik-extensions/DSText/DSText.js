define(["jquery", "./lib/tailwind"], function ($, tw) {
  "use strict";

  return {
    definition: {
      type: "items",
      component: "accordion",
      items: {
        dimensions: {
          uses: "measures",
        },
        appearancePanel: {
          uses: "settings",
        },
        license: {
          ref: "ds.license",
          type: "string",
          label:
            "License: This extension is licensed to MSD Switzerland for use in MSD MER Region. For more information contact info@devswiss.ch",
          component: "text",
        },
      },
    },
    initialProperties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [],
        qInitialDataFetch: [
          {
            qWidth: 10,
            qHeight: 1000,
          },
        ],
      },
    },
    paint: function ($element, layout) {
      console.log(layout);
      const api = this.backendApi;
      window.$t = this;
      window.$e = $element;
      window.$l = layout;
      window.$tapi = api;

      $element.css({ "overflow-y": "auto" });
      let html = `<div class="flow-root overflow-hidden" >`;
      api.eachDataRow((rowIndex, row) => {
        html += `<div class="flex min-w-0 flex-1 flex-col justify-between gap-2 pt-1.5 ">  `;
        row.map((item) => {
          html += `<div class="text-sm text-gray-500 py-2" >${item.qText}</div>`;
        });
        html += `</div>  `;
      });
      html += `</div>  `;
      $element.html(html);
    },
  };
});
