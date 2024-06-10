import { faker } from "@faker-js/faker";
import { writeFile } from "fs/promises";

const items = Array.from(Array(365), (_, i) => ({
  id: i + 1,
  date: faker.date.past(1).toISOString(),
  a: faker.commerce.productName(),
  b: faker.name.fullName(),
  c: faker.address.zipCode(),
  d: faker.finance.amount(),
  color: faker.color.rgb({ format: "hex", casing: "upper" }),
}));

const out = [
  "///$tab DSCalendarGraph",
  "[DSCalendarGraph]:",
  "LOAD * INLINE [",
  "  dscg_id, dscg_date, dscg_product, dscg_name, dscg_zip, dscg_amount, dscg_color",
];
for (const item of items) {
  out.push(
    `  ${item.id}, ${item.date}, ${item.a}, ${item.b}, ${item.c}, ${item.d}, ${item.color}`
  );
}
out.push("];");
out.push("");

await writeFile("./out-DSCalendarGraph.qvs", out.join("\n"));
