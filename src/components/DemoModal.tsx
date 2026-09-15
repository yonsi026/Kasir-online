import React, { useState } from 'react';
import { X, Check, ArrowRight, Store, ShieldCheck } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('Toko Retail');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border-2 border-[#111827] text-[#111827] max-w-lg w-full p-8 shadow-[8px_8px_0px_0px_#111827] relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black p-1 cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 border-2 border-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#111827] tracking-tight">
              Permintaan Terkirim!
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
              Terima kasih, <strong>{ownerName || 'Bapak/Ibu'}</strong>. Tim Kasir Online akan menghubungi WhatsApp <strong>{phone}</strong> dalam waktu maksimal 1x24 jam kerja untuk menyiapkan workspace bisnis <strong>{businessName}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="bg-[#111827] text-white font-bold text-xs px-6 py-3 hover:bg-black cursor-pointer"
              >
                Selesai & Kembali ke Beranda
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#FF7A00]/10 text-[#FF7A00] text-[11px] font-mono font-bold uppercase mb-2">
                Pendaftaran & Konsultasi Sistem
              </div>
              <h3 className="text-2xl font-extrabold text-[#111827] tracking-tight">
                Mulai Gunakan Kasir Online
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Lengkapi data singkat usaha Anda di bawah ini untuk konsultasi alur pembukuan dan implementasi kasir.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-gray-700 uppercase block">
                  Nama Toko / Usaha *
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Contoh: Toko Berkah Utama, Kedai Kopi Senja"
                  className="w-full border border-[#E5E7EB] px-3.5 py-2.5 text-sm outline-none font-medium focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-gray-700 uppercase block">
                    Jenis Bisnis
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full border border-[#E5E7EB] px-3.5 py-2.5 text-sm outline-none bg-white font-medium focus:border-[#FF7A00]"
                  >
                    <option value="Toko Retail">Toko Retail</option>
                    <option value="Toko Kelontong">Toko Kelontong</option>
                    <option value="Warung Makan">Warung Makan</option>
                    <option value="Minimarket">Minimarket</option>
                    <option value="Distributor Kecil">Distributor Kecil</option>
                    <option value="Usaha Jasa & Bengkel">Usaha Jasa & Bengkel</option>
                    <option value="Cafe & Resto">Cafe & Resto</option>
                    <option value="UMKM Lainnya">UMKM Lainnya</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-gray-700 uppercase block">
                    Nama Pemilik / PIC *
                  </label>
                  <input
                    type="text"
                    required
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="Contoh: Ahmad Fauzi"
                    className="w-full border border-[#E5E7EB] px-3.5 py-2.5 text-sm outline-none font-medium focus:border-[#FF7A00]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-gray-700 uppercase block">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Contoh: 08123456789"
                  className="w-full border border-[#E5E7EB] px-3.5 py-2.5 text-sm outline-none font-medium focus:border-[#FF7A00]"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#FF7A00] hover:bg-[#E56E00] text-white font-extrabold text-base py-3.5 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:translate-y-0.5"
                >
                  <span>Mulai Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 font-mono pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Data bisnis Anda dilindungi & terisolasi aman</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
