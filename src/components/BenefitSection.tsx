import React from 'react';

export const BenefitSection: React.FC = () => {
  const statements = [
    {
      title: 'CATAT SEKALI.',
      desc: 'Satu entri transaksi di meja kasir langsung mengalirkan data ke seluruh cabang pembukuan.',
    },
    {
      title: 'STOK TERHUBUNG.',
      desc: 'Setiap barang keluar atau masuk terlacak lewat riwayat audit mutasi tanpa perlu hitung fisik berulang kali.',
    },
    {
      title: 'KEUANGAN TERLIHAT.',
      desc: 'Posisi kas tunai, rekening bank, tagihan hutang supplier, dan piutang pelanggan selalu jelas di depan mata.',
    },
    {
      title: 'LAPORAN TERBENTUK.',
      desc: 'Laba rugi dan neraca keuangan tersaji secara otomatis berdasarkan standar baku akuntansi ganda.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase block mb-3">
            // 16. FILOSOFI PRODUK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Lebih sedikit pencatatan. Lebih banyak kendali.
          </h2>
        </div>

        {/* 4 Swiss Bold Typographic Statements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-y border-[#111827]">
          
          <div className="divide-y divide-[#E5E7EB]">
            {statements.slice(0, 2).map((item, idx) => (
              <div key={item.title} className="py-12 sm:py-16 pr-0 md:pr-12 group">
                <div className="text-xs font-mono font-bold text-gray-400 mb-2">
                  PRINSIP 0{idx + 1}
                </div>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tighter leading-none mb-4 group-hover:text-[#FF7A00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="divide-y divide-[#E5E7EB]">
            {statements.slice(2, 4).map((item, idx) => (
              <div key={item.title} className="py-12 sm:py-16 pl-0 md:pl-12 group">
                <div className="text-xs font-mono font-bold text-gray-400 mb-2">
                  PRINSIP 0{idx + 3}
                </div>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tighter leading-none mb-4 group-hover:text-[#FF7A00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
