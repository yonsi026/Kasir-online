import React, { useState, useEffect } from 'react';
import { 
  X, 
  Store, 
  FileText, 
  Save, 
  RotateCcw, 
  Check, 
  Sparkles, 
  Calendar, 
  Building2, 
  MapPin, 
  Phone, 
  FileCheck2, 
  UserCheck, 
  FileSpreadsheet,
  Eye
} from 'lucide-react';
import { 
  BusinessProfile, 
  DEFAULT_BUSINESS_PROFILE, 
  useBusinessProfile 
} from '../utils/businessConfig';

interface EditBusinessProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'store' | 'pdf_kop';
}

export const EditBusinessProfileModal: React.FC<EditBusinessProfileModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'store',
}) => {
  const { profile, update, reset } = useBusinessProfile();
  const [activeTab, setActiveTab] = useState<'store' | 'pdf_kop'>(defaultTab);
  const [formData, setFormData] = useState<BusinessProfile>(profile);
  const [saveToast, setSaveToast] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setFormData(profile);
      setActiveTab(defaultTab);
    }
  }, [isOpen, profile, defaultTab]);

  if (!isOpen) return null;

  const handleChange = (field: keyof BusinessProfile, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    update(formData);
    setSaveToast('Identitas toko & kop PDF berhasil disimpan!');
    setTimeout(() => {
      setSaveToast(null);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    if (confirm('Kembalikan nama toko, alamat, dan teks kop PDF ke pengaturan awal pabrikan?')) {
      reset();
      setFormData(DEFAULT_BUSINESS_PROFILE);
      setSaveToast('Pengaturan telah direset ke default sistem.');
      setTimeout(() => setSaveToast(null), 3000);
    }
  };

  const applyTodayDate = () => {
    const today = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    setFormData((prev) => ({
      ...prev,
      pdfPrintDate: today,
    }));
  };

  const generateNewDocRef = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const year = new Date().getFullYear();
    setFormData((prev) => ({
      ...prev,
      pdfDocRef: `Doc Ref: KSR-RPT-${year}-${randomNum}`,
    }));
  };

  // Preset Configurations for PDF Kop
  const applyPreset = (presetType: 'standard' | 'white_label' | 'tax_spt' | 'internal_audit') => {
    if (presetType === 'standard') {
      setFormData((prev) => ({
        ...prev,
        pdfHeaderTitle: 'KASIR ONLINE',
        pdfHeaderSubtitle1: 'SISTEM INTEGRASI KASIR POS & AKUNTANSI GANDA RESMI',
        pdfHeaderSubtitle2: 'Standard SAK EMKM Indonesia • Standar Keuangan Terverifikasi',
        pdfDocTag: 'DOKUMEN RESMI USAHA',
        pdfDocRef: `Doc Ref: KSR-RPT-${new Date().getFullYear()}-0942`,
      }));
    } else if (presetType === 'white_label') {
      setFormData((prev) => ({
        ...prev,
        pdfHeaderTitle: prev.businessName ? prev.businessName.toUpperCase() : 'KOP USAHA PRIBADI',
        pdfHeaderSubtitle1: 'LAPORAN KEUANGAN & PEMBUKUAN RESMI ENTITAS',
        pdfHeaderSubtitle2: 'Standar Akuntansi Keuangan Entitas Mikro, Kecil, dan Menengah (SAK EMKM)',
        pdfDocTag: 'DOKUMEN RESMI USAHA',
        pdfDocRef: `Doc Ref: FIN-${new Date().getFullYear()}/0942`,
      }));
    } else if (presetType === 'tax_spt') {
      setFormData((prev) => ({
        ...prev,
        pdfHeaderTitle: prev.businessName ? prev.businessName.toUpperCase() : 'LAPORAN KEUANGAN RESMI',
        pdfHeaderSubtitle1: 'LAMPIRAN RESMI LAPORAN KEUANGAN SPT TAHUNAN WAJIB PAJAK',
        pdfHeaderSubtitle2: 'Berdasarkan Peraturan Pemerintah RI PP 55 / UU Harmonisasi Perpajakan',
        pdfDocTag: 'LAMPIRAN SPT PAJAK',
        pdfDocRef: `Doc Ref: SPT-KPP-${new Date().getFullYear()}/9801`,
      }));
    } else if (presetType === 'internal_audit') {
      setFormData((prev) => ({
        ...prev,
        pdfHeaderTitle: 'AUDIT & KONTROL INTERNAL KEUANGAN',
        pdfHeaderSubtitle1: `${prev.businessName.toUpperCase()} — DEWAN MANAJEMEN & DIREKSI`,
        pdfHeaderSubtitle2: 'Verifikasi Sistem Kasir POS Berimbang Jurnal Otomatis',
        pdfDocTag: 'RAHASIA / INTERNAL',
        pdfDocRef: `Doc Ref: AUDIT-${new Date().getFullYear()}/CONFIDENTIAL`,
      }));
    }
  };

  return (
    <div className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-[#081A33] border-2 border-[#111827] text-white max-w-3xl w-full p-4 sm:p-6 shadow-[8px_8px_0px_0px_#FF7A00] relative max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 flex-shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF7A00] font-bold uppercase mb-1">
              <Store className="w-3.5 h-3.5" />
              <span>PENGATURAN IDENTITAS TOKO & KOP DOKUMEN CETAK</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Edit Identitas Toko & Teks Kop Laporan
            </h2>
            <p className="text-xs text-gray-300 mt-0.5">
              Ubah nama toko, alamat, dan kustomisasi seluruh teks header pada saat cetak PDF atau struk thermal.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-white/20 hover:border-white text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="py-3 border-b border-white/10 flex items-center justify-between flex-shrink-0">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('store')}
              className={`px-3.5 py-2 text-xs font-mono font-bold flex items-center gap-2 border transition-colors cursor-pointer ${
                activeTab === 'store'
                  ? 'bg-[#FF7A00] text-white border-[#FF7A00]'
                  : 'bg-[#0E2748] text-gray-300 border-white/10 hover:text-white'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>1. Identitas & Alamat Toko</span>
            </button>

            <button
              onClick={() => setActiveTab('pdf_kop')}
              className={`px-3.5 py-2 text-xs font-mono font-bold flex items-center gap-2 border transition-colors cursor-pointer ${
                activeTab === 'pdf_kop'
                  ? 'bg-[#FF7A00] text-white border-[#FF7A00]'
                  : 'bg-[#0E2748] text-gray-300 border-white/10 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>2. Kustomisasi Teks Kop PDF</span>
            </button>
          </div>

          <button
            onClick={handleReset}
            className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-400 font-mono transition-colors cursor-pointer"
            title="Reset ke pengaturan baku"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Standar</span>
          </button>
        </div>

        {saveToast && (
          <div className="my-2 p-2.5 bg-emerald-900/60 border border-emerald-500 text-emerald-200 text-xs font-mono flex items-center justify-between animate-in fade-in">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{saveToast}</span>
            </div>
            <span className="text-[10px] text-emerald-300">Tersimpan di sistem</span>
          </div>
        )}

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-6 pr-1">
          
          {/* TAB 1: IDENTITAS TOKO & ALAMAT */}
          {activeTab === 'store' && (
            <div className="space-y-4">
              <div className="p-3 bg-[#0E2748] border border-white/10 text-xs text-gray-300 flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span>
                  Informasi di bawah ini akan tercantum di kop laporan keuangan resmi (PDF), berkas Excel (.xlsx), dan kepala struk printer kasir (Thermal 58/80mm).
                </span>
              </div>

              {/* Nama Toko */}
              <div>
                <label className="block text-xs font-mono font-bold text-gray-200 uppercase mb-1.5">
                  Nama Toko / Nama Usaha *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleChange('businessName', e.target.value)}
                    placeholder="Contoh: Toko Berkah Sejahtera"
                    className="w-full bg-[#051122] border border-white/20 px-3 py-2.5 text-sm text-white font-sans focus:border-[#FF7A00] focus:outline-none"
                    required
                  />
                </div>
                <p className="text-[11px] text-gray-400 mt-1">
                  Nama bisnis yang akan muncul di nota kasir dan dokumen resmi keuangan.
                </p>
              </div>

              {/* Alamat Toko */}
              <div>
                <label className="block text-xs font-mono font-bold text-gray-200 uppercase mb-1.5">
                  Alamat Lengkap Toko / Usaha *
                </label>
                <textarea
                  rows={2}
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  placeholder="Contoh: Ruko Sentra Niaga Blok B-12, Jl. Sudirman No. 88, Jakarta Pusat"
                  className="w-full bg-[#051122] border border-white/20 px-3 py-2 text-sm text-white font-sans focus:border-[#FF7A00] focus:outline-none"
                  required
                />
              </div>

              {/* Grid 2 Column: Telepon & NPWP */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-200 uppercase mb-1.5">
                    No. Telepon / WhatsApp
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="Contoh: 0812-3456-7890"
                    className="w-full bg-[#051122] border border-white/20 px-3 py-2 text-sm text-white font-mono focus:border-[#FF7A00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-200 uppercase mb-1.5">
                    NPWP Badan / Orang Pribadi
                  </label>
                  <input
                    type="text"
                    value={formData.npwp}
                    onChange={(e) => handleChange('npwp', e.target.value)}
                    placeholder="Contoh: 81.293.441.9-012.000"
                    className="w-full bg-[#051122] border border-white/20 px-3 py-2 text-sm text-white font-mono focus:border-[#FF7A00] focus:outline-none"
                  />
                </div>
              </div>

              {/* Grid 2 Column: Pemilik & Akuntan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-200 uppercase mb-1.5">
                    Nama Pemilik Usaha (Owner)
                  </label>
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => handleChange('ownerName', e.target.value)}
                    placeholder="Contoh: Bpk. Hendra Kurniawan"
                    className="w-full bg-[#051122] border border-white/20 px-3 py-2 text-sm text-white font-sans focus:border-[#FF7A00] focus:outline-none"
                  />
                  <span className="text-[10px] text-gray-400">Tercetak di kolom tanda tangan kanan PDF</span>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-200 uppercase mb-1.5">
                    Disusun Oleh (Staff Akuntansi / Admin)
                  </label>
                  <input
                    type="text"
                    value={formData.preparedBy}
                    onChange={(e) => handleChange('preparedBy', e.target.value)}
                    placeholder="Contoh: Siti Rahma, A.Md.Ak."
                    className="w-full bg-[#051122] border border-white/20 px-3 py-2 text-sm text-white font-sans focus:border-[#FF7A00] focus:outline-none"
                  />
                  <span className="text-[10px] text-gray-400">Tercetak di kolom tanda tangan kiri PDF</span>
                </div>
              </div>

              {/* Periode Laporan */}
              <div>
                <label className="block text-xs font-mono font-bold text-gray-200 uppercase mb-1.5">
                  Periode Pelaporan Default
                </label>
                <input
                  type="text"
                  value={formData.period}
                  onChange={(e) => handleChange('period', e.target.value)}
                  placeholder="Contoh: September 2026 atau Triwulan III 2026"
                  className="w-full bg-[#051122] border border-white/20 px-3 py-2 text-sm text-white font-sans focus:border-[#FF7A00] focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* TAB 2: KUSTOMISASI TEKS KOP PDF */}
          {activeTab === 'pdf_kop' && (
            <div className="space-y-5">
              
              {/* Presets Bar */}
              <div>
                <span className="block text-xs font-mono text-gray-300 mb-2 font-bold uppercase">
                  PILIH TEMPLATE PRESET CEPAT:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => applyPreset('standard')}
                    className="p-2 bg-[#0E2748] hover:bg-[#143560] border border-white/20 text-left text-xs font-mono transition-colors cursor-pointer"
                  >
                    <span className="text-[#FF7A00] font-bold block">1. Standar Kasir</span>
                    <span className="text-[10px] text-gray-400">Kasir Online + SAK EMKM</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => applyPreset('white_label')}
                    className="p-2 bg-[#0E2748] hover:bg-[#143560] border border-emerald-500/50 text-left text-xs font-mono transition-colors cursor-pointer"
                  >
                    <span className="text-emerald-400 font-bold block">2. Kop Toko Sendiri</span>
                    <span className="text-[10px] text-gray-400">Nama toko jadi judul utama</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => applyPreset('tax_spt')}
                    className="p-2 bg-[#0E2748] hover:bg-[#143560] border border-amber-500/50 text-left text-xs font-mono transition-colors cursor-pointer"
                  >
                    <span className="text-amber-400 font-bold block">3. Format Pajak SPT</span>
                    <span className="text-[10px] text-gray-400">Lampiran resmi KPP/Pajak</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => applyPreset('internal_audit')}
                    className="p-2 bg-[#0E2748] hover:bg-[#143560] border border-purple-500/50 text-left text-xs font-mono transition-colors cursor-pointer"
                  >
                    <span className="text-purple-300 font-bold block">4. Audit Internal</span>
                    <span className="text-[10px] text-gray-400">Direksi & Manajemen</span>
                  </button>
                </div>
              </div>

              {/* LIVE PREVIEW BOX OF KOP */}
              <div className="border-2 border-[#FF7A00] bg-[#051122] p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#FF7A00] font-bold uppercase">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Pratinjau Langsung Header Banner PDF:</span>
                  </div>
                  <span className="text-[9px] font-mono text-gray-400">Akan dicetak persis seperti ini</span>
                </div>

                <div className="bg-[#081A33] border border-white/20 p-3 sm:p-4 text-white relative">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-white tracking-wide">
                        {formData.pdfHeaderTitle || 'KASIR ONLINE'}
                      </h4>
                      <p className="text-[10px] text-[#C8D2E1] font-mono leading-tight">
                        {formData.pdfHeaderSubtitle1 || 'SISTEM INTEGRASI KASIR POS & AKUNTANSI GANDA RESMI'}
                      </p>
                      <p className="text-[10px] text-[#C8D2E1] font-mono leading-tight">
                        {formData.pdfHeaderSubtitle2 || 'Standard SAK EMKM Indonesia • Standar Keuangan Terverifikasi'}
                      </p>
                    </div>

                    <div className="text-left sm:text-right font-mono text-[10px] border-t sm:border-t-0 pt-1.5 sm:pt-0">
                      <span className="font-bold text-[#FF7A00] block uppercase">
                        {formData.pdfDocTag || 'DOKUMEN RESMI USAHA'}
                      </span>
                      <span className="text-[#C8D2E1] block">
                        {formData.pdfDocRef || 'Doc Ref: KSR-RPT-2026-0942'}
                      </span>
                      <span className="text-[#C8D2E1] block">
                        {formData.pdfPrintDate ? `Tgl Cetak: ${formData.pdfPrintDate}` : 'Tgl Cetak: 15 September 2026'}
                      </span>
                    </div>
                  </div>
                  {/* Orange bottom accent line */}
                  <div className="h-1 bg-[#FF7A00] -mx-3 -mb-3 sm:-mx-4 sm:-mb-4 mt-3" />
                </div>
              </div>

              {/* Form Input fields for Kop */}
              <div className="space-y-3.5 font-mono text-xs">
                
                {/* 1. Judul Utama */}
                <div>
                  <label className="block text-gray-200 font-bold uppercase mb-1">
                    1. Judul Utama Kop Header (Default: KASIR ONLINE)
                  </label>
                  <input
                    type="text"
                    value={formData.pdfHeaderTitle}
                    onChange={(e) => handleChange('pdfHeaderTitle', e.target.value)}
                    placeholder="Contoh: KASIR ONLINE atau TOKO BERKAH SEJAHTERA"
                    className="w-full bg-[#051122] border border-white/20 px-3 py-2 text-white focus:border-[#FF7A00] focus:outline-none"
                  />
                </div>

                {/* 2. Subjudul Baris 1 */}
                <div>
                  <label className="block text-gray-200 font-bold uppercase mb-1">
                    2. Subjudul Baris 1 (Default: SISTEM INTEGRASI KASIR POS & AKUNTANSI GANDA RESMI)
                  </label>
                  <input
                    type="text"
                    value={formData.pdfHeaderSubtitle1}
                    onChange={(e) => handleChange('pdfHeaderSubtitle1', e.target.value)}
                    placeholder="Subjudul baris pertama"
                    className="w-full bg-[#051122] border border-white/20 px-3 py-2 text-white focus:border-[#FF7A00] focus:outline-none"
                  />
                </div>

                {/* 3. Subjudul Baris 2 */}
                <div>
                  <label className="block text-gray-200 font-bold uppercase mb-1">
                    3. Subjudul Baris 2 (Default: Standard SAK EMKM Indonesia • Standar Keuangan Terverifikasi)
                  </label>
                  <input
                    type="text"
                    value={formData.pdfHeaderSubtitle2}
                    onChange={(e) => handleChange('pdfHeaderSubtitle2', e.target.value)}
                    placeholder="Keterangan standar akuntansi atau nomor regulasi"
                    className="w-full bg-[#051122] border border-white/20 px-3 py-2 text-white focus:border-[#FF7A00] focus:outline-none"
                  />
                </div>

                {/* 4. Label Dokumen & Nomor Ref */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-200 font-bold uppercase mb-1">
                      4. Status / Label Dokumen (Kanan Atas)
                    </label>
                    <input
                      type="text"
                      value={formData.pdfDocTag}
                      onChange={(e) => handleChange('pdfDocTag', e.target.value)}
                      placeholder="Contoh: DOKUMEN RESMI USAHA"
                      className="w-full bg-[#051122] border border-white/20 px-3 py-2 text-white focus:border-[#FF7A00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-gray-200 font-bold uppercase">
                        5. Nomor Referensi Dokumen
                      </label>
                      <button
                        type="button"
                        onClick={generateNewDocRef}
                        className="text-[10px] text-[#FF7A00] hover:underline cursor-pointer"
                      >
                        [ Acak Ref ]
                      </button>
                    </div>
                    <input
                      type="text"
                      value={formData.pdfDocRef}
                      onChange={(e) => handleChange('pdfDocRef', e.target.value)}
                      placeholder="Contoh: Doc Ref: KSR-RPT-2026-0942"
                      className="w-full bg-[#051122] border border-white/20 px-3 py-2 text-white focus:border-[#FF7A00] focus:outline-none"
                    />
                  </div>
                </div>

                {/* 6. Tanggal Cetak */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-gray-200 font-bold uppercase">
                      6. Tanggal Cetak Dokumen (Default: 15 September 2026)
                    </label>
                    <button
                      type="button"
                      onClick={applyTodayDate}
                      className="text-[10px] text-[#FF7A00] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>Setel Hari Ini</span>
                    </button>
                  </div>
                  <input
                    type="text"
                    value={formData.pdfPrintDate}
                    onChange={(e) => handleChange('pdfPrintDate', e.target.value)}
                    placeholder="Contoh: 15 September 2026"
                    className="w-full bg-[#051122] border border-white/20 px-3 py-2 text-white focus:border-[#FF7A00] focus:outline-none"
                  />
                  <p className="text-[11px] text-gray-400 mt-1 font-sans">
                    Dapat diisi tanggal penutupan buku tertentu atau tanggal saat ini.
                  </p>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={handleReset}
            className="sm:hidden text-xs text-gray-400 hover:text-white font-mono cursor-pointer"
          >
            Reset Standar
          </button>

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-white/30 hover:border-white text-gray-200 hover:text-white text-xs font-mono font-bold transition-colors cursor-pointer"
            >
              Tutup / Batal
            </button>

            <button
              type="button"
              onClick={() => handleSave()}
              className="bg-[#FF7A00] hover:bg-[#e66e00] text-white text-xs font-mono font-bold px-5 py-2 transition-all flex items-center gap-1.5 cursor-pointer shadow-[3px_3px_0px_0px_#111827] active:translate-y-0.5"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
