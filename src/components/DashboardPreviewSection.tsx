import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Wallet, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownRight,
  ShieldCheck,
  Package
} from 'lucide-react';

export const DashboardPreviewSection: React.FC = () => {
  const weeklySalesData = [
    { day: 'Sen', amount: 5.8, label: 'Rp 5,8M' },
    { day: 'Sel', amount: 6.2, label: 'Rp 6,2M' },
    { day: 'Rab', amount: 7.1, label: 'Rp 7,1M' },
    { day: 'Kam', amount: 6.9, label: 'Rp 6,9M' },
    { day: 'Jum', amount: 8.1, label: 'Rp 8,1M' },
    { day: 'Sab', amount: 9.4, label: 'Rp 9,4M' },
    { day: 'Min', amount: 8.45, label: 'Rp 8,45M' },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 11. DASHBOARD PREVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Semua informasi penting, dalam satu tampilan.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Pantau performa harian usaha Anda dari kas, laba bersih, stok genting, hingga piutang jatuh tempo dalam satu antarmuka terpadu.
          </p>
        </div>

        {/* Full-Width Real Application Dashboard UI Mockup */}
        <div className="border border-[#111827] bg-white shadow-[8px_8px_0px_0px_#111827] overflow-hidden">
          
          {/* Top Bar Navigation */}
          <div className="bg-[#081A33] text-white px-6 py-3.5 border-b border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#FF7A00]" />
              <span className="font-extrabold text-sm tracking-wide">
                KASIR ONLINE — PUSAT KONTROL BISNIS
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-gray-400">
                | Organisasi: PT Berkah Sejahtera Mandiri
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                DATABASE SINKRON
              </span>
              <span className="text-gray-300">15 September 2026</span>
            </div>
          </div>

          {/* 7 KPI Bar from PRD Requirements */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 border-b border-[#E5E7EB] divide-x divide-y sm:divide-y-0 divide-[#E5E7EB] bg-[#F8FAFC]">
            
            <div className="p-4">
              <span className="text-[11px] font-mono text-gray-500 block mb-1">Penjualan Hari Ini</span>
              <span className="font-extrabold text-lg text-[#111827] num-mono block">Rp 8.450.000</span>
              <span className="text-[10px] text-emerald-600 font-semibold">+14.2%</span>
            </div>

            <div className="p-4">
              <span className="text-[11px] font-mono text-gray-500 block mb-1">Total Transaksi</span>
              <span className="font-extrabold text-lg text-[#111827] num-mono block">127</span>
              <span className="text-[10px] text-gray-500">Struk selesai</span>
            </div>

            <div className="p-4">
              <span className="text-[11px] font-mono text-gray-500 block mb-1">Gross Profit</span>
              <span className="font-extrabold text-lg text-[#FF7A00] num-mono block">Rp 2.350.000</span>
              <span className="text-[10px] text-gray-500">Margin 27.8%</span>
            </div>

            <div className="p-4">
              <span className="text-[11px] font-mono text-gray-500 block mb-1">Net Profit</span>
              <span className="font-extrabold text-lg text-emerald-700 num-mono block">Rp 1.750.000</span>
              <span className="text-[10px] text-emerald-600 font-semibold">Laba Bersih</span>
            </div>

            <div className="p-4">
              <span className="text-[11px] font-mono text-gray-500 block mb-1">Saldo Kas & Bank</span>
              <span className="font-extrabold text-lg text-[#111827] num-mono block">Rp 12.500.000</span>
              <span className="text-[10px] text-gray-500">Likuiditas Aman</span>
            </div>

            <div className="p-4 bg-blue-50/40">
              <span className="text-[11px] font-mono text-blue-800 font-bold block mb-1">Piutang Pelanggan</span>
              <span className="font-extrabold text-lg text-blue-900 num-mono block">Rp 4.200.000</span>
              <span className="text-[10px] text-blue-700">3 Jatuh Tempo</span>
            </div>

            <div className="p-4 bg-amber-50/40">
              <span className="text-[11px] font-mono text-amber-800 font-bold block mb-1">Hutang Supplier</span>
              <span className="font-extrabold text-lg text-amber-900 num-mono block">Rp 3.100.000</span>
              <span className="text-[10px] text-amber-700">2 Perlu Bayar</span>
            </div>

          </div>

          {/* Main Dashboard Body Grid */}
          <div className="p-6 lg:p-8 space-y-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Sales Trend Chart Column */}
              <div className="lg:col-span-8 border border-[#E5E7EB] p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div>
                    <h4 className="font-extrabold text-sm text-[#111827]">
                      Grafik Penjualan 7 Hari Terakhir
                    </h4>
                    <span className="text-xs text-gray-400">Total akumulasi: Rp 51.950.000</span>
                  </div>
                  <span className="text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5">
                    Tren Naik +8.4%
                  </span>
                </div>

                {/* Bar Graph Visualizer */}
                <div className="h-44 flex items-end justify-between gap-2 pt-4 px-2">
                  {weeklySalesData.map((item, idx) => {
                    const heightPercent = (item.amount / 10) * 100;
                    const isToday = idx === weeklySalesData.length - 1;
                    return (
                      <div key={item.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                        <span className="text-[10px] font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {item.label}
                        </span>
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full max-w-[36px] transition-all ${
                            isToday ? 'bg-[#FF7A00]' : 'bg-[#111827] hover:bg-gray-700'
                          }`}
                        />
                        <span className={`text-xs font-mono font-bold ${isToday ? 'text-[#FF7A00]' : 'text-gray-600'}`}>
                          {item.day}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Top Products */}
              <div className="lg:col-span-4 border border-[#E5E7EB] p-5 space-y-3">
                <div className="pb-2 border-b border-gray-100 flex justify-between items-center">
                  <h4 className="font-extrabold text-sm text-[#111827]">
                    Top 5 Produk Terlaris
                  </h4>
                  <span className="text-[10px] font-mono text-gray-400">Hari Ini</span>
                </div>
                <div className="divide-y divide-gray-100 text-xs font-mono">
                  <div className="py-2 flex justify-between">
                    <span>1. Indomie Goreng</span>
                    <span className="font-bold text-[#111827]">84 pcs</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span>2. Aqua Botol 600ml</span>
                    <span className="font-bold text-[#111827]">62 botol</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span>3. Minyak Goreng 2L</span>
                    <span className="font-bold text-[#111827]">29 pouch</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span>4. Kopi Sachet Special</span>
                    <span className="font-bold text-[#111827]">24 renceng</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span>5. Gula Pasir 1kg</span>
                    <span className="font-bold text-[#111827]">18 kg</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Row: Alerts & Recent Transactions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              
              {/* Alert: Stok Menipis */}
              <div className="border border-amber-200 bg-amber-50/50 p-4 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>7 Produk Stok Hampir Habis</span>
                </div>
                <p className="text-gray-600">
                  Aqua Galon (sisa 4), Gula Pasir 1kg (sisa 6), Kopi Sachet (sisa 0). Segera buat Purchase Order supplier.
                </p>
              </div>

              {/* Alert: Piutang */}
              <div className="border border-blue-200 bg-blue-50/50 p-4 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-900">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Peringatan Piutang Tempo</span>
                </div>
                <p className="text-gray-600">
                  3 faktur pelanggan senilai Rp 4.200.000 telah melewati batas tempo 14 hari. Sistem siap kirim pengingat WA/Invoice.
                </p>
              </div>

              {/* Alert: Hutang Supplier */}
              <div className="border border-gray-300 bg-[#F8FAFC] p-4 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-[#111827]">
                  <Wallet className="w-4 h-4 text-[#FF7A00]" />
                  <span>Kewajiban Hutang Supplier</span>
                </div>
                <p className="text-gray-600">
                  Tagihan supplier Rp 3.100.000 jatuh tempo dalam 3 hari (PT Sembako Jaya). Saldo kas mencukupi.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
