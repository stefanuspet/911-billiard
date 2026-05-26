import { defineField, defineType } from "sanity";
import { StarIcon } from "@sanity/icons";

export const tournamentType = defineType({
  name: "tournament",
  title: "Turnamen",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({ name: "name", title: "Nama Turnamen", type: "string" }),
    defineField({
      name: "date",
      title: "Tanggal",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
    }),
    defineField({ name: "location", title: "Lokasi", type: "string" }),
    defineField({ name: "prize", title: "Total Hadiah", type: "string" }),
    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [{ title: "Tanggal (terbaru)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: {
    select: { title: "name", subtitle: "date", media: "photo" },
  },
});
