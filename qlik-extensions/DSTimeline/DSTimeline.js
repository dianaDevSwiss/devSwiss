define(["jquery", "./lib/tailwind", "./lib/jquery-dateformat.min"], function (
  $,
  tw,
  df
) {
  "use strict";

  return {
    definition: {
      type: "items",
      component: "accordion",
      items: {
        dimensions: {
          uses: "dimensions",
        },
        sorting: {
          uses: "sorting",
        },
        appearance: {
          uses: "settings",
        },
        thumbnail: {
          type: "items",
          label: "Thumbnail",
          items: {
            thumbnailLabel: {
              ref: "ds.thumbnailLabel",
              type: "string",
              label: "Thumbnail Label",
            },
            thumbnailSize: {
              ref: "ds.thumbnailSize",
              type: "integer",
              label: "Thumbnail Size",
            },
          },
        },
        timeline: {
          type: "items",
          label: "Timeline Area",
          items: {
            timelineDateLabel: {
              ref: "ds.timelineDateLabel",
              type: "string",
              label: "Timeline Date Label",
            },
            timelineDateFormat: {
              ref: "ds.timelineDateFormat",
              type: "string",
              label: "Timeline Date Format",
            },
            timelineTimeVisible: {
              ref: "ds.timelineTimeVisible",
              type: "boolean",
              label: "Timeline Time Visible",
            },
            timelineDateColor: {
              ref: "ds.timelineDateColor",
              type: "string",
              label: "Timeline Date color",
            },
          },
        },
        textarea: {
          type: "items",
          label: "Text Area",
          items: {
            descriptionLabel: {
              ref: "ds.descriptionLabel",
              type: "string",
              label: "Description Label",
            },
            headingLabel: {
              ref: "ds.headingLabel",
              type: "string",
              label: "Heading Label",
            },
            contentColor: {
              ref: "ds.contentColor",
              type: "string",
              label: "Textarea Text color",
            },
            textAreaColor: {
              ref: "ds.textAreaColor",
              type: "string",
              label: "Text Area Color",
            },
          },
        },
        colorLabel: {
          ref: "ds.colorLabel",
          type: "string",
          label: "Theme Color Label",
        },
        backgroundColor: {
          ref: "ds.backgroundColor",
          type: "string",
          label: "Background Color",
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
            qHeight: 200,
          },
        ],
      },
    },
    paint: function ($element, layout) {
      // console.log("painting");
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const self = this;

      window.$tt = this;
      window.$te = $element;
      window.$tl = layout;

      const api = this.backendApi;

      const size = api.getSize();
      const columnCount = size.qcx;
      const rowCount = size.qcy;

      const dimensions = api.getDimensionInfos();
      // console.log("dimensions", dimensions);

      const thumbnailLabel = layout.ds.thumbnailLabel || "";
      // console.log("thumbnailLabel", thumbnailLabel);

      const thumbnailSize = layout.ds.thumbnailSize || 32;
      // console.log("thumbnailSize", thumbnailSize);

      const backgroundColor = layout.ds.backgroundColor || "transparent";
      const textAreaColor = layout.ds.textAreaColor || "#fff";

      const timelineDatelabel = layout.ds.timelineDateLabel || "";
      const colorLabel = layout.ds.colorLabel || "";
      const headingLabel = layout.ds.headingLabel || "";
      const descriptionLabel = layout.ds.descriptionLabel || "";
      const timeVisible = layout.ds.timelineTimeVisible;
      const contentColor = layout.ds.contentColor || "#333";
      const timelineDateColor = layout.ds.timelineDateColor || "#333";
      const timelineDateFormat = layout.ds.timelineDateFormat || "yyyy-MM-dd";

      let lastRowIndex = 0;
      $element.closest(".qv-inner-object").css("background", backgroundColor);
      let html = `<div class="flow-root overflow-hidden"><ul role="list" class="-mb-8 mx-4 py-4">`;
      api.eachDataRow((rowIndex, row) => {
        lastRowIndex = rowIndex;

        html += `<li><div class="relative pb-2">`;

        // if (rowIndex < rowCount - 1) {
        //   html += `<span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>`;
        // }

        // console.log("row", row);

        const {
          thumbnail,
          timelineDate,
          heading,
          description,
          color,
          columns,
        } = row.reduce(
          (memo, column, i) => {
            if (dimensions[i].qFallbackTitle === thumbnailLabel) {
              memo.thumbnail = column;
            } else if (dimensions[i].qFallbackTitle === timelineDatelabel) {
              memo.timelineDate = column.qText;
            } else if (dimensions[i].qFallbackTitle === colorLabel) {
              memo.color = column.qText;
            } else if (dimensions[i].qFallbackTitle === headingLabel) {
              memo.heading = column.qText;
            } else if (dimensions[i].qFallbackTitle === descriptionLabel) {
              memo.description = column.qText;
            } else {
              memo.columns.push(column);
            }
            return memo;
          },
          {
            thumbnail: null,
            description: null,
            heading: null,
            color: "transparent",
            timelineDate: null,
            columns: [],
          }
        );
        let month = null;
        let day = null;
        let time = "";
        let formattedDate = $.format.date(timelineDate, timelineDateFormat);
        if (timelineDate) {
          let dt = new Date(timelineDate);
          month = months[dt.getMonth()];
          day = dt.getDate();
          time = dt.toLocaleTimeString();
        }
        console.log(time, formattedDate);

        html += `<div class="relative flex space-x-3">
          <div class=" flex flex-col items-center justify-center " style="width:${
            thumbnailSize * 3
          }px;"><div class="p-4 rounded-full" style="background:${color};">
          ${
            thumbnail
              ? ` <img src="${thumbnail.qText}" style="width: ${thumbnailSize}px; height: ${thumbnailSize}px;" /> `
              : `<span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
            <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path
                  d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
            </span>`
          }
          </div>
          ${
            timelineDate
              ? `<div class="flex flex-col items-center justify-center"><h4 class="capitalize text-md font-semibold" style="color:${timelineDateColor};" >${formattedDate}</h4> ${
                  timeVisible
                    ? `<p class="text-sm" style="color:${timelineDateColor};">${time}</p>`
                    : ""
                }</div>`
              : `<div></div>`
          }
          <span class="border-zinc-400 flex h-full w-0.5 border-l border-dashed border-grey" aria-hidden="true"></span>
          </div>`;

        html += `<div class="flex-1 flex flex-col rounded px-4 py-2" style="background:${textAreaColor};"> ${
          heading
            ? `<div><h3 class="text-2xl font-semibold pb-2 relative" style="color:${contentColor};" >${heading} <div class="h-1 w-8 absolute bottom-0 left-0" style="background:${color};"></div></h3></div>`
            : ""
        }
        ${
          description
            ? `<div class="text-sm py-2" style="color:${contentColor};" >${description}</div>`
            : ""
        }
        <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 ">  `;

        for (const column of columns) {
          html += `<div class="text-sm py-2" style="color:${contentColor};" >${column.qText}</div>`;
        }

        html += `</div></div></div></div></li>`;
      });
      html += "</ul></div>";

      const offsetIndex = lastRowIndex + 1;

      if (offsetIndex < rowCount) {
        html += `<div class="my-4 flex items-center justify-center">
          <button id="load-more" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Load More</button>
        </div>`;
      }

      $element.css({ "overflow-y": "auto" });
      $element.html(html);

      const fetchMore = () => {
        if (offsetIndex < rowCount) {
          // console.log("fetching next batch", offsetIndex, rowCount);

          const requestPage = [
            {
              qTop: offsetIndex,
              qLeft: 0,
              qWidth: columnCount,
              qHeight: Math.min(200, rowCount - lastRowIndex),
            },
          ];

          api.getData(requestPage).then(function (dataPages) {
            // console.log("fetched", dataPages);

            self.paint($element, layout);
          });
        }
      };

      // window.__fetchMore__ = fetchMore;

      if (offsetIndex < rowCount) {
        $element.find("#load-more").on("click", fetchMore);
      }
    },
  };
});
