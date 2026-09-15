import React from 'react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handlePageClick = (page: PageId, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page;
    }
  };

  return (
    <footer className="bg-white border-t border-[#E5E7EB] pt-16 pb-12 text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#E5E7EB]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div 
              onClick={(e) => handlePageClick('beranda', e)}
              className="flex items-center gap-2 cursor-pointer group inline-flex"
            >
              <div className="w-4 h-4 bg-[#FF7A00] flex-shrink-0 group-hover:scale-110 transition-transform" />
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

          {/* Links 1: Navigasi Halaman */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 font-mono">
              Halaman Produk
            </h4>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li>
                <button 
                  onClick={(e) => handlePageClick('produk', e)}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  POS Terminal & Offline
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handlePageClick('fitur', e)}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Fitur & Inventori
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handlePageClick('cara-kerja', e)}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Cara Kerja & Akuntansi
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handlePageClick('bisnis', e)}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Untuk Bisnis & Segmen
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handlePageClick('laporan', e)}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Laporan Bisnis & Ekspor
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handlePageClick('faq', e)}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Tanya Jawab & Bantuan
                </button>
              </li>
            </ul>
          </div>

          {/* Links 2: Perusahaan */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 font-mono">
              Perusahaan
            </h4>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li>
                <button 
                  onClick={(e) => handlePageClick('beranda', e)}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Tentang Sistem
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handlePageClick('faq', e)}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Pusat Bantuan
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handlePageClick('bisnis', e)}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer text-left"
                >
                  Standar Keamanan
                </button>
              </li>
            </ul>
          </div>

          {/* Links 3: Legal */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 font-mono">
              Legal
            </h4>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li><span className="text-gray-500">Privasi Data Usaha</span></li>
              <li><span className="text-gray-500">Syarat & Ketentuan</span></li>
              <li><span className="text-gray-500">Isolasi Database</span></li>
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
