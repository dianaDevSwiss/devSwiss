define([
  "jquery",
  "./lib/tailwind",
  "./lib/graph",
  "text!./lib/graph.css",
], function ($, tw, g, css) {
  "use strict";

  $("<style>").html(css).appendTo("head");

  return {
    definition: {
      type: "items",
      component: "accordion",
      items: {
        date: {
          uses: "dimensions",
          // min: 1,
          // max: 1,
          min: 2,
        },
        appearance: {
          uses: "settings",
        },
        colorLabel: {
          ref: "ds.colorLabel",
          type: "string",
          label: "Color Label",
        },
        backgroundColor: {
          ref: "ds.backgroundColor",
          type: "string",
          label: "Background Color",
        },
        axisColor: {
          ref: "ds.axisColor",
          type: "string",
          label: "Axis Color",
        },
        rectColor: {
          ref: "ds.rectColor",
          type: "string",
          label: "Rectangle Color",
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
      // console.log("painting");

      const self = this;

      window.$cgtt = this;
      window.$cgte = $element;
      window.$cgtl = layout;

      $element.html(`<div id="chart-container"></div>`);

      const api = this.backendApi;

      // const size = api.getSize();
      // const columnCount = size.qcx;
      // const rowCount = size.qcy;

      const dimensions = api.getDimensionInfos();

      const colorLabel = layout.ds.colorLabel || "";
      const backgroundColor = layout.ds.backgroundColor || "transparent";
      const axisColor = layout.ds.axisColor || "#000";
      const rectColor = layout.ds.rectColor || "#fff";
      // console.log("colorLabel", colorLabel);
      $element.closest(".qv-inner-object").css("background", backgroundColor);
      const data = [];

      let lastRowIndex = 0;

      api.eachDataRow((rowIndex, row) => {
        lastRowIndex = rowIndex;

        // console.log("eachDataRow", rowIndex, row);

        const { color, columns } = row.reduce(
          (memo, column, i) => {
            if (dimensions[i].qFallbackTitle === colorLabel) {
              memo.color = column.qText;
            } else {
              memo.columns.push([column, dimensions[i]]);
            }
            return memo;
          },
          { color: null, columns: [] }
        );

        const [date, ...types] = columns;

        const timestamp = Date.parse(date[0].qText);

        if (timestamp > 0 === false) {
          return;
        }

        data.push({
          timestamp,
          count: 1,
          tooltip: types.map(
            (type) => `<b>${type[1].qFallbackTitle}</b>: ${type[0].qText}`
          ),
          color: color,
        });
      });

      const offsetIndex = lastRowIndex + 1;

      const n = data.length;

      data.sort((a, b) => a.timestamp - b.timestamp);

      const end = new Date(data[n - 1].timestamp);
      end.setDate(end.getDate() + 1);
      const start = new Date(end);
      start.setYear(start.getFullYear() - 1);

      try {
        if (n > 0) {
          // start_date YYYY-MM-DD
          $("#chart-container").github_graph({
            data,
            colors: [rectColor, "purple", "yellow", "green", "red"],
            // start_date:
            //   new Date(data[0]).toISOString().slice(0, 10) || null,
            // end_date:
            //   new Date(data[n - 1]).toISOString().slice(0, 10) || null,
            start_date: start.toISOString().slice(0, 10),
            end_date: end.toISOString().slice(0, 10),
            click: (date, count, tooltip) =>
              console.log("click", date, count, tooltip),
          });
          $("#chart-container text.month").css("fill", axisColor);
          $("#chart-container text.wday").css("fill", axisColor);
        }
      } catch (error) {
        console.log("error", error);
      }

      // console.log("rowCount", rowCount);

      // const fetchMore = () => {
      //   if (offsetIndex < rowCount) {
      //     // console.log("fetching next batch", offsetIndex, rowCount);

      //     const requestPage = [
      //       {
      //         qTop: offsetIndex,
      //         qLeft: 0,
      //         qWidth: columnCount,
      //         qHeight: Math.min(1000, rowCount - lastRowIndex),
      //       },
      //     ];

      //     api.getData(requestPage).then(function (dataPages) {
      //       // console.log("fetched", dataPages);

      //       self.paint($element, layout);
      //     });
      //   }
      // };

      // window.__fetchMore__ = fetchMore;

      // fetchMore();
    },
  };
});
