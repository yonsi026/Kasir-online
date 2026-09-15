import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 17. PAKET & PENERAPAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Mulai kelola bisnis dengan cara yang lebih terstruktur.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Harga dan paket akan tersedia sesuai kebutuhan bisnis. Kami menyesuaikan skala penerapan dari warung tunggal hingga jaringan retail multi-cabang.
          </p>
        </div>

        {/* Pricing Architecture Placeholder Card */}
        <div className="border border-[#111827] bg-white p-8 sm:p-12 shadow-[6px_6px_0px_0px_#111827] max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider">
                AKSES PERDANA
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                Konsultasikan Kebutuhan Sistem Usaha Anda
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Dapatkan pendampingan penataan database produk, konfigurasi Chart of Accounts sesuai jenis usaha, dan pelatihan kasir tanpa biaya setup tersembunyi.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF7A00]" />
                  <span>Modul POS + Inventory + Akuntansi Lengkap</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF7A00]" />
                  <span>Dukungan Transaksi Mode Offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF7A00]" />
                  <span>Akses Multi-Role Tanpa Batas User Kasir</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF7A00]" />
                  <span>Ekspor Excel & Cetak Dokumen PDF Resmi</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-[#E5E7EB] pt-6 md:pt-0 md:pl-8 flex flex-col justify-center space-y-4">
              <div className="text-xs font-mono text-gray-500">
                Langkah Berikutnya:
              </div>
              <button
                onClick={onOpenDemo}
                className="w-full bg-[#FF7A00] hover:bg-[#E56E00] text-white font-extrabold text-base py-4 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:translate-y-0.5"
              >
                <span>Mulai Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-gray-500 text-center block">
                Tim spesialis kami akan mendemonstrasikan sistem langsung sesuai alur bisnis Anda.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
