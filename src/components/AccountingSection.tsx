import React from 'react';
import { ArrowRight, CheckCircle2, BookOpen, Layers, Calculator } from 'lucide-react';

interface AccountingSectionProps {
  onOpenDemo: () => void;
}

export const AccountingSection: React.FC<AccountingSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 07. MESIN AKUNTANSI OTOMATIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Dari transaksi langsung menuju laporan keuangan.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Tidak perlu ahli akuntansi untuk memiliki pembukuan yang rapi. Setiap kali kasir menekan tombol bayar, sistem secara otomatis mencatat jurnal debet-kredit yang seimbang di belakang layar.
          </p>
        </div>

        {/* 4-Step Accounting Flow Banner */}
        <div className="border border-[#111827] bg-white p-4 sm:p-6 mb-12 shadow-[4px_4px_0px_0px_#111827]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 border border-[#E5E7EB] bg-[#F8FAFC]">
              <span className="text-xs font-mono font-bold text-[#FF7A00] block mb-1">01. POS KASIR</span>
              <h4 className="font-extrabold text-[#111827] text-base mb-1">Penjualan Tunai</h4>
              <p className="text-xs text-gray-600">Barang terjual senilai Rp 100.000 kepada pelanggan.</p>
            </div>

            <div className="p-4 border border-[#E5E7EB] bg-[#F8FAFC]">
              <span className="text-xs font-mono font-bold text-[#FF7A00] block mb-1">02. OTOMATIS</span>
              <h4 className="font-extrabold text-[#111827] text-base mb-1">Journal Entry</h4>
              <p className="text-xs text-gray-600">Sistem membuat jurnal berimbang (Double-Entry) seketika.</p>
            </div>

            <div className="p-4 border border-[#E5E7EB] bg-[#F8FAFC]">
              <span className="text-xs font-mono font-bold text-[#FF7A00] block mb-1">03. BUKU BESAR</span>
              <h4 className="font-extrabold text-[#111827] text-base mb-1">General Ledger</h4>
              <p className="text-xs text-gray-600">Saldo akun Kas, Persediaan & Penjualan langsung sinkron.</p>
            </div>

            <div className="p-4 border border-[#111827] bg-[#081A33] text-white">
              <span className="text-xs font-mono font-bold text-[#FF7A00] block mb-1">04. KEPUTUSAN</span>
              <h4 className="font-extrabold text-white text-base mb-1">Financial Reports</h4>
              <p className="text-xs text-gray-300">Laba Rugi, Neraca, dan Arus Kas langsung siap dibaca.</p>
            </div>

          </div>
        </div>

        {/* 2-Column Visual Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Jurnal Entry Mockup */}
          <div className="lg:col-span-6 border border-[#111827] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#111827]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] mb-6">
                <div>
                  <span className="text-[11px] font-mono text-gray-500 uppercase block">Jurnal Otomatis #JV-20260915-001</span>
                  <h3 className="font-extrabold text-lg text-[#111827]">
                    Contoh Posting Jurnal Penjualan
                  </h3>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-mono font-bold px-2.5 py-1">
                  BALANCED
                </span>
              </div>

              {/* Table Debit / Credit */}
              <div className="border border-[#E5E7EB] mb-6 overflow-hidden">
                <table className="w-full text-xs font-mono text-left">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-[#E5E7EB] text-gray-600">
                      <th className="py-2.5 px-3">AKUN (CHART OF ACCOUNTS)</th>
                      <th className="py-2.5 px-3 text-right">DEBIT</th>
                      <th className="py-2.5 px-3 text-right">KREDIT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-3">
                        <span className="font-bold text-[#111827] block">1000 — Kas (Cash)</span>
                        <span className="text-[10px] text-gray-400">Penerimaan uang kasir</span>
                      </td>
                      <td className="py-3 px-3 text-right font-bold text-emerald-700">Rp 100.000</td>
                      <td className="py-3 px-3 text-right text-gray-400">-</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3">
                        <span className="font-bold text-[#111827] block">4000 — Pendapatan Penjualan</span>
                        <span className="text-[10px] text-gray-400">Peningkatan omzet usaha</span>
                      </td>
                      <td className="py-3 px-3 text-right text-gray-400">-</td>
                      <td className="py-3 px-3 text-right font-bold text-emerald-700">Rp 100.000</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-3">
                        <span className="font-bold text-gray-700 block">5000 — HPP (Cost of Goods Sold)</span>
                        <span className="text-[10px] text-gray-400">Harga modal barang yang terjual</span>
                      </td>
                      <td className="py-3 px-3 text-right font-bold text-gray-800">Rp 60.000</td>
                      <td className="py-3 px-3 text-right text-gray-400">-</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-3">
                        <span className="font-bold text-gray-700 block">1200 — Persediaan Barang</span>
                        <span className="text-[10px] text-gray-400">Pengurangan nilai aset gudang</span>
                      </td>
                      <td className="py-3 px-3 text-right text-gray-400">-</td>
                      <td className="py-3 px-3 text-right font-bold text-gray-800">Rp 60.000</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-[#111827] text-white font-bold">
                      <td className="py-2.5 px-3">TOTAL SEIMBANG (BALANCE)</td>
                      <td className="py-2.5 px-3 text-right text-emerald-400">Rp 160.000</td>
                      <td className="py-2.5 px-3 text-right text-emerald-400">Rp 160.000</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <p className="text-xs text-gray-600 bg-[#F8FAFC] p-3 border border-[#E5E7EB]">
              <strong>Kaidah Baku:</strong> Kasir Online menolak penyimpanan transaksi jika nilai Debet ≠ Kredit. Ini menjamin laporan keuangan Anda selalu akurat tanpa selisih misterius.
            </p>
          </div>

          {/* Column 2: Perhitungan Untung Rugi */}
          <div className="lg:col-span-6 border border-[#111827] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#111827]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] mb-6">
                <div>
                  <span className="text-[11px] font-mono text-gray-500 uppercase block">Kalkulasi Otomatis</span>
                  <h3 className="font-extrabold text-lg text-[#111827]">
                    Hasil Kalkulasi Laba Kotor Langsung
                  </h3>
                </div>
                <Calculator className="w-5 h-5 text-[#FF7A00]" />
              </div>

              <div className="space-y-4 font-mono">
                <div className="p-4 border border-[#E5E7EB] bg-[#F8FAFC] flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-500 block">Total Pendapatan (Revenue)</span>
                    <span className="font-sans text-sm font-bold text-[#111827]">Harga Jual ke Pelanggan</span>
                  </div>
                  <span className="text-xl font-bold text-[#111827]">Rp 100.000</span>
                </div>

                <div className="p-4 border border-[#E5E7EB] bg-[#F8FAFC] flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-500 block">Harga Pokok Penjualan (COGS / Modal)</span>
                    <span className="font-sans text-sm font-bold text-gray-700">Modal Pembelian Barang</span>
                  </div>
                  <span className="text-xl font-bold text-red-600">- Rp 60.000</span>
                </div>

                <div className="p-5 border-2 border-[#FF7A00] bg-orange-50/50 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#FF7A00] uppercase block">
                      Laba Kotor (Gross Profit)
                    </span>
                    <span className="font-sans text-xs text-gray-600">Margin Keuntungan Bersih: 40%</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#FF7A00] num-mono">
                    Rp 40.000
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-600">
                Laporan terbentuk otomatis tanpa perlu menyewa staf akuntan tersendiri.
              </span>
              <button
                onClick={onOpenDemo}
                className="bg-[#111827] hover:bg-black text-white text-xs font-bold px-5 py-2.5 transition-colors whitespace-nowrap cursor-pointer"
              >
                Lihat Cara Kerja
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
