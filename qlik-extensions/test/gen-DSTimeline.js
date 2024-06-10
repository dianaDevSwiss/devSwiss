import { faker } from "@faker-js/faker";
import { writeFile } from "fs/promises";

const items = Array.from(Array(10), (_, i) => ({
  id: i + 1,
  purchase_date: faker.date.past(3).toISOString(),
  product_name: faker.commerce.productName(),
  image: `${String.fromCharCode("a".charCodeAt(0) + (i % 3))}.png`,
}));

const out = [
  "///$tab DSTimeline",
  "[DSTimeline]:",
  "LOAD * INLINE [",
  "  id, purchase_date, product_name, image",
];
for (const item of items) {
  out.push(`  ${item.id}, ${item.purchase_date}, ${item.product_name}, ${item.image}`);
}
out.push("];");
out.push("");

await writeFile("./out-DSTimeline.qvs", out.join("\n"));
