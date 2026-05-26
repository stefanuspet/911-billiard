import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const promoType = defineType({
  name: "promo",
  title: "Promo",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      initialValue: "PROMO",
    }),
    defineField({ name: "isHot", title: "Hot Promo?", type: "boolean", initialValue: false }),
    defineField({ name: "title", title: "Judul", type: "string" }),
    defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
    defineField({ name: "validInfo", title: "Info Berlaku", type: "string" }),
    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "order", title: "Urutan", type: "number" }),
  ],
  orderings: [{ title: "Urutan", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "validInfo", media: "photo" },
  },
});
