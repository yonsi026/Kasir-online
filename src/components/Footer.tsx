import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] pt-16 pb-12 text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#E5E7EB]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#FF7A00] flex-shrink-0" />
              <span className="font-extrabold text-2xl tracking-tight text-[#111827]">
                KASIR ONLINE
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Sistem kasir dan manajemen bisnis untuk usaha yang ingin bekerja lebih terstruktur.
            </p>
            <div className="text-xs font-mono text-gray-400 pt-2">
              Prinsip Desain: Swiss International Typographic Style • POS + Akuntansi
            </div>
          </div>

          {/* Links 1: Produk */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 font-mono">
              Produk
            </h4>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li><a href="#pos" className="hover:text-[#FF7A00] transition-colors">POS Terminal</a></li>
              <li><a href="#fitur" className="hover:text-[#FF7A00] transition-colors">Inventory</a></li>
              <li><a href="#fitur" className="hover:text-[#FF7A00] transition-colors">Penjualan</a></li>
              <li><a href="#fitur" className="hover:text-[#FF7A00] transition-colors">Pembelian</a></li>
              <li><a href="#solusi" className="hover:text-[#FF7A00] transition-colors">Akuntansi</a></li>
              <li><a href="#laporan" className="hover:text-[#FF7A00] transition-colors">Laporan Bisnis</a></li>
            </ul>
          </div>

          {/* Links 2: Perusahaan */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 font-mono">
              Perusahaan
            </h4>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Tentang</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Kontak</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Bantuan</a></li>
            </ul>
          </div>

          {/* Links 3: Legal */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 font-mono">
              Legal
            </h4>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>
            © 2026 Kasir Online. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="text-gray-400">
            Transaksi sekali dicatat, laporan terbentuk otomatis.
          </div>
        </div>
      </div>
    </footer>
  );
};
