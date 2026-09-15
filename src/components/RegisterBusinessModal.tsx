import React, { useState } from 'react';
import {
  X,
  Store,
  User,
  Mail,
  Phone,
  Lock,
  MapPin,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
  Sparkles,
} from 'lucide-react';

interface RegisterBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export const RegisterBusinessModal: React.FC<RegisterBusinessModalProps> = ({
  isOpen,
  onClose,
  onSwitchToLogin,
}) => {
  // Form fields
  const [ownerName, setOwnerName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [businessCategory, setBusinessCategory] = useState('Retail & Minimarket');
  const [city, setCity] = useState('');
  const [branchCount, setBranchCount] = useState('1 Cabang (Tunggal)');
  const [agreed, setAgreed] = useState(true);

  // UI states
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('Konfirmasi password tidak cocok dengan password.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password minimal 6 karakter demi keamanan akun.');
      return;
    }

    if (!agreed) {
      setErrorMessage('Anda harus menyetujui Syarat & Ketentuan layanan.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API registration call to database / auth service
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#081A33] border-2 border-[#111827] text-white max-w-xl w-full p-6 sm:p-8 shadow-[8px_8px_0px_0px_#FF7A00] relative animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 cursor-pointer transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 bg-[#FF7A00]/20 border-2 border-[#FF7A00] rounded-full flex items-center justify-center mx-auto text-[#FF7A00]">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7A00] font-bold">
                // REGISTRASI BERHASIL
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Workspace Bisnis Siap Digunakan
              </h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Selamat datang, <strong>{ownerName}</strong>! Organisasi <strong>{businessName}</strong> telah berhasil didaftarkan ke sistem Kasir Online.
              </p>
            </div>

            {/* Registration Summary Box */}
            <div className="bg-white/5 border border-white/10 p-4 text-left font-mono text-xs space-y-2.5">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">ID WORKSPACE:</span>
                <span className="text-[#FF7A00] font-bold">KO-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">NAMA USAHA:</span>
                <span className="text-white font-bold">{businessName}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">EMAIL LOGIN:</span>
                <span className="text-white">{email}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">PERAN AKUN:</span>
                <span className="bg-[#FF7A00] text-white px-2 py-0.5 text-[10px] font-bold">OWNER (FULL ACCESS)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">STATUS PEMBUKUAN:</span>
                <span className="text-emerald-400 font-bold">DOUBLE-ENTRY AKTIF</span>
              </div>
            </div>

            {/* Quick Next Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-[#FF7A00] block mb-1">01. INVENTORY</span>
                <p className="text-xs text-gray-200">Tambahkan produk & atur stok awal toko Anda.</p>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-[#FF7A00] block mb-1">02. TERMINAL POS</span>
                <p className="text-xs text-gray-200">Mulai transaksi kasir online & offline instan.</p>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-[#FF7A00] block mb-1">03. BUKU BESAR</span>
                <p className="text-xs text-gray-200">Pantau laba rugi & arus kas real-time.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleResetAndClose}
                className="flex-1 bg-[#FF7A00] hover:bg-[#E56E00] text-white font-extrabold text-sm py-3.5 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:translate-y-0.5"
              >
                <span>BUKA DASHBOARD TOKO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onSwitchToLogin();
                }}
                className="border border-white/30 hover:border-white text-white font-semibold text-sm py-3.5 px-6 transition-colors"
              >
                Halaman Masuk
              </button>
            </div>
          </div>
        ) : (
          /* Registration Form */
          <div>
            {/* Header */}
            <div className="space-y-1 mb-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase mb-1">
                <div className="w-2.5 h-2.5 bg-[#FF7A00]" />
                <span>// FORM DAFTAR BISNIS BARU</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Buat Akun & Workspace Usaha
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                Kelola kasir, stok, hutang-piutang, dan pembukuan dalam satu akun terpadu.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 bg-red-950/80 border border-red-500 text-red-200 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Section 1: Profil Pemilik & Akun */}
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider pb-1 border-b border-white/10">
                01. Informasi Pemilik & Akses Akun
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 block">
                    NAMA LENGKAP OWNER *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="Contoh: Hendra Pratama"
                      className="w-full bg-white text-[#111827] text-xs sm:text-sm pl-9 pr-3 py-2.5 outline-none font-medium focus:ring-2 focus:ring-[#FF7A00]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 block">
                    WHATSAPP / NO. HP AKTIF *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Contoh: 08123456789"
                      className="w-full bg-white text-[#111827] text-xs sm:text-sm pl-9 pr-3 py-2.5 outline-none font-medium focus:ring-2 focus:ring-[#FF7A00]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-gray-300 block">
                  EMAIL BISNIS (UNTUK LOGIN OWNER) *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@tokobisnismu.com"
                    className="w-full bg-white text-[#111827] text-xs sm:text-sm pl-9 pr-3 py-2.5 outline-none font-medium focus:ring-2 focus:ring-[#FF7A00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 block">
                    KATA SANDI (MIN. 6 KARAKTER) *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-white text-[#111827] text-xs sm:text-sm pl-9 pr-9 py-2.5 outline-none font-medium focus:ring-2 focus:ring-[#FF7A00]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-700 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 block">
                    ULANGI KATA SANDI *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-white text-[#111827] text-xs sm:text-sm pl-9 pr-3 py-2.5 outline-none font-medium focus:ring-2 focus:ring-[#FF7A00]"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Data Usaha */}
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider pb-1 pt-2 border-b border-white/10">
                02. Identitas Usaha & Profil Toko
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 block">
                    NAMA TOKO / USAHA *
                  </label>
                  <div className="relative">
                    <Store className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Contoh: Toko Berkah Mandiri"
                      className="w-full bg-white text-[#111827] text-xs sm:text-sm pl-9 pr-3 py-2.5 outline-none font-medium focus:ring-2 focus:ring-[#FF7A00]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 block">
                    KATEGORI BISNIS *
                  </label>
                  <select
                    value={businessCategory}
                    onChange={(e) => setBusinessCategory(e.target.value)}
                    className="w-full bg-white text-[#111827] text-xs sm:text-sm px-3 py-2.5 outline-none font-medium focus:ring-2 focus:ring-[#FF7A00]"
                  >
                    <option value="Retail & Minimarket">Retail & Minimarket</option>
                    <option value="Toko Kelontong & Sembako">Toko Kelontong & Sembako</option>
                    <option value="Kuliner, Kafe & Resto">Kuliner, Kafe & Resto</option>
                    <option value="Distributor & Grosir">Distributor & Grosir</option>
                    <option value="Usaha Jasa & Bengkel">Usaha Jasa & Bengkel</option>
                    <option value="Apotek & Toko Obat">Apotek & Toko Obat</option>
                    <option value="Fashion & Pakaian">Fashion & Pakaian</option>
                    <option value="UMKM Lainnya">UMKM Lainnya</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 block">
                    KOTA / KABUPATEN *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Contoh: Bandung / Surabaya"
                      className="w-full bg-white text-[#111827] text-xs sm:text-sm pl-9 pr-3 py-2.5 outline-none font-medium focus:ring-2 focus:ring-[#FF7A00]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 block">
                    SKALA CABANG
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <select
                      value={branchCount}
                      onChange={(e) => setBranchCount(e.target.value)}
                      className="w-full bg-white text-[#111827] text-xs sm:text-sm pl-9 pr-3 py-2.5 outline-none font-medium focus:ring-2 focus:ring-[#FF7A00]"
                    >
                      <option value="1 Cabang (Tunggal)">1 Cabang (Tunggal)</option>
                      <option value="2 - 5 Cabang">2 - 5 Cabang</option>
                      <option value="Lebih dari 5 Cabang">Lebih dari 5 Cabang</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Agreement Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-300">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-[#FF7A00] focus:ring-[#FF7A00] rounded-none cursor-pointer"
                  />
                  <span>
                    Saya menyetujui <span className="text-[#FF7A00] underline">Syarat & Ketentuan</span> serta <span className="text-[#FF7A00] underline">Kebijakan Privasi</span> Kasir Online.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF7A00] hover:bg-[#E56E00] text-white font-extrabold text-sm py-3.5 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:translate-y-0.5 disabled:opacity-75 tracking-wider"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      MEMPROSES PENDAFTARAN...
                    </span>
                  ) : (
                    <>
                      <span>[ DAFTAR BISNIS SEKARANG ]</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Switch to Login */}
              <div className="pt-2 text-center">
                <span className="text-xs text-gray-400">
                  Sudah memiliki akun Kasir Online?{' '}
                  <button
                    type="button"
                    onClick={onSwitchToLogin}
                    className="text-[#FF7A00] hover:underline font-bold cursor-pointer"
                  >
                    Masuk di Sini
                  </button>
                </span>
              </div>

              {/* Security info */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] font-mono text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Enkripsi End-to-End • Data Usaha Terisolasi Sesuai Standar Audit</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
