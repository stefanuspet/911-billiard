"use client";

import { useState } from "react";

const inputClass =
  "w-full bg-bg-3 border border-border-2 text-text font-body text-[14px] px-[14px] py-[10px] rounded-none outline-none focus:border-orange transition-colors duration-200";

const labelClass =
  "font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-text-2 block mb-1.5";

export default function ContactForm() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    topik: "",
    pesan: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      `Halo 911 Billiard, saya ingin menghubungi Anda.\n\n` +
      `Nama: ${form.nama}\n` +
      `Email: ${form.email}\n` +
      `Topik: ${form.topik || "Tidak dipilih"}\n` +
      `Pesan: ${form.pesan}`;
    window.open(
      `https://wa.me/6281990819911?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="nama">
            Nama Lengkap *
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            required
            placeholder="John Doe"
            value={form.nama}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="email@domain.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="topik">
          Topik
        </label>
        <select
          id="topik"
          name="topik"
          value={form.topik}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">— Pilih topik —</option>
          <option value="Informasi cabang">Informasi cabang</option>
          <option value="Franchise">Franchise</option>
          <option value="Merchandise">Merchandise</option>
          <option value="Keluhan / Saran">Keluhan / Saran</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="pesan">
          Pesan *
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows={5}
          required
          placeholder="Tulis pesan Anda di sini..."
          value={form.pesan}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange text-black font-condensed font-bold text-[15px] tracking-[1px] uppercase py-[14px] hover:bg-orange-2 transition-colors duration-200 cursor-pointer"
      >
        Kirim via WhatsApp →
      </button>
    </form>
  );
}
