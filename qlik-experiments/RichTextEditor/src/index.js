import {
  useEffect,
  useElement,
  useLayout,
  useSelections,
  useState,
} from "@nebula.js/stardust";
import properties from "./object-properties";
import data from "./data";

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const element = useElement();
      const layout = useLayout();
      const selections = useSelections();
      const [selectedRows, setSelectedRows] = useState([]);

      useEffect(() => {
        if (layout.qSelectionInfo.qInSelections) {
          // skip rendering when in selection mode
          return;
        }
        const hc = layout.qHyperCube;

        // headers
        const columns = [...hc.qDimensionInfo, ...hc.qMeasureInfo].map(
          (f) => f.qFallbackTitle
        );
        const header = `<thead><tr>${columns
          .map((c) => `<th>${c}</th>`)
          .join("")}</tr></thead>`;

        // rows
        // const rows = hc.qDataPages[0].qMatrix
        //   .map(
        //     (row) =>
        //       `<tr>${row.map((cell) => `<td>${cell.qText}</td>`).join("")}</tr>`
        //   )
        //   .join("");
        const rows = hc.qDataPages[0].qMatrix
          .map(
            (row, rowIdx) =>
              `<tr data-row="${rowIdx}">
                  ${row.map((cell) => `<td>${cell.qText}</td>`).join("")}
                </tr>`
          )
          .join("");

        // table
        const table = `<table>${header}<tbody>${rows}</tbody></table>`;

        // output
        element.innerHTML = table;
      }, [element, layout]);

      useEffect(() => {
        const listener = (e) => {
          if (e.target.tagName === "TD") {
            if (!selections.isActive()) {
              selections.begin("/qHyperCubeDef");
            }
            const row = +e.target.parentElement.getAttribute("data-row");
            setSelectedRows((prev) => {
              if (prev.includes(row)) {
                return prev.filter((v) => v !== row);
              }
              return [...prev, row];
            });
          }
        };

        element.addEventListener("click", listener);

        return () => {
          element.removeEventListener("click", listener);
        };
      }, [element]);

      useEffect(() => {
        if (!layout.qSelectionInfo.qInSelections) {
          // no need to update when not in selection mode
          return;
        }
        element.querySelectorAll("tbody tr").forEach((tr) => {
          const idx = +tr.getAttribute("data-row");
          tr.style.backgroundColor = selectedRows.includes(idx) ? "#eee" : "";
        });
      }, [element, selectedRows, layout]);

      useEffect(() => {
        if (selections.isActive()) {
          if (selectedRows.length) {
            selections.select({
              method: "selectHyperCubeCells",
              params: ["/qHyperCubeDef", selectedRows, []],
            });
          } else {
            selections.select({
              method: "resetMadeSelections",
              params: [],
            });
          }
        } else if (selectedRows.length) {
          setSelectedRows([]);
        }
      }, [selections.isActive(), selectedRows]);
    },
  };
}
