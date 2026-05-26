import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const franchisePackageType = defineType({
  name: "franchisePackage",
  title: "Paket Franchise",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({ name: "name", title: "Nama Paket", type: "string" }),
    defineField({
      name: "price",
      title: "Harga (contoh: Rp 800 Jt)",
      type: "string",
    }),
    defineField({
      name: "priceNote",
      title: "Keterangan Harga",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Fitur",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "Paling Populer?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "order", title: "Urutan", type: "number" }),
  ],
  orderings: [
    {
      title: "Urutan",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "price" },
  },
});
