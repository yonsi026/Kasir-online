import React, { useState } from 'react';
import { ArrowDown, Check, Zap, Layers, RefreshCw } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="solusi" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 02. ARSITEKTUR SOLUSI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Catat sekali. Biarkan sistem menghubungkan semuanya.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Setiap transaksi dapat terhubung dengan stok, pembayaran, dan pencatatan keuangan sehingga Anda tidak perlu memasukkan data yang sama berkali-kali.
          </p>
        </div>

        {/* Swiss Typographic Architecture Diagram */}
        <div className="border border-[#111827] bg-white p-6 sm:p-10 shadow-[6px_6px_0px_0px_#111827]">
          
          <div className="flex flex-col items-center max-w-4xl mx-auto space-y-6">
            
            {/* Step 1: Transaksi */}
            <div className="w-full max-w-md border-2 border-[#111827] bg-[#F8FAFC] p-4 text-center">
              <span className="text-[11px] font-mono uppercase tracking-widest text-gray-500 font-bold block mb-1">
                Langkah 01 • Input Kasir / POS
              </span>
              <div className="text-xl sm:text-2xl font-extrabold text-[#111827] tracking-tight">
                TRANSAKSI PENJUALAN
              </div>
              <div className="text-xs text-gray-600 mt-1 font-mono">
                Pindai Barcode / Pilih Produk → Terima Pembayaran
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex flex-col items-center text-gray-400">
              <div className="w-0.5 h-6 bg-[#111827]" />
              <ArrowDown className="w-5 h-5 text-[#111827] -mt-1" />
            </div>

            {/* Step 2: Transaction Engine */}
            <div className="w-full max-w-lg border-2 border-[#FF7A00] bg-orange-50/50 p-5 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-white text-[10px] font-mono uppercase px-3 py-0.5 font-bold tracking-wider">
                CORE AUTOMATION
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#111827] tracking-tight mt-1">
                TRANSACTION ENGINE
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mt-1">
                Memvalidasi data secara atomik, mengunci stok, dan mengeksekusi jurnal simultan
              </p>
            </div>

            {/* Branching down connectors */}
            <div className="w-full max-w-3xl flex flex-col items-center">
              <div className="w-0.5 h-6 bg-[#111827]" />
              <div className="w-full border-t-2 border-[#111827] relative">
                {/* 3 vertical drop points */}
                <div className="absolute left-[16.66%] -top-0 w-0.5 h-6 bg-[#111827]" />
                <div className="absolute left-1/2 -translate-x-1/2 -top-0 w-0.5 h-6 bg-[#111827]" />
                <div className="absolute right-[16.66%] -top-0 w-0.5 h-6 bg-[#111827]" />
              </div>
              <div className="h-6" />
            </div>

            {/* Step 3: Tri-Module Automation Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="border border-[#111827] p-5 bg-[#F8FAFC]">
                <div className="text-[11px] font-mono text-[#FF7A00] font-bold uppercase mb-1">
                  Otomatisasi 01
                </div>
                <h4 className="text-lg font-extrabold text-[#111827] mb-2">
                  INVENTORY
                </h4>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Stok fisik otomatis berkurang</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Catat riwayat Stock Movement</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Alert stok menipis otomatis aktif</span>
                  </li>
                </ul>
              </div>

              <div className="border border-[#111827] p-5 bg-[#F8FAFC]">
                <div className="text-[11px] font-mono text-[#FF7A00] font-bold uppercase mb-1">
                  Otomatisasi 02
                </div>
                <h4 className="text-lg font-extrabold text-[#111827] mb-2">
                  CASH / BANK
                </h4>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Saldo kas kasir / rekening terupdate</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Pencatatan QRIS & non-tunai akurat</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Piutang tercatat bila tempo kredit</span>
                  </li>
                </ul>
              </div>

              <div className="border border-[#111827] p-5 bg-[#F8FAFC]">
                <div className="text-[11px] font-mono text-[#FF7A00] font-bold uppercase mb-1">
                  Otomatisasi 03
                </div>
                <h4 className="text-lg font-extrabold text-[#111827] mb-2">
                  ACCOUNTING
                </h4>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Journal Entry terposting (Debit/Kredit)</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Hitung HPP (COGS) langsung</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Buku Besar (General Ledger) sinkron</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Merge down connector */}
            <div className="w-full max-w-3xl flex flex-col items-center">
              <div className="w-full border-t-2 border-[#111827] relative">
                <div className="absolute left-[16.66%] -bottom-0 w-0.5 h-4 bg-[#111827]" />
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-0 w-0.5 h-4 bg-[#111827]" />
                <div className="absolute right-[16.66%] -bottom-0 w-0.5 h-4 bg-[#111827]" />
              </div>
              <div className="w-0.5 h-6 bg-[#111827]" />
              <ArrowDown className="w-5 h-5 text-[#111827] -mt-1" />
            </div>

            {/* Step 4: Laporan Bisnis */}
            <div className="w-full max-w-lg border-2 border-[#111827] bg-[#081A33] text-white p-5 text-center">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7A00] font-bold block mb-1">
                HASIL AKHIR REAL-TIME
              </span>
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
                LAPORAN BISNIS TERBENTUK OTOMATIS
              </div>
              <div className="flex justify-center gap-3 mt-2 text-xs font-mono text-gray-300">
                <span>Laba Rugi</span> • 
                <span>Neraca</span> • 
                <span>Arus Kas</span> • 
                <span>Export PDF & Excel</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
