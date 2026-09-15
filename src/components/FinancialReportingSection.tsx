import React from 'react';
import { FileText, TrendingUp, Scale, ArrowUpRight, Download } from 'lucide-react';

export const FinancialReportingSection: React.FC = () => {
  return (
    <section id="laporan" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 08. LAPORAN KEUANGAN OTOMATIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Tahu angka bisnis Anda, bukan sekadar jumlah transaksi.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Mengetahui omzet besar belum tentu menjamin bisnis sehat. Kasir Online menyajikan 3 laporan standar akuntansi profesional siap pakai setiap saat.
          </p>
        </div>

        {/* 3 Clean Editorial Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: LABA RUGI */}
          <div className="border border-[#111827] bg-[#F8FAFC] p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#111827] hover:bg-white transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#FF7A00] font-bold uppercase block">
                    LAPORAN 01
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#111827] tracking-tight">
                    LABA RUGI
                  </h3>
                </div>
                <TrendingUp className="w-5 h-5 text-gray-500" />
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <span className="text-gray-600">Revenue (Pendapatan)</span>
                  <span className="font-bold text-[#111827]">Rp 100.000.000</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <span className="text-gray-600">COGS (Harga Pokok)</span>
                  <span className="font-bold text-gray-700">Rp 65.000.000</span>
                </div>

                <div className="flex justify-between items-center py-2 bg-white px-2 border border-gray-200">
                  <span className="text-gray-800 font-semibold">Gross Profit</span>
                  <span className="font-extrabold text-emerald-700">Rp 35.000.000</span>
                </div>

                <div className="pt-2 border-t-2 border-[#111827] flex justify-between items-baseline">
                  <div>
                    <span className="font-sans font-extrabold text-sm text-[#111827] uppercase block">
                      NET PROFIT
                    </span>
                    <span className="text-[10px] text-gray-500 font-sans">Laba Bersih Usaha</span>
                  </div>
                  <span className="font-extrabold text-xl text-[#FF7A00] num-mono">
                    Rp 18.000.000
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500">
              Menghitung beban gaji, listrik, sewa, dan biaya operasional secara otomatis.
            </div>
          </div>

          {/* Card 2: NERACA */}
          <div className="border border-[#111827] bg-[#F8FAFC] p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#111827] hover:bg-white transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#FF7A00] font-bold uppercase block">
                    LAPORAN 02
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#111827] tracking-tight">
                    NERACA
                  </h3>
                </div>
                <Scale className="w-5 h-5 text-gray-500" />
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <div>
                    <span className="text-gray-600 block">Assets (Total Aset)</span>
                    <span className="text-[10px] text-gray-400 font-sans">Kas, Bank, Stok, Piutang</span>
                  </div>
                  <span className="font-bold text-[#111827]">Rp 150.000.000</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <div>
                    <span className="text-gray-600 block">Liabilities (Kewajiban)</span>
                    <span className="text-[10px] text-gray-400 font-sans">Hutang Supplier & Pinjaman</span>
                  </div>
                  <span className="font-bold text-amber-700">Rp 50.000.000</span>
                </div>

                <div className="pt-2 border-t-2 border-[#111827] flex justify-between items-baseline">
                  <div>
                    <span className="font-sans font-extrabold text-sm text-[#111827] uppercase block">
                      EQUITY (MODAL)
                    </span>
                    <span className="text-[10px] text-gray-500 font-sans">Nilai Bersih Bisnis</span>
                  </div>
                  <span className="font-extrabold text-xl text-[#111827] num-mono">
                    Rp 100.000.000
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500">
              Validasi baku: <strong>Aset = Kewajiban + Modal</strong>. Dipantau ketat secara sistemik.
            </div>
          </div>

          {/* Card 3: CASH FLOW */}
          <div className="border border-[#111827] bg-[#F8FAFC] p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#111827] hover:bg-white transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#FF7A00] font-bold uppercase block">
                    LAPORAN 03
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#111827] tracking-tight">
                    CASH FLOW
                  </h3>
                </div>
                <FileText className="w-5 h-5 text-gray-500" />
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <div>
                    <span className="text-gray-600 block">Operating (Operasional)</span>
                    <span className="text-[10px] text-gray-400 font-sans">Arus kas dari penjualan</span>
                  </div>
                  <span className="font-bold text-emerald-600">+Rp 25.000.000</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <div>
                    <span className="text-gray-600 block">Investing (Investasi)</span>
                    <span className="text-[10px] text-gray-400 font-sans">Beli etalase / pendingin</span>
                  </div>
                  <span className="font-bold text-red-600">-Rp 5.000.000</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                  <div>
                    <span className="text-gray-600 block">Financing (Pendanaan)</span>
                    <span className="text-[10px] text-gray-400 font-sans">Setoran modal / pinjaman</span>
                  </div>
                  <span className="font-bold text-blue-600">+Rp 10.000.000</span>
                </div>

                <div className="pt-2 border-t-2 border-[#111827] flex justify-between items-baseline">
                  <div>
                    <span className="font-sans font-extrabold text-sm text-[#111827] uppercase block">
                      NET CASH FLOW
                    </span>
                    <span className="text-[10px] text-gray-500 font-sans">Surplus Kas Riil</span>
                  </div>
                  <span className="font-extrabold text-xl text-emerald-700 num-mono">
                    +Rp 30.000.000
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500">
              Menjaga likuiditas kas harian agar tidak mengalami krisis uang tunai belanja stok.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
