import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenLogin,
  onOpenRegister,
  onOpenDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'produk', label: 'Produk' },
    { id: 'fitur', label: 'Fitur' },
    { id: 'cara-kerja', label: 'Cara Kerja' },
    { id: 'bisnis', label: 'Untuk Bisnis' },
    { id: 'laporan', label: 'Laporan' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-4 h-4 bg-[#FF7A00] flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#111827]">
              KASIR ONLINE
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm px-3 py-2 transition-all cursor-pointer relative ${
                    isActive
                      ? 'font-bold text-[#FF7A00]'
                      : 'font-medium text-[#111827] hover:text-[#FF7A00]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FF7A00]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Medium screen navigation (tablet/compact desktop) */}
          <nav className="hidden md:flex lg:hidden items-center gap-1">
            {navLinks.slice(0, 5).map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-xs px-2 py-1.5 transition-all cursor-pointer relative ${
                    isActive
                      ? 'font-bold text-[#FF7A00]'
                      : 'font-medium text-[#111827] hover:text-[#FF7A00]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#FF7A00]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenLogin}
              className="text-xs sm:text-sm font-semibold text-[#111827] px-2.5 sm:px-3 py-2 hover:text-[#FF7A00] transition-colors cursor-pointer"
            >
              Masuk
            </button>
            <button
              onClick={onOpenRegister}
              className="text-xs sm:text-sm font-semibold text-[#111827] border border-[#111827] px-3 sm:px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Daftar Bisnis
            </button>
            <button
              onClick={onOpenDemo}
              className="bg-[#FF7A00] hover:bg-[#E56E00] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer active:translate-y-0.5"
            >
              <span>Mulai</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
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
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-base font-semibold py-2.5 px-3 flex items-center justify-between border-b border-gray-100 cursor-pointer ${
                    isActive
                      ? 'bg-orange-50 text-[#FF7A00] font-bold border-l-4 border-l-[#FF7A00]'
                      : 'text-[#111827] hover:text-[#FF7A00]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-xs font-mono">Aktif</span>}
                </button>
              );
            })}
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

