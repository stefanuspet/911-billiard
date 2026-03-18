"use client";

import { useState } from "react";

const inputClass =
  "w-full bg-bg-3 border border-border-2 text-text font-body text-[14px] px-[14px] py-[10px] rounded-none outline-none focus:border-orange transition-colors duration-200";

const labelClass =
  "font-condensed font-bold text-[11px] tracking-[1.5px] uppercase text-text-2 block mb-1.5";

export default function FranchiseForm() {
  const [form, setForm] = useState({
    nama: "",
    hp: "",
    email: "",
    kota: "",
    paket: "",
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
      `Halo, saya tertarik dengan franchise 911 Billiard.\n\n` +
      `Nama: ${form.nama}\n` +
      `No HP/WA: ${form.hp}\n` +
      `Email: ${form.email}\n` +
      `Kota Tujuan: ${form.kota}\n` +
      `Paket: ${form.paket || "Belum ditentukan"}\n` +
      `Pesan: ${form.pesan || "-"}`;
    window.open(
      `https://wa.me/6281990819911?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }

  return (
    <section
      id="franchise-form"
      className="bg-bg-2 border-t border-border"
    >
      <div className="max-w-[1140px] mx-auto px-5 sm:px-10 py-12 sm:py-20">
        <div className="max-w-[680px] mx-auto">
          <div className="font-condensed font-bold text-[11px] tracking-[4px] uppercase text-orange mb-3">
            MULAI SEKARANG
          </div>
          <h2 className="font-bebas text-[clamp(32px,4vw,52px)] leading-none tracking-[1px] mb-2">
            DAFTAR FRANCHISE
          </h2>
          <p className="text-text-2 text-[14px] mb-10">
            Isi form di bawah. Tim kami akan menghubungi Anda via WhatsApp dalam
            1×24 jam.
          </p>

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
                <label className={labelClass} htmlFor="hp">
                  No HP / WhatsApp *
                </label>
                <input
                  id="hp"
                  name="hp"
                  type="tel"
                  required
                  placeholder="08xxxxxxxxxx"
                  value={form.hp}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@domain.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="kota">
                  Kota Tujuan *
                </label>
                <input
                  id="kota"
                  name="kota"
                  type="text"
                  required
                  placeholder="Jakarta, Surabaya, ..."
                  value={form.kota}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="paket">
                Paket Yang Diminati
              </label>
              <select
                id="paket"
                name="paket"
                value={form.paket}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">— Pilih paket —</option>
                <option value="Starter Zone (Rp 150 Jt)">
                  Starter Zone (Rp 150 Jt)
                </option>
                <option value="Standard Zone (Rp 250 Jt)">
                  Standard Zone (Rp 250 Jt)
                </option>
                <option value="Premium Zone (Rp 450 Jt)">
                  Premium Zone (Rp 450 Jt)
                </option>
              </select>
            </div>

            <div>
              <label className={labelClass} htmlFor="pesan">
                Pesan / Pertanyaan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={4}
                placeholder="Tulis pertanyaan atau informasi tambahan..."
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
        </div>
      </div>
    </section>
  );
}
