import React, { useState } from 'react';
import { FileSpreadsheet, FileText, Printer, Check, Download } from 'lucide-react';

export const ReportExportSection: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleExport = (type: string) => {
    setDownloadNotice(`Simulasi ekspor ${type} berhasil disiapkan.`);
    setTimeout(() => setDownloadNotice(null), 3500);
  };

  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 12. EKSPOR & CETAK LAPORAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Data bisnis Anda, siap digunakan kapan saja.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Ekspor laporan bisnis ke Excel, PDF, atau cetak sesuai kebutuhan operasional Anda. Tanpa penguncian data (data lock-in).
          </p>
        </div>

        {downloadNotice && (
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>{downloadNotice}</span>
            </div>
            <span className="text-[11px] text-gray-500">Format standar Indonesia (IDR)</span>
          </div>
        )}

        {/* 3 Format Export Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Excel */}
          <div className="border border-[#111827] bg-[#F8FAFC] p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#111827] hover:bg-white transition-colors">
            <div>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center justify-center mb-6">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#111827] mb-2">
                Format Excel (.xlsx)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Laporan mentah & formula kalkulasi terstruktur rapi untuk analisa mendalam bersama akuntan atau audit pajak.
              </p>
              <ul className="text-xs text-gray-500 font-mono space-y-1 mb-6">
                <li>• Multi-sheet (Header, Tabel, Subtotal)</li>
                <li>• Currency format IDR bawaan</li>
              </ul>
            </div>

            <button
              onClick={() => handleExport('Excel')}
              className="w-full border border-[#111827] hover:bg-[#111827] hover:text-white text-[#111827] font-bold text-xs py-3 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>[ Export Excel ]</span>
            </button>
          </div>

          {/* Card 2: PDF */}
          <div className="border border-[#111827] bg-[#F8FAFC] p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#111827] hover:bg-white transition-colors">
            <div>
              <div className="w-12 h-12 bg-red-100 text-red-800 border border-red-300 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#111827] mb-2">
                Dokumen PDF Siap Cetak
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Format dokumen resmi lengkap dengan logo usaha, stempel digital, tanda tangan prepared by, dan periode laporan A4/A5.
              </p>
              <ul className="text-xs text-gray-500 font-mono space-y-1 mb-6">
                <li>• Format standar perbankan / audit</li>
                <li>• Desain layout rapi beresolusi tinggi</li>
              </ul>
            </div>

            <button
              onClick={() => handleExport('PDF')}
              className="w-full border border-[#111827] hover:bg-[#111827] hover:text-white text-[#111827] font-bold text-xs py-3 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>[ Export PDF ]</span>
            </button>
          </div>

          {/* Card 3: Thermal Print */}
          <div className="border border-[#111827] bg-[#F8FAFC] p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#111827] hover:bg-white transition-colors">
            <div>
              <div className="w-12 h-12 bg-orange-100 text-[#FF7A00] border border-orange-300 flex items-center justify-center mb-6">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#111827] mb-2">
                Struk Thermal & Bluetooth
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Kompatibel langsung dengan printer thermal 58mm & 80mm via Bluetooth, USB, maupun kabel LAN tanpa instalasi rumit.
              </p>
              <ul className="text-xs text-gray-500 font-mono space-y-1 mb-6">
                <li>• Struk belanja kasir instan</li>
                <li>• Rekap shift kasir & closing harian</li>
              </ul>
            </div>

            <button
              onClick={() => handleExport('Struk Kasir')}
              className="w-full border border-[#111827] hover:bg-[#111827] hover:text-white text-[#111827] font-bold text-xs py-3 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>[ Print Struk ]</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
