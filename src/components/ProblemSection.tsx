import React from 'react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Pencatatan Berulang',
      desc: 'Penjualan dicatat di kasir, kemudian harus dicatat lagi di buku atau spreadsheet untuk menghitung keuntungan dan menyusun laporan bulanan.',
      impact: 'Menyita waktu hingga 2-3 jam setiap malam & rentan human-error.',
    },
    {
      num: '02',
      title: 'Stok Sulit Dipantau',
      desc: 'Jumlah stok sering berbeda antara catatan manual dengan kondisi fisik sebenarnya di rak atau gudang karena tidak ada riwayat pergerakan stok.',
      impact: 'Barang habis tanpa sadar, selisih barang, atau modal tertimbun mati.',
    },
    {
      num: '03',
      title: 'Keuangan Tidak Terlihat Jelas',
      desc: 'Pemilik usaha sulit mengetahui posisi kas riil, tagihan hutang ke supplier yang jatuh tempo, piutang customer, dan laba bersih sesungguhnya.',
      impact: 'Merasa omzet ramai tetapi uang tunai tidak pernah terkumpul di rekening.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 01. LATAR BELAKANG MASALAH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Bisnis Anda tidak seharusnya bergantung pada catatan yang terpisah-pisah.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Metode tradisional yang memisahkan aplikasi kasir, buku stok manual, dan catatan kas kertas menciptakan celah operasional yang merugikan bisnis Anda setiap hari.
          </p>
        </div>

        {/* 3-Column Editorial Grid with Large Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB] border border-[#E5E7EB]">
          {problems.map((p) => (
            <div key={p.num} className="p-8 sm:p-10 flex flex-col justify-between bg-white hover:bg-[#F8FAFC] transition-colors">
              <div>
                <div className="text-5xl sm:text-6xl font-extrabold text-gray-200 num-mono tracking-tighter mb-6">
                  {p.num}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-mono font-bold text-red-600 uppercase block mb-1">
                  Dampak Nyata:
                </span>
                <span className="text-xs text-gray-500">
                  {p.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
