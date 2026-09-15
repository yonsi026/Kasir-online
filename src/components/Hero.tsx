import React, { useState } from 'react';
import { ArrowRight, ShoppingCart, Package, DollarSign, TrendingUp, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import { PageId } from '../types';

interface HeroProps {
  onOpenDemo: () => void;
  onNavigate?: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'pos' | 'inventory' | 'finance'>('overview');

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E5E7EB] overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Swiss Typography */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8FAFC] border border-[#E5E7EB] text-xs font-bold tracking-widest text-[#111827] uppercase">
              <span className="w-2 h-2 bg-[#FF7A00]" />
              SISTEM KASIR & MANAJEMEN BISNIS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111827] tracking-tight leading-[1.08]">
              Kelola Transaksi, Stok, dan Keuangan Bisnis dalam Satu Sistem.
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
              Kasir Online membantu Anda mencatat penjualan, mengelola stok, memantau pemasukan dan pengeluaran, hingga melihat laporan keuangan—tanpa pencatatan berulang.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenDemo}
                className="bg-[#FF7A00] hover:bg-[#E56E00] text-white font-bold text-base px-8 py-3.5 transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm active:translate-y-0.5"
              >
                <span>Mulai Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                type="button"
                onClick={() => onNavigate ? onNavigate('cara-kerja') : window.location.hash = 'cara-kerja'}
                className="border border-[#111827] hover:bg-[#F8FAFC] text-[#111827] font-semibold text-base px-6 py-3.5 transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lihat Cara Kerja</span>
                <ChevronRight className="w-4 h-4 text-[#FF7A00]" />
              </button>
            </div>

            <div className="pt-6 border-t border-[#E5E7EB] grid grid-cols-3 gap-4 text-xs font-semibold text-gray-600">
              <div>
                <span className="block font-bold text-base text-[#111827] num-mono">100%</span>
                <span>Double-Entry Terintegrasi</span>
              </div>
              <div>
                <span className="block font-bold text-base text-[#111827] num-mono">Online+Offline</span>
                <span>Transaksi Tanpa Macet</span>
              </div>
              <div>
                <span className="block font-bold text-base text-[#111827] num-mono">Multi-Role</span>
                <span>Owner hingga Kasir</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Product Dashboard UI */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="border border-[#111827] shadow-[6px_6px_0px_0px_#111827] bg-white">
              
              {/* Product Header Bar */}
              <div className="border-b border-[#E5E7EB] bg-[#081A33] text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 bg-red-400 block" />
                    <span className="w-2.5 h-2.5 bg-yellow-400 block" />
                    <span className="w-2.5 h-2.5 bg-green-400 block" />
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-300">
                    kasironline.app / dashboard / toko-berkah-utama
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-gray-200">ONLINE</span>
                </div>
              </div>

              {/* Sub Navigation Inside UI Mockup */}
              <div className="border-b border-[#E5E7EB] bg-[#F8FAFC] px-4 py-2 flex gap-1 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`text-xs font-bold px-3 py-1.5 transition-colors cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-white border border-[#E5E7EB] text-[#FF7A00] border-b-transparent shadow-xs'
                      : 'text-gray-600 hover:text-[#111827]'
                  }`}
                >
                  Ringkasan Hari Ini
                </button>
                <button
                  onClick={() => setActiveTab('pos')}
                  className={`text-xs font-bold px-3 py-1.5 transition-colors cursor-pointer ${
                    activeTab === 'pos'
                      ? 'bg-white border border-[#E5E7EB] text-[#FF7A00] border-b-transparent shadow-xs'
                      : 'text-gray-600 hover:text-[#111827]'
                  }`}
                >
                  POS / Kasir
                </button>
                <button
                  onClick={() => setActiveTab('inventory')}
                  className={`text-xs font-bold px-3 py-1.5 transition-colors cursor-pointer ${
                    activeTab === 'inventory'
                      ? 'bg-white border border-[#E5E7EB] text-[#FF7A00] border-b-transparent shadow-xs'
                      : 'text-gray-600 hover:text-[#111827]'
                  }`}
                >
                  Inventory
                </button>
                <button
                  onClick={() => setActiveTab('finance')}
                  className={`text-xs font-bold px-3 py-1.5 transition-colors cursor-pointer ${
                    activeTab === 'finance'
                      ? 'bg-white border border-[#E5E7EB] text-[#FF7A00] border-b-transparent shadow-xs'
                      : 'text-gray-600 hover:text-[#111827]'
                  }`}
                >
                  Laba Rugi & Arus Kas
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-5 sm:p-6 bg-white space-y-6">
                
                {/* 4 Core Primary Metric Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  
                  <div className="p-3.5 border border-[#E5E7EB] bg-[#F8FAFC]">
                    <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-1">
                      <span>Penjualan Hari Ini</span>
                      <DollarSign className="w-3.5 h-3.5 text-[#FF7A00]" />
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#111827] num-mono">
                      Rp 8.450.000
                    </div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-1">
                      +14.2% vs kemarin
                    </div>
                  </div>

                  <div className="p-3.5 border border-[#E5E7EB] bg-[#F8FAFC]">
                    <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-1">
                      <span>Transaksi</span>
                      <ShoppingCart className="w-3.5 h-3.5 text-gray-600" />
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#111827] num-mono">
                      127
                    </div>
                    <div className="text-[11px] text-gray-600 font-medium mt-1">
                      Rata-rata Rp 66.500
                    </div>
                  </div>

                  <div className="p-3.5 border border-[#E5E7EB] bg-[#F8FAFC]">
                    <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-1">
                      <span>Gross Profit</span>
                      <TrendingUp className="w-3.5 h-3.5 text-[#FF7A00]" />
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#FF7A00] num-mono">
                      Rp 2.350.000
                    </div>
                    <div className="text-[11px] text-gray-600 font-medium mt-1">
                      Margin 27.8%
                    </div>
                  </div>

                  <div className="p-3.5 border border-amber-200 bg-amber-50/60">
                    <div className="flex items-center justify-between text-xs text-amber-800 font-semibold mb-1">
                      <span>Stok Menipis</span>
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-amber-900 num-mono">
                      7 Produk
                    </div>
                    <div className="text-[11px] text-amber-700 font-medium mt-1">
                      Perlu restock segera
                    </div>
                  </div>
                </div>

                {/* Dynamic tab view */}
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    {/* Live architecture connection strip */}
                    <div className="border border-[#E5E7EB] p-3.5 bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 font-bold text-[#111827]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Siklus Transaksi Otomatis Terakhir: #INV-20260915-0127</span>
                      </div>
                      <div className="flex items-center gap-3 font-mono text-[11px] text-gray-600">
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5">Stok -3</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5">Kas +Rp75.000</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-0.5">Jurnal Balance</span>
                      </div>
                    </div>

                    {/* Mini table: Transaksi Terakhir */}
                    <div className="border border-[#E5E7EB]">
                      <div className="px-3.5 py-2.5 bg-gray-50 border-b border-[#E5E7EB] flex justify-between items-center text-xs font-bold text-[#111827]">
                        <span>Aktivitas Transaksi Kasir Hari Ini</span>
                        <span className="text-gray-500 font-normal font-mono">15 Sep 2026, 14:32 WIB</span>
                      </div>
                      <div className="divide-y divide-gray-100 text-xs font-mono">
                        <div className="px-3.5 py-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#111827]">#INV-0127</span>
                            <span className="text-gray-500">Minyak Goreng 2L, Beras 5kg</span>
                          </div>
                          <span className="font-bold text-[#111827]">Rp 118.000 (QRIS)</span>
                        </div>
                        <div className="px-3.5 py-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#111827]">#INV-0126</span>
                            <span className="text-gray-500">Indomie Goreng x10, Aqua 600ml x4</span>
                          </div>
                          <span className="font-bold text-[#111827]">Rp 46.000 (Tunai)</span>
                        </div>
                        <div className="px-3.5 py-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#111827]">#INV-0125</span>
                            <span className="text-gray-500">Gula Pasir 1kg, Kopi Kapal Api x2</span>
                          </div>
                          <span className="font-bold text-[#111827]">Rp 29.500 (Tunai)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'pos' && (
                  <div className="border border-[#E5E7EB] p-4 bg-[#F8FAFC] space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold text-[#111827] border-b border-gray-200 pb-2">
                      <span>POS Terminal Kasir</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">Barcode Scanner Siap</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="p-2 border border-gray-200 bg-white">
                        <div className="font-bold">Indomie Goreng</div>
                        <div className="text-gray-500 num-mono">Rp 3.000</div>
                        <span className="text-[10px] text-emerald-600">Stok: 48</span>
                      </div>
                      <div className="p-2 border border-gray-200 bg-white">
                        <div className="font-bold">Aqua Botol 600ml</div>
                        <div className="text-gray-500 num-mono">Rp 4.000</div>
                        <span className="text-[10px] text-emerald-600">Stok: 24</span>
                      </div>
                      <div className="p-2 border border-gray-200 bg-white">
                        <div className="font-bold">Kopi Tubruk</div>
                        <div className="text-gray-500 num-mono">Rp 5.000</div>
                        <span className="text-[10px] text-amber-600">Stok: 5</span>
                      </div>
                    </div>
                    <div className="p-2.5 bg-white border border-gray-200 flex justify-between items-center text-xs">
                      <span className="font-semibold text-gray-700">Keranjang: 5 Item</span>
                      <span className="font-extrabold text-[#FF7A00] num-mono text-sm">Total Rp 18.000</span>
                    </div>
                  </div>
                )}

                {activeTab === 'inventory' && (
                  <div className="border border-[#E5E7EB] p-3 space-y-2 text-xs">
                    <div className="font-bold text-gray-800 pb-1 border-b border-gray-100 flex justify-between">
                      <span>Status Stok Produk Terkini</span>
                      <span className="text-gray-500">Stock Movement Otomatis</span>
                    </div>
                    <div className="divide-y divide-gray-100 font-mono">
                      <div className="py-1.5 flex justify-between items-center">
                        <div>
                          <span className="font-bold text-[#111827]">Indomie Rasa Ayam Bawang</span>
                          <span className="text-gray-400 text-[10px] block">SKU-IND-01 | Gudang Utama</span>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[11px] font-bold">128 Sachet (Aman)</span>
                      </div>
                      <div className="py-1.5 flex justify-between items-center">
                        <div>
                          <span className="font-bold text-[#111827]">Aqua Galon 19L</span>
                          <span className="text-gray-400 text-[10px] block">SKU-AQU-02 | Gudang Utama</span>
                        </div>
                        <span className="bg-amber-100 text-amber-800 px-2 py-0.5 text-[11px] font-bold">4 Galon (Menipis)</span>
                      </div>
                      <div className="py-1.5 flex justify-between items-center">
                        <div>
                          <span className="font-bold text-[#111827]">Kecap Manis 550ml</span>
                          <span className="text-gray-400 text-[10px] block">SKU-KCP-05 | Rak Depan</span>
                        </div>
                        <span className="bg-red-100 text-red-800 px-2 py-0.5 text-[11px] font-bold">0 Pouch (Habis)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'finance' && (
                  <div className="border border-[#E5E7EB] p-3 space-y-2 text-xs">
                    <div className="font-bold text-gray-800 pb-1 border-b border-gray-100 flex justify-between">
                      <span>Laba Rugi Otomatis (Double Entry)</span>
                      <span className="text-emerald-600 font-mono">Journal Posted</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 font-mono">
                      <div className="p-2 border border-gray-100 bg-gray-50">
                        <span className="text-gray-500 text-[11px] block">Revenue</span>
                        <span className="font-bold text-sm text-[#111827]">Rp 8.450.000</span>
                      </div>
                      <div className="p-2 border border-gray-100 bg-gray-50">
                        <span className="text-gray-500 text-[11px] block">HPP (COGS)</span>
                        <span className="font-bold text-sm text-gray-700">Rp 6.100.000</span>
                      </div>
                      <div className="p-2 border border-gray-100 bg-emerald-50">
                        <span className="text-emerald-800 text-[11px] block">Gross Profit</span>
                        <span className="font-bold text-sm text-emerald-700">Rp 2.350.000</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer status bar in UI */}
                <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>Supabase PostgreSQL + RLS Aktif</span>
                  <span className="text-[#FF7A00] font-semibold">Semua modul tersinkron</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
