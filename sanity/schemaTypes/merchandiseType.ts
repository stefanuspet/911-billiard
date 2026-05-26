import { defineField, defineType } from "sanity";
import { BasketIcon } from "@sanity/icons";

export const merchandiseType = defineType({
  name: "merchandise",
  title: "Merchandise",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({ name: "name", title: "Nama Produk", type: "string" }),
    defineField({ name: "price", title: "Harga (Rp)", type: "number" }),
    defineField({ name: "originalPrice", title: "Harga Coret (Rp)", type: "number" }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      options: {
        list: [
          { title: "Bestseller", value: "BESTSELLER" },
          { title: "New", value: "NEW" },
        ],
      },
    }),
    defineField({
      name: "photo",
      title: "Foto Produk",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "tokopediaUrl", title: "Link Tokopedia", type: "url" }),
    defineField({ name: "order", title: "Urutan", type: "number" }),
  ],
  orderings: [{ title: "Urutan", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "price", media: "photo" },
  },
});
