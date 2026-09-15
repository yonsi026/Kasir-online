import React from 'react';
import { Package, ArrowDownRight, ArrowUpRight, History, AlertCircle } from 'lucide-react';

export const InventorySection: React.FC = () => {
  const stockBreakdown = [
    { label: 'Opening Stock (Stok Awal)', value: '+100', note: 'Saldo awal periode', color: 'text-gray-800' },
    { label: 'Purchase (Pembelian Supplier)', value: '+50', note: 'PO-2026-088 diterima', color: 'text-emerald-600' },
    { label: 'Sale (Penjualan Kasir)', value: '-20', note: 'Total transaksi POS', color: 'text-red-600' },
    { label: 'Return (Retur Pelanggan)', value: '+5', note: 'Koreksi nota retur', color: 'text-blue-600' },
    { label: 'Adjustment (Stock Opname)', value: '-2', note: 'Kerusakan/kadaluarsa', color: 'text-amber-600' },
  ];

  const inventoryTable = [
    { name: 'Indomie Goreng Rasa Ayam', sku: 'SKU-001', stock: 12, unit: 'Dus', min: 5, status: 'Aman', statusClass: 'bg-emerald-100 text-emerald-800' },
    { name: 'Aqua Botol 600ml', sku: 'SKU-002', stock: 5, unit: 'Karton', min: 8, status: 'Menipis', statusClass: 'bg-orange-100 text-[#FF7A00] font-bold border border-orange-200' },
    { name: 'Kopi Kapal Api Special 165g', sku: 'SKU-003', stock: 0, unit: 'Pack', min: 4, status: 'Habis', statusClass: 'bg-red-100 text-red-800 font-bold' },
    { name: 'Bimoli Minyak Goreng 2L', sku: 'SKU-004', stock: 28, unit: 'Pouch', min: 10, status: 'Aman', statusClass: 'bg-emerald-100 text-emerald-800' },
    { name: 'Gula Pasir Gulaku 1kg', sku: 'SKU-005', stock: 6, unit: 'Kg', min: 10, status: 'Menipis', statusClass: 'bg-orange-100 text-[#FF7A00] font-bold border border-orange-200' },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 06. MANAJEMEN INVENTORI & AUDIT STOK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Stok bukan sekadar angka.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Setiap perubahan stok dapat ditelusuri melalui stock movement sehingga Anda mengetahui dari mana stok bertambah atau berkurang dengan riwayat yang tidak bisa dimanipulasi.
          </p>
        </div>

        {/* 2-Column Swiss Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Stock Movement Formula Box */}
          <div className="lg:col-span-5 border border-[#111827] p-6 sm:p-8 bg-[#F8FAFC] shadow-[6px_6px_0px_0px_#111827]">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] mb-6">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-[#FF7A00]" />
                <h3 className="font-extrabold text-sm text-[#111827] uppercase tracking-wide">
                  Formulasi Stock Movement
                </h3>
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase">
                Audit Trail Aktif
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs sm:text-sm">
              {stockBreakdown.map((item) => (
                <div key={item.label} className="flex items-center justify-between py-1 border-b border-gray-200/60">
                  <div>
                    <span className="text-gray-800 font-medium block">{item.label}</span>
                    <span className="text-[10px] text-gray-400 font-sans">{item.note}</span>
                  </div>
                  <span className={`font-bold ${item.color} num-mono text-sm sm:text-base`}>
                    {item.value}
                  </span>
                </div>
              ))}

              <div className="pt-4 border-t-2 border-[#111827] flex items-baseline justify-between">
                <div>
                  <span className="font-sans font-extrabold text-sm sm:text-base text-[#111827] uppercase">
                    CURRENT STOCK (STOK AKHIR)
                  </span>
                  <span className="text-[10px] text-gray-500 font-sans block">Tervalidasi secara sistem</span>
                </div>
                <span className="font-extrabold text-2xl sm:text-3xl text-[#FF7A00] num-mono">
                  133
                </span>
              </div>
            </div>

            <div className="mt-6 p-3 bg-white border border-[#E5E7EB] text-xs text-gray-600">
              <span className="font-bold text-[#111827]">Prinsip Tanpa Celah:</span> Stok tidak dapat diedit langsung begitu saja. Segala selisih harus melalui modul Stock Opname atau penyesuaian beralasan resmi.
            </div>
          </div>

          {/* Right: Live Product Status Table */}
          <div className="lg:col-span-7 border border-[#111827] bg-white shadow-[6px_6px_0px_0px_#111827]">
            <div className="px-6 py-4 border-b border-[#E5E7EB] bg-[#081A33] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-[#FF7A00]" />
                <span className="font-bold text-sm tracking-wide">
                  TABEL MONITORING STOK PRODUK
                </span>
              </div>
              <span className="text-xs font-mono text-gray-300">
                Gudang Pusat (Default)
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[#E5E7EB] bg-[#F8FAFC] font-mono text-gray-600">
                    <th className="py-3 px-4 font-bold">PRODUK</th>
                    <th className="py-3 px-4 font-bold text-center">STOK SAAT INI</th>
                    <th className="py-3 px-4 font-bold text-center">MINIMAL STOK</th>
                    <th className="py-3 px-4 font-bold text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB] font-mono">
                  {inventoryTable.map((row) => (
                    <tr key={row.sku} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3.5 px-4 font-sans">
                        <span className="font-bold text-[#111827] block">{row.name}</span>
                        <span className="text-[11px] text-gray-400 font-mono">{row.sku}</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-sm text-[#111827]">
                        {row.stock} <span className="text-xs font-normal text-gray-500">{row.unit}</span>
                      </td>
                      <td className="py-3.5 px-4 text-center text-gray-500">
                        {row.min} {row.unit}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className={`inline-block px-2.5 py-1 text-xs ${row.statusClass}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-[#E5E7EB] bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-2 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#FF7A00]" />
                <span>Peringatan Oranye aktif otomatis saat stok mendekati batas minimum.</span>
              </div>
              <span className="font-mono text-[11px] text-gray-400">Diperbarui: Real-time via POS</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
