import React from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { PageId } from '../types';

interface PagePaginationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

interface PageMeta {
  id: PageId;
  label: string;
  sublabel: string;
}

export const PagePagination: React.FC<PagePaginationProps> = ({
  currentPage,
  onNavigate,
}) => {
  const pages: PageMeta[] = [
    { id: 'beranda', label: 'Beranda', sublabel: 'Ringkasan & Solusi' },
    { id: 'produk', label: 'Produk POS', sublabel: 'Terminal Kasir & Offline' },
    { id: 'fitur', label: 'Fitur', sublabel: '10 Modul & Stok' },
    { id: 'cara-kerja', label: 'Cara Kerja', sublabel: 'Alur & Akuntansi Ganda' },
    { id: 'bisnis', label: 'Untuk Bisnis', sublabel: 'Segmen Usaha & Hak Akses' },
    { id: 'laporan', label: 'Laporan', sublabel: 'Laba Rugi & Neraca' },
    { id: 'faq', label: 'FAQ', sublabel: 'Pertanyaan & Konsultasi' },
  ];

  const currentIndex = pages.findIndex((p) => p.id === currentPage);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <section className="bg-white border-b border-[#E5E7EB] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prev / Next controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Previous Page */}
          {prevPage ? (
            <button
              onClick={() => onNavigate(prevPage.id)}
              className="p-5 border border-[#111827] bg-[#F8FAFC] hover:bg-white text-left transition-all shadow-[3px_3px_0px_0px_#111827] group cursor-pointer flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold text-gray-500 uppercase flex items-center gap-1 mb-1">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#FF7A00]" />
                  HALAMAN SEBELUMNYA
                </span>
                <span className="font-extrabold text-base sm:text-lg text-[#111827] group-hover:text-[#FF7A00] transition-colors block">
                  {prevPage.label}
                </span>
                <span className="text-xs text-gray-500">{prevPage.sublabel}</span>
              </div>
            </button>
          ) : (
            <div className="p-5 border border-dashed border-gray-200 text-gray-400 text-xs font-mono flex items-center">
              Awal Navigasi • Kasir Online
            </div>
          )}

          {/* Next Page */}
          {nextPage ? (
            <button
              onClick={() => onNavigate(nextPage.id)}
              className="p-5 border border-[#111827] bg-[#F8FAFC] hover:bg-white text-right transition-all shadow-[3px_3px_0px_0px_#111827] group cursor-pointer flex items-center justify-between"
            >
              <div className="w-full">
                <span className="text-[11px] font-mono font-bold text-gray-500 uppercase flex items-center justify-end gap-1 mb-1">
                  HALAMAN BERIKUTNYA
                  <ChevronRight className="w-3.5 h-3.5 text-[#FF7A00]" />
                </span>
                <span className="font-extrabold text-base sm:text-lg text-[#111827] group-hover:text-[#FF7A00] transition-colors block">
                  {nextPage.label}
                </span>
                <span className="text-xs text-gray-500">{nextPage.sublabel}</span>
              </div>
            </button>
          ) : (
            <button
              onClick={() => onNavigate('beranda')}
              className="p-5 border border-[#111827] bg-[#F8FAFC] hover:bg-white text-right transition-all shadow-[3px_3px_0px_0px_#111827] group cursor-pointer flex items-center justify-between"
            >
              <div className="w-full">
                <span className="text-[11px] font-mono font-bold text-gray-500 uppercase flex items-center justify-end gap-1 mb-1">
                  KEMBALI KE AWAL
                  <ChevronRight className="w-3.5 h-3.5 text-[#FF7A00]" />
                </span>
                <span className="font-extrabold text-base sm:text-lg text-[#111827] group-hover:text-[#FF7A00] transition-colors block">
                  Kembali ke Beranda
                </span>
                <span className="text-xs text-gray-500">Ringkasan & Solusi Sistem</span>
              </div>
            </button>
          )}
        </div>

        {/* Quick Page Jump Pills */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <LayoutGrid className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Lompat ke halaman:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {pages.map((p) => {
              const isActive = p.id === currentPage;
              return (
                <button
                  key={p.id}
                  onClick={() => onNavigate(p.id)}
                  className={`px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#111827] text-white font-bold shadow-xs'
                      : 'bg-[#F8FAFC] text-gray-700 hover:bg-gray-200 border border-[#E5E7EB]'
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
