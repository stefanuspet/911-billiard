export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "boolean"
  | "date"
  | "url"
  | "image"
  | "gallery"
  | "select"
  | "array"
  | "slug"
  | "tags";

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
  hint?: string;
  source?: string;
}

export interface SectionDef {
  docType: string;
  label: string;
  listFields: { key: string; label: string }[];
  fields: FieldDef[];
  studioBodyNote?: boolean;
  studioGalleryNote?: boolean;
}

export const ADMIN_SECTIONS: Record<string, SectionDef> = {
  blog: {
    docType: "post",
    label: "Artikel Blog",
    studioBodyNote: true,
    listFields: [
      { key: "title", label: "Judul" },
      { key: "publishedAt", label: "Tanggal Publish" },
    ],
    fields: [
      { name: "title", label: "Judul Artikel", type: "text", required: true },
      {
        name: "slug",
        label: "Slug URL",
        type: "slug",
        hint: "Auto-generate dari judul, atau isi manual",
        placeholder: "judul-artikel",
      },
      { name: "publishedAt", label: "Tanggal Publish", type: "date" },
      { name: "mainImage", label: "Gambar Utama", type: "image" },
    ],
  },
  cabang: {
    docType: "branch",
    label: "Cabang",
    listFields: [
      { key: "name", label: "Nama Cabang" },
      { key: "city", label: "Kota" },
    ],
    fields: [
      { name: "name", label: "Nama Cabang", type: "text", required: true },
      {
        name: "slug",
        label: "Slug URL",
        type: "slug",
        source: "name",
        hint: "Auto-generate dari nama, atau isi manual. Dipakai untuk URL /cabang/[slug]",
        placeholder: "nama-cabang",
      },
      { name: "city", label: "Kota", type: "text", required: true },
      { name: "province", label: "Provinsi", type: "text" },
      { name: "address", label: "Alamat Lengkap", type: "textarea" },
      { name: "tables", label: "Jumlah Meja", type: "number" },
      {
        name: "tags",
        label: "Fasilitas",
        type: "tags",
        options: [
          { value: "Cafe", label: "Cafe" },
          { value: "Parking", label: "Parking" },
          { value: "AC", label: "AC" },
          { value: "VIP Room", label: "VIP Room" },
          { value: "GrabFood", label: "GrabFood" },
          { value: "Non-Smoking Room", label: "Non-Smoking Room" },
          { value: "Service Center", label: "Service Center" },
        ],
      },
      { name: "openHour", label: "Jam Buka", type: "text", placeholder: "10:00" },
      { name: "closeHour", label: "Jam Tutup", type: "text", placeholder: "23:00" },
      { name: "mapsUrl", label: "Link Google Maps", type: "url" },
      { name: "photo", label: "Foto Utama", type: "image" },
      { name: "gallery", label: "Gallery Foto", type: "gallery", hint: "Upload beberapa foto cabang. Bisa tambah atau hapus satu per satu." },
      { name: "order", label: "Urutan Tampil", type: "number" },
    ],
  },
  promo: {
    docType: "promo",
    label: "Promo",
    listFields: [
      { key: "label", label: "Label" },
      { key: "title", label: "Judul" },
      { key: "isHot", label: "Hot?" },
    ],
    fields: [
      { name: "label", label: "Label (misal: PROMO SPESIAL)", type: "text", required: true },
      { name: "title", label: "Judul Promo", type: "text", required: true },
      { name: "description", label: "Deskripsi", type: "textarea" },
      { name: "validInfo", label: "Info Berlaku (misal: s/d 31 Des)", type: "text" },
      { name: "isHot", label: "Tandai sebagai HOT", type: "boolean" },
      { name: "photo", label: "Foto Promo", type: "image" },
      { name: "order", label: "Urutan Tampil", type: "number" },
    ],
  },
  tournament: {
    docType: "tournament",
    label: "Tournament",
    listFields: [
      { key: "name", label: "Nama Tournament" },
      { key: "date", label: "Tanggal" },
      { key: "location", label: "Lokasi" },
    ],
    fields: [
      { name: "name", label: "Nama Tournament", type: "text", required: true },
      { name: "date", label: "Tanggal Pelaksanaan", type: "date" },
      { name: "location", label: "Lokasi / Venue", type: "text" },
      { name: "prize", label: "Total Hadiah", type: "text", placeholder: "Rp 10.000.000" },
      { name: "photo", label: "Foto / Poster Tournament", type: "image" },
    ],
  },
  merchandise: {
    docType: "merchandise",
    label: "Merchandise",
    listFields: [
      { key: "name", label: "Nama Produk" },
      { key: "price", label: "Harga" },
      { key: "badge", label: "Badge" },
    ],
    fields: [
      { name: "name", label: "Nama Produk", type: "text", required: true },
      { name: "price", label: "Harga (misal: Rp 150.000)", type: "text", required: true },
      { name: "originalPrice", label: "Harga Asli / Coret (opsional)", type: "text" },
      {
        name: "badge",
        label: "Badge",
        type: "select",
        options: [
          { value: "", label: "Tidak Ada" },
          { value: "BESTSELLER", label: "BESTSELLER" },
          { value: "NEW", label: "NEW" },
        ],
      },
      { name: "tokopediaUrl", label: "Link Tokopedia", type: "url" },
      { name: "photo", label: "Foto Produk", type: "image" },
      { name: "order", label: "Urutan Tampil", type: "number" },
    ],
  },
  franchise: {
    docType: "franchisePackage",
    label: "Paket Franchise",
    listFields: [
      { key: "name", label: "Nama Paket" },
      { key: "price", label: "Harga" },
      { key: "featured", label: "Paling Populer?" },
    ],
    fields: [
      {
        name: "name",
        label: "Nama Paket",
        type: "text",
        required: true,
        placeholder: "Basic / Standard / Premium",
      },
      { name: "price", label: "Harga", type: "text", required: true, placeholder: "Rp 800 Jt" },
      {
        name: "priceNote",
        label: "Keterangan Harga (opsional)",
        type: "text",
        placeholder: "Belum termasuk sewa tempat",
      },
      {
        name: "features",
        label: "Fitur-Fitur Paket (satu per baris)",
        type: "array",
        placeholder: "5 meja billiard\nMeja full size...",
      },
      { name: "featured", label: "Tandai sebagai Paling Populer", type: "boolean" },
      { name: "order", label: "Urutan Tampil", type: "number" },
    ],
  },
  menu: {
    docType: "menuItem",
    label: "Menu",
    listFields: [
      { key: "name", label: "Nama Item" },
      { key: "branchSlug", label: "Cabang" },
      { key: "category", label: "Kategori" },
      { key: "price", label: "Harga" },
    ],
    fields: [
      {
        name: "branchSlug",
        label: "Cabang",
        type: "select",
        required: true,
        hint: "Pilih cabang yang memiliki menu ini",
        options: [],
      },
      {
        name: "category",
        label: "Kategori",
        type: "select",
        required: true,
        options: [
          { value: "", label: "-- Pilih Kategori --" },
          { value: "food", label: "Makanan" },
          { value: "drink", label: "Minuman" },
        ],
      },
      { name: "name", label: "Nama Item", type: "text", required: true },
      { name: "price", label: "Harga (angka, tanpa Rp)", type: "number", required: true, placeholder: "25000" },
      { name: "description", label: "Deskripsi (opsional)", type: "textarea" },
      { name: "photo", label: "Foto (opsional)", type: "image" },
      { name: "available", label: "Tersedia", type: "boolean" },
      { name: "order", label: "Urutan Tampil", type: "number" },
    ],
  },
};
