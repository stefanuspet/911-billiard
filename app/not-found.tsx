import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5 sm:px-10 py-20">
      <div className="max-w-[1140px] mx-auto w-full flex flex-col items-center text-center">

        <div className="font-condensed text-[120px] sm:text-[160px] text-orange leading-none">
          404
        </div>

        <h1 className="font-condensed text-[28px] sm:text-[38px] tracking-[1px] leading-tight mb-3">
          HALAMAN TIDAK DITEMUKAN
        </h1>
        <p className="font-body text-[15px] text-text-2 leading-[1.7] mb-8 max-w-[400px]">
          Sepertinya bola billiard kamu meleset. Halaman yang kamu cari tidak
          ada atau sudah dipindahkan.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-orange text-black font-condensed font-bold text-[13px] tracking-[1.5px] uppercase px-6 py-3 hover:bg-orange-2 transition-colors duration-200 no-underline"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/cabang"
            className="inline-block border border-border-2 text-text-2 font-condensed font-bold text-[13px] tracking-[1.5px] uppercase px-6 py-3 hover:text-orange hover:border-orange transition-colors duration-200 no-underline"
          >
            Cari Cabang
          </Link>
        </div>

      </div>
    </main>
  );
}
