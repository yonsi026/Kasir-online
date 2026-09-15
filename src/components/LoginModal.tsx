import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister?: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onOpenRegister,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usePin, setUsePin] = useState(false);
  const [pin, setPin] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#081A33] border-2 border-[#111827] text-white max-w-md w-full p-8 shadow-[8px_8px_0px_0px_#FF7A00] relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header - PRD Section 6.3 Specs */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-3.5 h-3.5 bg-[#FF7A00]" />
            <span className="font-extrabold text-2xl tracking-tight text-white">
              KASIR ONLINE
            </span>
          </div>
          <p className="text-sm font-medium text-gray-300">
            Kelola Bisnis Lebih Mudah
          </p>
          <span className="text-[11px] font-mono text-[#FF7A00] block">
            PORTAL MASUK APLIKASI
          </span>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3 bg-white/5 border border-white/10 p-6">
            <div className="w-12 h-12 bg-[#FF7A00] text-white rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h4 className="font-bold text-lg text-white">Otentikasi Berhasil</h4>
            <p className="text-xs text-gray-300">
              Membuka workspace bisnis Anda di Kasir Online...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="flex justify-center gap-4 text-xs font-mono pb-2 border-b border-white/10">
              <button
                type="button"
                onClick={() => setUsePin(false)}
                className={`pb-1 cursor-pointer ${
                  !usePin ? 'border-b-2 border-[#FF7A00] text-white font-bold' : 'text-gray-400'
                }`}
              >
                Email & Password
              </button>
              <button
                type="button"
                onClick={() => setUsePin(true)}
                className={`pb-1 cursor-pointer ${
                  usePin ? 'border-b-2 border-[#FF7A00] text-white font-bold' : 'text-gray-400'
                }`}
              >
                PIN Kasir Cepat
              </button>
            </div>

            {!usePin ? (
              <>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-gray-300 uppercase block">
                    Email Pengguna
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@tokobisnismu.com"
                      className="w-full bg-white text-[#111827] text-sm pl-9 pr-3 py-2.5 outline-none font-sans font-medium focus:ring-2 focus:ring-[#FF7A00]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-mono text-gray-300">
                    <span className="uppercase">Password</span>
                    <a href="#" className="text-gray-400 hover:text-[#FF7A00] text-[11px]">
                      Lupa Password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-white text-[#111827] text-sm pl-9 pr-3 py-2.5 outline-none font-sans font-medium focus:ring-2 focus:ring-[#FF7A00]"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-1">
                <label className="text-xs font-mono text-gray-300 uppercase block">
                  PIN Akses Terminal Kasir (4-6 Digit)
                </label>
                <input
                  type="password"
                  maxLength={6}
                  required
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Contoh: 1234"
                  className="w-full bg-white text-[#111827] text-center text-xl tracking-widest py-3 outline-none font-mono font-bold focus:ring-2 focus:ring-[#FF7A00]"
                />
                <span className="text-[10px] text-gray-400 text-center block pt-1">
                  Khusus terminal POS untuk pergantian shift kasir cepat.
                </span>
              </div>
            )}

            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-[#FF7A00] hover:bg-[#E56E00] text-white font-extrabold text-sm py-3.5 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:translate-y-0.5 tracking-wider"
              >
                <span>[ MASUK ]</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 text-center">
              <span className="text-xs text-gray-400">
                Belum punya akun?{' '}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onOpenRegister) {
                      onOpenRegister();
                    }
                  }}
                  className="text-[#FF7A00] hover:underline font-bold cursor-pointer"
                >
                  Daftar Bisnis Baru
                </button>
              </span>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] font-mono text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Supabase Auth & Session Terproteksi</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
