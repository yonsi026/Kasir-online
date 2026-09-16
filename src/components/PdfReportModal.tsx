import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Check, 
  FileText, 
  Building2, 
  Calendar, 
  ShieldCheck,
  Edit3,
  Store,
  Sparkles
} from 'lucide-react';
import { generateAndDownloadPdfReport } from '../utils/pdfExport';
import { useBusinessProfile } from '../utils/businessConfig';
import { EditBusinessProfileModal } from './EditBusinessProfileModal';

interface PdfReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ReportType = 'laba_rugi' | 'neraca' | 'arus_kas';

export const PdfReportModal: React.FC<PdfReportModalProps> = ({ isOpen, onClose }) => {
  const { profile } = useBusinessProfile();
  const [activeReport, setActiveReport] = useState<ReportType>('laba_rugi');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [editDefaultTab, setEditDefaultTab] = useState<'store' | 'pdf_kop'>('store');

  if (!isOpen) return null;

  const handleDownload = () => {
    setIsGenerating(true);
    setDownloadSuccess(null);
    try {
      const res = generateAndDownloadPdfReport({
        reportType: activeReport,
        ...profile,
      });
      setIsGenerating(false);
      setDownloadSuccess(`File ${res.filename} berhasil diunduh ke perangkat Anda.`);
      setTimeout(() => setDownloadSuccess(null), 4000);
    } catch {
      setIsGenerating(false);
      setDownloadSuccess('Gagal membuat PDF. Coba kembali.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const openEdit = (tab: 'store' | 'pdf_kop') => {
    setEditDefaultTab(tab);
    setIsEditModalOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        <div className="bg-[#081A33] border-2 border-[#111827] text-white max-w-4xl w-full p-4 sm:p-6 shadow-[8px_8px_0px_0px_#FF7A00] relative max-h-[95vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header Bar */}
          <div className="flex items-start justify-between pb-4 border-b border-white/10 flex-shrink-0">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF7A00] font-bold uppercase mb-1">
                <FileText className="w-3.5 h-3.5" />
                <span>DOKUMEN PDF SIAP CETAK & AUDIT RESMI</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Pratinjau & Cetak Laporan Keuangan
              </h2>
              <p className="text-xs text-gray-300 mt-0.5">
                Format A4 baku dengan kop resmi dan identitas usaha kustomisasi penuh.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 border border-white/20 hover:border-white text-gray-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Action Controls & Report Selector Bar */}
          <div className="py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
            
            {/* Report Type Pills */}
            <div className="flex flex-wrap gap-1.5 bg-[#0e2748] p-1 border border-white/10">
              <button
                onClick={() => setActiveReport('laba_rugi')}
                className={`px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                  activeReport === 'laba_rugi'
                    ? 'bg-[#FF7A00] text-white font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Laba Rugi (P&L)
              </button>
              <button
                onClick={() => setActiveReport('neraca')}
                className={`px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                  activeReport === 'neraca'
                    ? 'bg-[#FF7A00] text-white font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Neraca Keuangan
              </button>
              <button
                onClick={() => setActiveReport('arus_kas')}
                className={`px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                  activeReport === 'arus_kas'
                    ? 'bg-[#FF7A00] text-white font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Arus Kas (Cash Flow)
              </button>
            </div>

            {/* Edit Profile & Kop Button + Download/Print */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => openEdit('store')}
                className="px-3 py-2 bg-[#0E2748] hover:bg-[#153b6c] border border-[#FF7A00]/70 text-[#FF7A00] hover:text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Edit nama toko, alamat, atau teks header kop PDF"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>[ ✏️ Edit Info Toko & Kop PDF ]</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-3.5 py-2 border border-white/30 hover:border-white text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak (Print)</span>
              </button>

              <button
                onClick={handleDownload}
                disabled={isGenerating}
                className="bg-[#FF7A00] hover:bg-[#e66e00] text-white text-xs font-mono font-bold px-4 py-2 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 active:translate-y-0.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isGenerating ? 'Menyiapkan PDF...' : 'Unduh File PDF (.pdf)'}</span>
              </button>
            </div>
          </div>

          {downloadSuccess && (
            <div className="my-2 p-2.5 bg-emerald-900/40 border border-emerald-500 text-emerald-200 text-xs font-mono flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{downloadSuccess}</span>
              </div>
              <span className="text-[10px] text-emerald-300">Tersimpan di folder Unduhan</span>
            </div>
          )}

          {/* Scrollable Document Preview Body */}
          <div className="flex-1 overflow-y-auto py-4 pr-1">
            <div className="bg-white text-[#111827] p-6 sm:p-10 border border-gray-300 shadow-md font-sans print:shadow-none print:p-0">
              
              {/* Top Navy Header Banner (Live representation of PDF export) */}
              <div className="bg-[#081A33] border-b-2 border-[#FF7A00] p-4 mb-6 text-white relative group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white tracking-wide">
                      {profile.pdfHeaderTitle || 'KASIR ONLINE'}
                    </h3>
                    <p className="text-xs text-[#C8D2E1] font-mono leading-tight">
                      {profile.pdfHeaderSubtitle1 || 'SISTEM INTEGRASI KASIR POS & AKUNTANSI GANDA RESMI'}
                    </p>
                    <p className="text-[11px] text-[#C8D2E1] font-mono leading-tight mt-0.5">
                      {profile.pdfHeaderSubtitle2 || 'Standard SAK EMKM Indonesia • Standar Keuangan Terverifikasi'}
                    </p>
                  </div>

                  <div className="text-left sm:text-right font-mono text-xs border-t sm:border-t-0 pt-2 sm:pt-0">
                    <span className="font-bold text-[#FF7A00] block uppercase">
                      {profile.pdfDocTag || 'DOKUMEN RESMI USAHA'}
                    </span>
                    <span className="text-[#C8D2E1] block">
                      {profile.pdfDocRef || 'Doc Ref: KSR-RPT-2026-0942'}
                    </span>
                    <span className="text-[#C8D2E1] block">
                      Tgl Cetak: {profile.pdfPrintDate || '15 September 2026'}
                    </span>
                  </div>
                </div>

                {/* Inline Quick Edit Trigger for Kop Banner */}
                <button
                  onClick={() => openEdit('pdf_kop')}
                  className="print:hidden absolute top-2 right-2 opacity-80 hover:opacity-100 bg-[#FF7A00] text-white text-[10px] font-mono font-bold px-2 py-1 flex items-center gap-1 cursor-pointer transition-all shadow-sm"
                  title="Klik untuk mengubah teks header/kop PDF ini"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>✏️ Edit Teks Kop</span>
                </button>
              </div>

              {/* Document Business Details Card (Store Name & Address) */}
              <div className="border border-gray-300 bg-[#F8FAFC] p-4 mb-6 relative group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#081A33] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                      {profile.businessName ? profile.businessName.substring(0, 2).toUpperCase() : 'KO'}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-[#111827] tracking-tight">
                        {profile.businessName || 'TOKO BERKAH SEJAHTERA'}
                      </h4>
                      <p className="text-xs text-gray-600 font-mono mt-0.5">
                        Alamat: {profile.address || 'Ruko Sentra Niaga Blok B-12, Jl. Sudirman No. 88, Jakarta Pusat'}
                      </p>
                      <p className="text-xs text-gray-500 font-mono">
                        NPWP: {profile.npwp || '81.293.441.9-012.000'} • NIB: {profile.nib || '912000412891'} • Telp: {profile.phone || '0812-3456-7890'}
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right font-mono text-xs text-gray-600 border-t sm:border-t-0 pt-2 sm:pt-0">
                    <div className="text-gray-500">Periode Laporan:</div>
                    <div className="font-bold text-[#111827]">{profile.period || 'September 2026'}</div>
                    <div className="text-[11px] text-gray-400">Mata Uang: IDR (Rupiah)</div>
                  </div>
                </div>

                {/* Inline Quick Edit Trigger for Store Name & Address */}
                <button
                  onClick={() => openEdit('store')}
                  className="print:hidden absolute top-2 right-2 opacity-80 hover:opacity-100 bg-white hover:bg-gray-100 text-[#111827] border border-gray-300 text-[10px] font-mono font-bold px-2 py-1 flex items-center gap-1 cursor-pointer transition-all shadow-sm"
                  title="Klik untuk mengubah nama toko & alamat"
                >
                  <Edit3 className="w-3 h-3 text-[#FF7A00]" />
                  <span>✏️ Edit Nama & Alamat</span>
                </button>
              </div>

              {/* Document Title Banner */}
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] p-3.5 mb-6 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#FF7A00] uppercase block">
                    STANDAR AKUNTANSI KEUANGAN (SAK EMKM)
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#111827]">
                    {activeReport === 'laba_rugi' && 'LAPORAN LABA RUGI KOMPREHENSIF'}
                    {activeReport === 'neraca' && 'LAPORAN NERACA KEUANGAN (POSISI KEUANGAN)'}
                    {activeReport === 'arus_kas' && 'LAPORAN ARUS KAS OPERASIONAL (CASH FLOW)'}
                  </h4>
                </div>
                <div className="text-right font-mono text-xs">
                  <span className="text-gray-500 block text-[10px]">Mata Uang</span>
                  <span className="font-bold text-[#111827]">IDR (Rupiah)</span>
                </div>
              </div>

            {/* Content Table based on Active Report */}
            {activeReport === 'laba_rugi' && (
              <div className="space-y-4 font-mono text-xs">
                {/* Section A: Revenue */}
                <div>
                  <div className="bg-[#111827] text-white px-3 py-1.5 font-bold flex justify-between">
                    <span>I. PENDAPATAN PENJUALAN</span>
                    <span>JUMLAH</span>
                  </div>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1.5 px-3 text-gray-500 w-24">4-1001</td>
                        <td className="py-1.5 px-3 text-gray-800">Penjualan Kasir POS Retail</td>
                        <td className="py-1.5 px-3 text-right font-bold">Rp 84.500.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1.5 px-3 text-gray-500">4-1002</td>
                        <td className="py-1.5 px-3 text-gray-800">Penjualan Grosir Pelanggan Tetap</td>
                        <td className="py-1.5 px-3 text-right font-bold">Rp 16.800.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1.5 px-3 text-gray-500">4-1003</td>
                        <td className="py-1.5 px-3 text-red-600">Potongan & Diskon Promosi Penjualan</td>
                        <td className="py-1.5 px-3 text-right font-bold text-red-600">(Rp 1.300.000)</td>
                      </tr>
                      <tr className="bg-gray-100 font-bold border-b-2 border-gray-300">
                        <td className="py-2 px-3" colSpan={2}>TOTAL PENDAPATAN BERSIH</td>
                        <td className="py-2 px-3 text-right text-emerald-800">Rp 100.000.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Section B: HPP */}
                <div>
                  <div className="bg-[#111827] text-white px-3 py-1.5 font-bold flex justify-between">
                    <span>II. HARGA POKOK PENJUALAN (HPP)</span>
                    <span>JUMLAH</span>
                  </div>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1.5 px-3 text-gray-500 w-24">5-1001</td>
                        <td className="py-1.5 px-3 text-gray-800">Persediaan Awal Barang Dagang</td>
                        <td className="py-1.5 px-3 text-right">Rp 42.000.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1.5 px-3 text-gray-500">5-1002</td>
                        <td className="py-1.5 px-3 text-gray-800">Pembelian Bersih Periode Berjalan</td>
                        <td className="py-1.5 px-3 text-right">Rp 58.000.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1.5 px-3 text-gray-500">5-1003</td>
                        <td className="py-1.5 px-3 text-gray-800">Biaya Angkut Masuk Pembelian (Freight-In)</td>
                        <td className="py-1.5 px-3 text-right">Rp 1.500.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1.5 px-3 text-gray-500">5-1005</td>
                        <td className="py-1.5 px-3 text-gray-800">Persediaan Akhir Barang Dagang (Opname)</td>
                        <td className="py-1.5 px-3 text-right text-red-600">(Rp 36.500.000)</td>
                      </tr>
                      <tr className="bg-gray-100 font-bold border-b-2 border-gray-300">
                        <td className="py-2 px-3" colSpan={2}>TOTAL HARGA POKOK PENJUALAN (HPP)</td>
                        <td className="py-2 px-3 text-right text-gray-900">Rp 65.000.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Gross Profit Highlight */}
                <div className="p-3 bg-amber-50 border border-amber-300 flex justify-between items-center text-sm font-bold">
                  <span className="text-amber-900">LABA KOTOR (GROSS PROFIT)</span>
                  <span className="text-emerald-800 text-base">Rp 35.000.000</span>
                </div>

                {/* Section C: Expenses */}
                <div>
                  <div className="bg-[#111827] text-white px-3 py-1.5 font-bold flex justify-between">
                    <span>III. BEBAN OPERASIONAL USAHA</span>
                    <span>JUMLAH</span>
                  </div>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1.5 px-3 text-gray-500 w-24">6-1001</td>
                        <td className="py-1.5 px-3 text-gray-800">Beban Gaji Kasir & Staff Toko</td>
                        <td className="py-1.5 px-3 text-right">Rp 9.500.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1.5 px-3 text-gray-500">6-1002</td>
                        <td className="py-1.5 px-3 text-gray-800">Beban Listrik, Air & Internet</td>
                        <td className="py-1.5 px-3 text-right">Rp 2.400.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1.5 px-3 text-gray-500">6-1003</td>
                        <td className="py-1.5 px-3 text-gray-800">Beban Sewa Tempat Usaha</td>
                        <td className="py-1.5 px-3 text-right">Rp 3.000.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1.5 px-3 text-gray-500">6-1004</td>
                        <td className="py-1.5 px-3 text-gray-800">Beban Perlengkapan & Kertas Struk Thermal</td>
                        <td className="py-1.5 px-3 text-right">Rp 600.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1.5 px-3 text-gray-500">6-1005</td>
                        <td className="py-1.5 px-3 text-gray-800">Beban Pemeliharaan & Depresiasi POS</td>
                        <td className="py-1.5 px-3 text-right">Rp 1.500.000</td>
                      </tr>
                      <tr className="bg-gray-100 font-bold border-b-2 border-gray-300">
                        <td className="py-2 px-3" colSpan={2}>TOTAL BEBAN OPERASIONAL</td>
                        <td className="py-2 px-3 text-right text-gray-900">Rp 17.000.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Net Profit Summary */}
                <div className="p-4 bg-[#081A33] text-white flex justify-between items-center text-sm font-bold mt-4">
                  <div>
                    <span className="block text-xs text-gray-300 font-normal">HASIL AKHIR PERIODE BERJALAN</span>
                    <span className="text-sm font-extrabold text-white">LABA BERSIH USAHA (NET PROFIT)</span>
                  </div>
                  <span className="text-xl font-extrabold text-[#FF7A00]">Rp 18.000.000</span>
                </div>
              </div>
            )}

            {activeReport === 'neraca' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                {/* Aktiva */}
                <div className="border border-gray-200 p-3">
                  <div className="bg-[#111827] text-white px-2 py-1 font-bold mb-2">AKTIVA (ASET)</div>
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-gray-700">Kas di Laci Kasir</td>
                        <td className="py-1 text-right font-bold">Rp 5.250.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-gray-700">Bank BCA Operasional</td>
                        <td className="py-1 text-right font-bold">Rp 44.750.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-gray-700">Piutang Pelanggan</td>
                        <td className="py-1 text-right font-bold">Rp 12.000.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-gray-700">Persediaan Barang Dagang</td>
                        <td className="py-1 text-right font-bold">Rp 58.000.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-gray-700">Peralatan Kasir POS</td>
                        <td className="py-1 text-right font-bold">Rp 18.000.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-gray-700">Display Etalase & Rak</td>
                        <td className="py-1 text-right font-bold">Rp 17.000.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-red-600">Akumulasi Penyusutan</td>
                        <td className="py-1 text-right font-bold text-red-600">(Rp 5.000.000)</td>
                      </tr>
                      <tr className="bg-emerald-50 font-bold border-t-2 border-emerald-500">
                        <td className="py-2 text-emerald-900">TOTAL ASET (AKTIVA)</td>
                        <td className="py-2 text-right text-emerald-900 font-extrabold text-sm">Rp 150.000.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pasiva */}
                <div className="border border-gray-200 p-3">
                  <div className="bg-[#111827] text-white px-2 py-1 font-bold mb-2">PASIVA (KEWAJIBAN & EKUITAS)</div>
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-gray-700">Hutang Dagang Supplier</td>
                        <td className="py-1 text-right font-bold">Rp 38.000.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-gray-700">Beban Akrual Gaji</td>
                        <td className="py-1 text-right font-bold">Rp 7.500.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-gray-700">Hutang PPN Kasir</td>
                        <td className="py-1 text-right font-bold">Rp 4.500.000</td>
                      </tr>
                      <tr className="bg-gray-100 font-bold">
                        <td className="py-1">Total Kewajiban</td>
                        <td className="py-1 text-right">Rp 50.000.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-gray-700">Modal Disetor Pemilik</td>
                        <td className="py-1 text-right font-bold">Rp 82.000.000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-1 text-gray-700">Laba Periode Berjalan</td>
                        <td className="py-1 text-right font-bold text-emerald-700">Rp 18.000.000</td>
                      </tr>
                      <tr className="bg-gray-100 font-bold">
                        <td className="py-1">Total Ekuitas</td>
                        <td className="py-1 text-right">Rp 100.000.000</td>
                      </tr>
                      <tr className="bg-emerald-50 font-bold border-t-2 border-emerald-500">
                        <td className="py-2 text-emerald-900">TOTAL PASIVA</td>
                        <td className="py-2 text-right text-emerald-900 font-extrabold text-sm">Rp 150.000.000</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-3 p-1.5 bg-emerald-100 text-emerald-900 text-[11px] font-bold text-center border border-emerald-300">
                    STATUS: BALANCE / SEIMBANG (Selisih: Rp 0)
                  </div>
                </div>
              </div>
            )}

            {activeReport === 'arus_kas' && (
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <div className="bg-[#111827] text-white px-3 py-1.5 font-bold">ARUS KAS DARI AKTIVITAS OPERASIONAL</div>
                  <div className="p-3 border border-gray-200 space-y-1">
                    <div className="flex justify-between"><span>Penerimaan Kas dari Pelanggan Kasir</span><span className="font-bold">Rp 98.700.000</span></div>
                    <div className="flex justify-between text-red-600"><span>Pembayaran Kas ke Pemasok Barang</span><span className="font-bold">(Rp 56.500.000)</span></div>
                    <div className="flex justify-between text-red-600"><span>Pembayaran Kas untuk Beban Operasional</span><span className="font-bold">(Rp 17.200.000)</span></div>
                    <div className="flex justify-between font-bold pt-2 border-t border-gray-300 text-emerald-800">
                      <span>Arus Kas Bersih dari Aktivitas Operasi</span>
                      <span>+Rp 25.000.000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-[#111827] text-white px-3 py-1.5 font-bold">ARUS KAS DARI AKTIVITAS INVESTASI</div>
                  <div className="p-3 border border-gray-200 space-y-1">
                    <div className="flex justify-between text-red-600"><span>Pembelian Freezer & Barcode Hardware</span><span className="font-bold">(Rp 5.000.000)</span></div>
                    <div className="flex justify-between font-bold pt-2 border-t border-gray-300 text-red-700">
                      <span>Arus Kas Bersih dari Aktivitas Investasi</span>
                      <span>-Rp 5.000.000</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#081A33] text-white flex justify-between items-center text-sm font-bold">
                  <span>KENAIKAN BERSIH KAS (SURPLUS OPERASI)</span>
                  <span className="text-xl text-emerald-400 font-extrabold">+Rp 30.000.000</span>
                </div>
              </div>
            )}

            {/* Official Stamps & Signatures */}
            <div className="mt-8 pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* System Audit Stamp */}
              <div className="border-2 border-dashed border-[#FF7A00] p-3 text-center sm:text-left bg-orange-50/50">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF7A00] uppercase font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>TERVERIFIKASI SISTEM KASIR ONLINE</span>
                </div>
                <p className="text-[10px] text-gray-500 font-mono mt-1">
                  Semua transaksi telah disinkronkan ke buku besar ganda tanpa manipulasi angka.
                </p>
              </div>

              {/* Signatures */}
              <div className="flex items-center gap-12 font-mono text-xs">
                <div className="text-center">
                  <p className="text-gray-500 mb-10">Disusun Oleh (Akuntan)</p>
                  <p className="font-bold text-[#111827] underline">
                    {profile.preparedBy || 'Siti Rahma, A.Md.Ak.'}
                  </p>
                  <p className="text-[10px] text-gray-400">Head of Finance</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 mb-10">Disetujui Oleh (Owner)</p>
                  <p className="font-bold text-[#111827] underline">
                    {profile.ownerName || 'Bpk. Hendra Kurniawan'}
                  </p>
                  <p className="text-[10px] text-gray-400">Pemilik Usaha</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400 flex-shrink-0">
          <span>Standar SAK EMKM • Siap Print A4 / F4 / Legal</span>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white underline cursor-pointer"
          >
            Tutup Pratinjau
          </button>
        </div>

      </div>
    </div>

    {/* Dedicated Edit Modal */}
    <EditBusinessProfileModal
      isOpen={isEditModalOpen}
      onClose={() => setIsEditModalOpen(false)}
      defaultTab={editDefaultTab}
    />
  </>
  );
};
