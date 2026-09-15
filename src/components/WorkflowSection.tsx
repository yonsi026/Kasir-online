import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'Tambah Produk', desc: 'Input nama, harga modal, harga jual, dan stok awal.' },
    { num: '02', title: 'Transaksi', desc: 'Kasir scan barcode atau pilih barang di antarmuka POS.' },
    { num: '03', title: 'Pembayaran', desc: 'Terima uang tunai, transfer, atau QRIS dari pembeli.' },
    { num: '04', title: 'Stok Terupdate', desc: 'Sistem memotong stok fisik dan mencatat log mutasi.' },
    { num: '05', title: 'Jurnal Terbentuk', desc: 'Debit kas dan kredit penjualan tercatat seimbang otomatis.' },
    { num: '06', title: 'Laporan Terupdate', desc: 'Laba rugi, neraca, dan posisi kas langsung sinkron.' },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 10. ALUR OPERASIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Satu alur. Lebih sedikit pekerjaan berulang.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Dari barang masuk gudang hingga laporan keuangan terbit, tidak ada satupun proses yang perlu diketik ulang manual dua kali.
          </p>
        </div>

        {/* Desktop: Horizontal Connected Grid / Mobile: Vertical Timeline */}
        <div className="hidden lg:grid grid-cols-6 border border-[#111827] bg-white shadow-[6px_6px_0px_0px_#111827]">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`p-6 flex flex-col justify-between relative ${
                idx !== steps.length - 1 ? 'border-r border-[#E5E7EB]' : ''
              } hover:bg-[#F8FAFC] transition-colors`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-[#111827] num-mono">
                    {step.num}
                  </span>
                  {idx !== steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                  )}
                </div>
                <h3 className="font-extrabold text-base text-[#111827] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#FF7A00]" />
                <span className="text-[10px] font-mono text-gray-500 uppercase">
                  Tahap {idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-3">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-5 border border-[#111827] bg-white flex items-start gap-4 shadow-[3px_3px_0px_0px_#111827]"
            >
              <div className="text-2xl font-extrabold text-[#FF7A00] num-mono flex-shrink-0">
                {step.num}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base text-[#111827] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {step.desc}
                </p>
              </div>
              {idx !== steps.length - 1 && (
                <ArrowDown className="w-4 h-4 text-gray-300 flex-shrink-0 mt-1" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
