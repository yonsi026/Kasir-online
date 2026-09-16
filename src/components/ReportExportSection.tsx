import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  FileText, 
  Printer, 
  Check, 
  Download, 
  ExternalLink, 
  Sparkles,
  Edit3,
  Store,
  MapPin
} from 'lucide-react';
import { downloadBusinessExcelReport } from '../utils/excelExport';
import { useBusinessProfile } from '../utils/businessConfig';
import { PdfReportModal } from './PdfReportModal';
import { ThermalReceiptModal } from './ThermalReceiptModal';
import { EditBusinessProfileModal } from './EditBusinessProfileModal';

export const ReportExportSection: React.FC = () => {
  const { profile } = useBusinessProfile();
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);
  const [isExportingExcel, setIsExportingExcel] = useState<boolean>(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [isThermalModalOpen, setIsThermalModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [editTab, setEditTab] = useState<'store' | 'pdf_kop'>('store');

  const handleExportExcel = () => {
    setIsExportingExcel(true);
    setDownloadNotice(null);
    try {
      const res = downloadBusinessExcelReport({
        businessName: profile.businessName,
        period: profile.period,
        preparedBy: profile.preparedBy,
      });
      setIsExportingExcel(false);
      setDownloadNotice(
        `File ${res.filename} berhasil diunduh! Berisi 4 sheet lengkap untuk ${profile.businessName}.`
      );
      setTimeout(() => setDownloadNotice(null), 5000);
    } catch {
      setIsExportingExcel(false);
      setDownloadNotice('Gagal mengekspor file Excel. Silakan coba kembali.');
    }
  };

  const openEditor = (tab: 'store' | 'pdf_kop') => {
    setEditTab(tab);
    setIsEditModalOpen(true);
  };

  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 12. EKSPOR & CETAK LAPORAN TERAKREDITASI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Data bisnis Anda, siap digunakan kapan saja.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Ekspor laporan bisnis ke Excel (.xlsx), dokumen resmi PDF siap cetak, atau struk kasir thermal 58mm/80mm via Bluetooth. Semua format telah aktif dan siap diunduh secara instan.
          </p>
        </div>

        {/* Active Business Entity Banner */}
        <div className="mb-10 p-4 bg-[#F8FAFC] border-2 border-[#111827] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[4px_4px_0px_0px_#111827]">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#081A33] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
              <Store className="w-5 h-5 text-[#FF7A00]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase bg-blue-100 text-blue-900 px-1.5 py-0.5 border border-blue-300">
                  Identitas Usaha Pada Dokumen
                </span>
                <span className="text-xs font-mono text-gray-500">
                  Ref: {profile.pdfDocRef}
                </span>
              </div>
              <h3 className="text-base font-extrabold text-[#111827] mt-0.5">
                {profile.businessName}
              </h3>
              <p className="text-xs text-gray-600 flex items-center gap-1 font-mono">
                <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                <span className="truncate max-w-xl">{profile.address}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
            <button
              onClick={() => openEditor('store')}
              className="px-3 py-2 bg-white hover:bg-gray-100 border border-[#111827] text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#111827] transition-all active:translate-y-0.5"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Edit Nama & Alamat</span>
            </button>
            <button
              onClick={() => openEditor('pdf_kop')}
              className="px-3 py-2 bg-[#081A33] hover:bg-[#0E2748] text-white text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#FF7A00] transition-all active:translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Edit Kop Laporan PDF</span>
            </button>
          </div>
        </div>

        {downloadNotice && (
          <div className="mb-8 p-4 bg-emerald-50 border-2 border-emerald-400 text-emerald-900 text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[4px_4px_0px_0px_#047857] animate-in fade-in duration-200">
            <div className="flex items-center gap-2.5">
              <Check className="w-5 h-5 text-emerald-700 flex-shrink-0" />
              <span className="font-semibold">{downloadNotice}</span>
            </div>
            <span className="text-[11px] text-emerald-700 font-bold uppercase whitespace-nowrap bg-emerald-100 px-2.5 py-1 border border-emerald-300">
              ✓ Terverifikasi IDR
            </span>
          </div>
        )}

        {/* 3 Active Format Export Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Excel */}
          <div className="border-2 border-[#111827] bg-[#F8FAFC] p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#111827] hover:bg-white transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 border-2 border-emerald-400 flex items-center justify-center">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 border border-emerald-300 uppercase">
                  Aktif • Multi-Sheet
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#111827] mb-2 tracking-tight">
                Format Excel (.xlsx)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                File spreadsheet siap olah dengan 4 lembar kerja (Laba Rugi, Neraca, Transaksi POS, dan Valuasi Stok FIFO) dengan format angka standar akuntansi.
              </p>

              <div className="p-3 bg-white border border-gray-200 mb-6 font-mono text-xs space-y-1.5 text-gray-600">
                <div className="flex justify-between text-[11px]">
                  <span>• Sheet 1: Laba Rugi P&L</span>
                  <span className="text-emerald-700 font-bold">Lengkap</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>• Sheet 2: Neraca Keuangan</span>
                  <span className="text-emerald-700 font-bold">Balance</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>• Sheet 3: Log Transaksi Kasir</span>
                  <span className="text-gray-500">8 Baris</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>• Sheet 4: Stok Opname FIFO</span>
                  <span className="text-gray-500">Valuasi Riil</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleExportExcel}
              disabled={isExportingExcel}
              className="w-full border-2 border-[#111827] bg-[#111827] hover:bg-emerald-700 hover:border-emerald-700 text-white font-bold text-xs py-3.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-[3px_3px_0px_0px_#FF7A00] active:translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>{isExportingExcel ? 'Membuat File Excel...' : '[ Unduh File Excel (.xlsx) ]'}</span>
            </button>
          </div>

          {/* Card 2: PDF */}
          <div className="border-2 border-[#111827] bg-[#F8FAFC] p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#111827] hover:bg-white transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-red-100 text-red-800 border-2 border-red-400 flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-red-100 text-red-800 px-2 py-0.5 border border-red-300 uppercase">
                  Aktif • Format A4/F4
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#111827] mb-2 tracking-tight">
                Dokumen PDF Siap Cetak
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Format dokumen resmi standar SAK EMKM lengkap dengan kop usaha, stempel digital terverifikasi, dan blok tanda tangan akuntan serta pemilik usaha.
              </p>

              <div className="p-3 bg-white border border-gray-200 mb-6 font-mono text-xs space-y-1.5 text-gray-600">
                <div className="flex justify-between text-[11px]">
                  <span>• Header Usaha & NPWP</span>
                  <span className="text-red-700 font-bold">Resmi</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>• Stempel Digital Audit</span>
                  <span className="text-emerald-700 font-bold">Terverifikasi</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>• Tanda Tangan Akuntan & Owner</span>
                  <span className="text-gray-500">Ada</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>• Siap Unduh & Print Dialog</span>
                  <span className="text-blue-700 font-bold">Direct PDF</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => openEditor('pdf_kop')}
                className="w-full text-xs font-mono font-bold text-gray-700 hover:text-[#FF7A00] flex items-center justify-center gap-1.5 py-2 border border-dashed border-gray-400 hover:border-[#FF7A00] transition-colors cursor-pointer bg-white"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>[ ✏️ Edit Info Toko & Teks Kop ]</span>
              </button>

              <button
                onClick={() => setIsPdfModalOpen(true)}
                className="w-full border-2 border-[#111827] bg-[#111827] hover:bg-red-700 hover:border-red-700 text-white font-bold text-xs py-3.5 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_0px_#FF7A00] active:translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>[ Buka Dokumen & Cetak PDF ]</span>
              </button>
            </div>
          </div>

          {/* Card 3: Thermal Print */}
          <div className="border-2 border-[#111827] bg-[#F8FAFC] p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_#111827] hover:bg-white transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-orange-100 text-[#FF7A00] border-2 border-orange-400 flex items-center justify-center">
                  <Printer className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-orange-100 text-[#FF7A00] px-2 py-0.5 border border-orange-300 uppercase">
                  Aktif • ESC/POS Ready
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#111827] mb-2 tracking-tight">
                Struk Thermal & Bluetooth
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Simulator cetak thermal dengan toggle lebar roll kertas 58mm & 80mm, pencarian printer Bluetooth otomatis, paper feed, dan ekspor raw ESC/POS text.
              </p>

              <div className="p-3 bg-white border border-gray-200 mb-6 font-mono text-xs space-y-1.5 text-gray-600">
                <div className="flex justify-between text-[11px]">
                  <span>• Struk Belanja & QRIS</span>
                  <span className="text-[#FF7A00] font-bold">Lengkap</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>• Rekap Shift Kasir (Z-Report)</span>
                  <span className="text-emerald-700 font-bold">Seimbang</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>• Ukuran 58mm & 80mm</span>
                  <span className="text-blue-700 font-bold">Dua Opsi</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>• Pindai Bluetooth & Feed</span>
                  <span className="text-gray-500">Tersedia</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsThermalModalOpen(true)}
              className="w-full border-2 border-[#111827] bg-[#111827] hover:bg-[#FF7A00] hover:border-[#FF7A00] text-white font-bold text-xs py-3.5 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_0px_#FF7A00] active:translate-y-0.5"
            >
              <Printer className="w-4 h-4" />
              <span>[ Buka Simulator & Cetak Struk ]</span>
            </button>
          </div>

        </div>

      </div>

      {/* PDF Document Preview & Export Modal */}
      <PdfReportModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* Thermal Receipt & Bluetooth Modal */}
      <ThermalReceiptModal
        isOpen={isThermalModalOpen}
        onClose={() => setIsThermalModalOpen(false)}
      />

      {/* Edit Business Profile & PDF Kop Modal */}
      <EditBusinessProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        defaultTab={editTab}
      />
    </section>
  );
};
