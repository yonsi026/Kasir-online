import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenDemo: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenDemo }) => {
  return (
    <section className="bg-[#081A33] text-white py-24 sm:py-32 border-b border-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// SATUKAN BISNIS ANDA</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight leading-[1.1] text-white">
            Saatnya mengelola bisnis dengan lebih terstruktur.
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Satukan transaksi, stok, kas, dan laporan bisnis dalam satu sistem.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenDemo}
              className="bg-[#FF7A00] hover:bg-[#E56E00] text-white font-extrabold text-base px-10 py-4 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:translate-y-0.5 tracking-wide"
            >
              <span>MULAI SEKARANG</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#solusi"
              className="border border-white/30 hover:border-white hover:bg-white/5 text-white font-semibold text-base px-8 py-4 transition-colors flex items-center justify-center gap-2"
            >
              <span>Lihat Cara Kerja</span>
              <ChevronRight className="w-4 h-4 text-[#FF7A00]" />
            </a>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-wrap items-center gap-8 text-xs font-mono text-gray-400">
            <span>✓ Transaksi sekali dicatat, laporan terbentuk otomatis</span>
            <span>✓ Siap digunakan online & offline</span>
            <span>✓ Dirancang dengan keamanan berlapis</span>
          </div>
        </div>
      </div>
    </section>
  );
};
