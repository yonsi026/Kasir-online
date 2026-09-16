import React, { useState } from 'react';
import { 
  FileText, 
  TrendingUp, 
  Scale, 
  ArrowUpRight, 
  Download, 
  Printer, 
  FileSpreadsheet, 
  Check,
  Edit3,
  Store,
  MapPin
} from 'lucide-react';
import { downloadBusinessExcelReport } from '../utils/excelExport';
import { useBusinessProfile } from '../utils/businessConfig';
import { PdfReportModal } from './PdfReportModal';
import { ThermalReceiptModal } from './ThermalReceiptModal';
import { EditBusinessProfileModal } from './EditBusinessProfileModal';

export const FinancialReportingSection: React.FC = () => {
  const { profile } = useBusinessProfile();
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isThermalOpen, setIsThermalOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [editTab, setEditTab] = useState<'store' | 'pdf_kop'>('store');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleExportExcel = () => {
    try {
      const res = downloadBusinessExcelReport({
        businessName: profile.businessName,
        period: profile.period,
        preparedBy: profile.preparedBy,
      });
      setToastMsg(`File ${res.filename} berhasil diunduh ke komputer Anda.`);
      setTimeout(() => setToastMsg(null), 4000);
    } catch {
      setToastMsg('Gagal mengekspor file Excel.');
    }
  };

  const openEditor = (tab: 'store' | 'pdf_kop') => {
    setEditTab(tab);
    setIsEditProfileOpen(true);
  };

  return (
    <section id="laporan" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 08. LAPORAN KEUANGAN OTOMATIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Tahu angka bisnis Anda, bukan sekadar jumlah transaksi.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Mengetahui omzet besar belum tentu menjamin bisnis sehat. Kasir Online menyajikan 3 laporan standar akuntansi profesional yang dapat langsung diekspor ke Excel, PDF, atau dicetak struk thermal.
          </p>
        </div>

        {/* Active Store Identity Bar with Edit Button */}
        <div className="mb-10 p-4 bg-[#F8FAFC] border-2 border-[#111827] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[4px_4px_0px_0px_#111827]">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#081A33] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
              <Store className="w-5 h-5 text-[#FF7A00]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase bg-amber-100 text-amber-900 px-1.5 py-0.5 border border-amber-300">
                  Entitas Usaha Terdaftar
                </span>
                <span className="text-xs font-mono text-gray-500">
                  Periode: {profile.period}
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
              <span>Edit Nama & Alamat Toko</span>
            </button>
            <button
              onClick={() => openEditor('pdf_kop')}
              className="px-3 py-2 bg-[#081A33] hover:bg-[#0E2748] text-white text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#FF7A00] transition-all active:translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Edit Teks Kop PDF</span>
            </button>
          </div>
        </div>

        {toastMsg && (
          <div className="mb-8 p-4 bg-emerald-50 border-2 border-emerald-400 text-emerald-900 text-xs font-mono flex items-center justify-between shadow-[4px_4px_0px_0px_#047857]">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>{toastMsg}</span>
            </div>
            <span className="text-[11px] font-bold text-emerald-700">✓ Berhasil</span>
          </div>
        )}

        {/* 3 Clean Editorial Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
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

        {/* Quick Export Bar */}
        <div className="p-6 bg-[#081A33] border-2 border-[#111827] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-[6px_6px_0px_0px_#FF7A00]">
          <div>
            <div className="flex items-center gap-2 text-[#FF7A00] font-mono text-xs font-bold uppercase mb-1">
              <span>// PUSAT EKSPOR DATA REAL-TIME</span>
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold tracking-tight">
              Butuh laporan dalam format lain sekarang?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Tersedia ekspor Excel multi-sheet, cetak dokumen PDF resmi bertanda tangan, dan struk thermal kasir.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openEditor('pdf_kop')}
              className="bg-[#0E2748] hover:bg-[#153b6c] text-[#FF7A00] hover:text-white border border-[#FF7A00]/60 text-xs font-mono font-bold px-3.5 py-2.5 flex items-center gap-2 cursor-pointer transition-colors"
              title="Atur teks kop resmi PDF dan nama toko"
            >
              <Edit3 className="w-4 h-4" />
              <span>Atur Identitas & Kop PDF</span>
            </button>

            <button
              onClick={handleExportExcel}
              className="bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-400 text-xs font-mono font-bold px-3.5 py-2.5 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>Unduh Excel (.xlsx)</span>
            </button>

            <button
              onClick={() => setIsPdfOpen(true)}
              className="bg-white hover:bg-red-50 text-red-900 border border-red-400 text-xs font-mono font-bold px-3.5 py-2.5 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <FileText className="w-4 h-4 text-red-600" />
              <span>Pratinjau PDF</span>
            </button>

            <button
              onClick={() => setIsThermalOpen(true)}
              className="bg-[#FF7A00] hover:bg-[#e66e00] text-white text-xs font-mono font-bold px-3.5 py-2.5 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Struk Thermal</span>
            </button>
          </div>
        </div>

      </div>

      {/* Modals */}
      <PdfReportModal isOpen={isPdfOpen} onClose={() => setIsPdfOpen(false)} />
      <ThermalReceiptModal isOpen={isThermalOpen} onClose={() => setIsThermalOpen(false)} />
      <EditBusinessProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        defaultTab={editTab}
      />
    </section>
  );
};
