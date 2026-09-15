import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLogin,
  onOpenRegister,
  onOpenDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Produk', href: '#pos' },
    { label: 'Fitur', href: '#fitur' },
    { label: 'Cara Kerja', href: '#solusi' },
    { label: 'Untuk Bisnis', href: '#bisnis' },
    { label: 'Laporan', href: '#laporan' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-4 h-4 bg-[#FF7A00] flex-shrink-0" />
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#111827]">
              KASIR ONLINE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#111827] hover:text-[#FF7A00] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              className="text-sm font-semibold text-[#111827] px-3 py-2 hover:text-[#FF7A00] transition-colors cursor-pointer"
            >
              Masuk
            </button>
            <button
              onClick={onOpenRegister}
              className="text-sm font-semibold text-[#111827] border border-[#111827] px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Daftar Bisnis
            </button>
            <button
              onClick={onOpenDemo}
              className="bg-[#FF7A00] hover:bg-[#E56E00] text-white font-bold text-sm px-5 py-2.5 transition-all shadow-sm flex items-center gap-2 cursor-pointer active:translate-y-0.5"
            >
              <span>Mulai Sekarang</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenRegister}
              className="bg-[#FF7A00] text-white text-xs font-bold px-3 py-1.5"
            >
              Daftar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="p-2 text-[#111827] hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#111827] hover:text-[#FF7A00] py-1 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full text-center border border-[#111827] text-[#111827] font-semibold py-2.5 text-sm"
            >
              Masuk
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full text-center bg-[#111827] text-white font-bold py-2.5 text-sm"
            >
              Daftar Bisnis Baru
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full text-center bg-[#FF7A00] text-white font-bold py-2.5 text-sm"
            >
              Konsultasi / Mulai Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
