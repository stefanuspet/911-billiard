import { defineField, defineType } from "sanity";
import { PinIcon } from "@sanity/icons";

export const branchType = defineType({
  name: "branch",
  title: "Cabang",
  type: "document",
  icon: PinIcon,
  fields: [
    defineField({ name: "zone", title: "Zone", type: "string" }),
    defineField({ name: "name", title: "Nama Cabang", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug URL",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({ name: "city", title: "Kota", type: "string" }),
    defineField({ name: "province", title: "Provinsi", type: "string" }),
    defineField({ name: "address", title: "Alamat", type: "text", rows: 2 }),
    defineField({ name: "tables", title: "Jumlah Meja", type: "number" }),
    defineField({
      name: "tags",
      title: "Fasilitas",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "VIP Room", value: "VIP Room" },
          { title: "Cafe", value: "Cafe" },
          { title: "GrabFood", value: "GrabFood" },
          { title: "Lounge", value: "Lounge" },
        ],
      },
    }),
    defineField({ name: "openHour", title: "Jam Buka", type: "string" }),
    defineField({ name: "closeHour", title: "Jam Tutup", type: "string" }),
    defineField({ name: "mapsUrl", title: "Link Google Maps", type: "url" }),
    defineField({
      name: "photo",
      title: "Foto Utama",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "Gallery Foto",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "order", title: "Urutan", type: "number" }),
  ],
  orderings: [{ title: "Urutan", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "city", media: "photo" },
  },
});
