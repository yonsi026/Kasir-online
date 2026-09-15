import React, { useState } from 'react';
import { Wifi, WifiOff, RefreshCw, CheckCircle2, Clock, AlertTriangle, ArrowRight, Database } from 'lucide-react';

export const OfflineSection: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [syncState, setSyncState] = useState<'PENDING' | 'SYNCING' | 'SYNCED'>('PENDING');

  const handleToggleConnection = () => {
    if (!isOnline) {
      setIsOnline(true);
      setSyncState('SYNCING');
      setTimeout(() => {
        setSyncState('SYNCED');
      }, 1400);
    } else {
      setIsOnline(false);
      setSyncState('PENDING');
    }
  };

  const statusIndicators = [
    { label: 'PENDING', desc: 'Transaksi tersimpan di IndexedDB lokal', color: 'bg-amber-500' },
    { label: 'SYNCING', desc: 'Antrean sedang dikirim ke Supabase', color: 'bg-blue-500' },
    { label: 'SYNCED', desc: 'Terkonfirmasi aman oleh server', color: 'bg-emerald-500' },
    { label: 'FAILED', desc: 'Gagal jaringan, dijadwal ulang otomatis', color: 'bg-red-500' },
    { label: 'CONFLICT', desc: 'Validasi stok server-authoritative', color: 'bg-purple-500' },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 05. RESILIENSI JARINGAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Internet bermasalah? Transaksi tetap berjalan.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            POS dirancang untuk tetap dapat digunakan saat koneksi internet terputus. Transaksi disimpan secara lokal dan akan disinkronkan ketika koneksi kembali tersedia.
          </p>
        </div>

        {/* Architecture & Live Interactive Simulation Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Swiss Architecture Flow Diagram */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Online Diagram Box */}
            <div className="border border-[#111827] bg-white p-6 shadow-[4px_4px_0px_0px_#111827]">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB] mb-4">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-emerald-600" />
                  <span className="font-extrabold text-sm text-[#111827]">
                    KONDISI NORMAL (ONLINE)
                  </span>
                </div>
                <span className="text-[11px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 border border-emerald-200">
                  Latensi Rendah
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="px-3 py-2 bg-gray-100 border border-gray-300 font-bold">
                  POS KASIR
                </span>
                <span className="text-gray-400">→</span>
                <span className="px-3 py-2 bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
                  SUPABASE POSTGRESQL + RLS
                </span>
                <span className="text-gray-400">→</span>
                <span className="px-3 py-2 bg-gray-100 border border-gray-300 font-bold">
                  LAPORAN REAL-TIME
                </span>
              </div>
            </div>

            {/* Offline Diagram Box */}
            <div className="border border-[#111827] bg-white p-6 shadow-[4px_4px_0px_0px_#FF7A00]">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB] mb-4">
                <div className="flex items-center gap-2">
                  <WifiOff className="w-4 h-4 text-[#FF7A00]" />
                  <span className="font-extrabold text-sm text-[#111827]">
                    KONDISI OFFLINE (INTERNET TERPUTUS)
                  </span>
                </div>
                <span className="text-[11px] font-mono bg-orange-50 text-[#FF7A00] px-2 py-0.5 border border-orange-200">
                  Local-First Engine
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1.5 bg-gray-100 border border-gray-300 font-bold">
                    POS KASIR
                  </span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-300 font-bold">
                    LOCAL DATABASE (IndexedDB)
                  </span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1.5 bg-purple-50 text-purple-900 border border-purple-300 font-bold">
                    SYNC QUEUE (Idempotency Key)
                  </span>
                </div>

                <div className="pt-2 flex items-center gap-2 text-gray-500">
                  <div className="w-4 h-0.5 bg-gray-300" />
                  <span className="text-[11px]">Ketika koneksi kembali menyala:</span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1.5 bg-blue-50 text-blue-900 border border-blue-300 font-bold">
                    SYNC ENGINE OTOMATIS
                  </span>
                  <span className="text-gray-400">→</span>
                  <span className="px-3 py-1.5 bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
                    ATOMIC MERGE KE DATABASE
                  </span>
                </div>
              </div>
            </div>

            {/* Clarification note per master prompt */}
            <p className="text-xs text-gray-500 italic border-l-2 border-gray-300 pl-3">
              Catatan Arsitektur: Mode offline difokuskan secara khusus untuk kontinuitas kasir (POS transaksi cepat tanpa tertunda). Fitur konfigurasi pusat & manajemen akun disinkronkan saat tersambung kembali.
            </p>

          </div>

          {/* Right Column: Interactive Offline Simulator & Indicators */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Control Widget */}
            <div className="border border-[#111827] bg-white p-6 shadow-[4px_4px_0px_0px_#111827]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase font-bold text-gray-500">
                  Simulasi Pengujian Jaringan
                </span>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 ${
                  isOnline ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {isOnline ? 'ONLINE' : 'OFFLINE'}
                </span>
              </div>

              <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] mb-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-600">Status Sync Queue:</span>
                  <span className={`font-bold px-2 py-0.5 ${
                    syncState === 'SYNCED' ? 'bg-emerald-500 text-white' :
                    syncState === 'SYNCING' ? 'bg-blue-500 text-white' : 'bg-amber-500 text-white'
                  }`}>
                    ● {syncState}
                  </span>
                </div>
                <div className="text-xs text-gray-700">
                  {syncState === 'PENDING' && '3 Transaksi offline tersimpan aman di peramban lokal. Kasir tetap mencetak struk dengan normal.'}
                  {syncState === 'SYNCING' && 'Koneksi kembali terdeteksi. Memvalidasi nomor invoice & sinkronisasi data transaksi...'}
                  {syncState === 'SYNCED' && 'Semua transaksi offline berhasil tercatat di database cloud tanpa ada data yang terduplikasi.'}
                </div>
              </div>

              <button
                onClick={handleToggleConnection}
                className={`w-full py-3 text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                  isOnline
                    ? 'bg-gray-100 text-[#111827] hover:bg-gray-200 border border-[#111827]'
                    : 'bg-[#FF7A00] text-white hover:bg-[#E56E00]'
                }`}
              >
                {isOnline ? (
                  <>
                    <WifiOff className="w-4 h-4" />
                    <span>Uji Putuskan Koneksi (Offline)</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    <span>Uji Sambungkan Internet (Sync Now)</span>
                  </>
                )}
              </button>
            </div>

            {/* Status Indicators List */}
            <div className="border border-[#E5E7EB] bg-white p-5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-600 mb-3">
                Status Indikator Sinkronisasi
              </h4>
              <div className="space-y-2.5 text-xs">
                {statusIndicators.map((s) => (
                  <div key={s.label} className="flex items-start gap-2.5 pb-2 border-b border-gray-50 last:border-0 last:pb-0">
                    <span className={`w-2 h-2 ${s.color} rounded-full mt-1 flex-shrink-0`} />
                    <div>
                      <span className="font-mono font-bold text-[#111827] mr-2">{s.label}</span>
                      <span className="text-gray-500">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
