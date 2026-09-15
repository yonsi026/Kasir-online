import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeatureGrid } from './components/FeatureGrid';
import { PosSection } from './components/PosSection';
import { OfflineSection } from './components/OfflineSection';
import { InventorySection } from './components/InventorySection';
import { AccountingSection } from './components/AccountingSection';
import { FinancialReportingSection } from './components/FinancialReportingSection';
import { UserSegmentsSection } from './components/UserSegmentsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { DashboardPreviewSection } from './components/DashboardPreviewSection';
import { ReportExportSection } from './components/ReportExportSection';
import { SecuritySection } from './components/SecuritySection';
import { RolePermissionSection } from './components/RolePermissionSection';
import { ComparisonSection } from './components/ComparisonSection';
import { BenefitSection } from './components/BenefitSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { PageHeader } from './components/PageHeader';
import { PagePagination } from './components/PagePagination';
import { LoginModal } from './components/LoginModal';
import { RegisterBusinessModal } from './components/RegisterBusinessModal';
import { DemoModal } from './components/DemoModal';
import { PageId } from './types';

const parseHashToPage = (): PageId => {
  if (typeof window === 'undefined') return 'beranda';
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash === 'pos') return 'produk';
  if (hash === 'solusi') return 'cara-kerja';
  if (['beranda', 'produk', 'fitur', 'cara-kerja', 'bisnis', 'laporan', 'faq'].includes(hash)) {
    return hash as PageId;
  }
  return 'beranda';
};

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(parseHashToPage);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const page = parseHashToPage();
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans antialiased">
      {/* 01. Global Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      <main className="flex-1">
        {/* PAGE 1: BERANDA */}
        {activePage === 'beranda' && (
          <div>
            <Hero onOpenDemo={() => setIsDemoOpen(true)} onNavigate={handleNavigate} />
            <TrustStrip />
            <ProblemSection />
            <SolutionSection />
            <BenefitSection />
            <PagePagination currentPage="beranda" onNavigate={handleNavigate} />
            <FinalCta onOpenDemo={() => setIsDemoOpen(true)} onNavigate={handleNavigate} />
          </div>
        )}

        {/* PAGE 2: PRODUK (POS & OFFLINE) */}
        {activePage === 'produk' && (
          <div>
            <PageHeader
              badge="// TERMINAL KASIR & OFFLINE"
              title="Produk POS Cepat, Andal Online & Offline"
              description="Antarmuka kasir yang dirancang untuk kecepatan transaksi di meja kasir serta resiliensi penuh dengan penyimpanan lokal saat jaringan internet padam."
              currentPage="produk"
              onNavigate={handleNavigate}
            />
            <PosSection />
            <OfflineSection />
            <DashboardPreviewSection />
            <PagePagination currentPage="produk" onNavigate={handleNavigate} />
            <FinalCta onOpenDemo={() => setIsDemoOpen(true)} onNavigate={handleNavigate} />
          </div>
        )}

        {/* PAGE 3: FITUR & INVENTORI */}
        {activePage === 'fitur' && (
          <div>
            <PageHeader
              badge="// FITUR & MODUL INTI"
              title="10 Modul Lengkap untuk Seluruh Aspek Usaha"
              description="Semua modul operasional terhubung satu sama lain tanpa sistem terpisah. Dari penjualan, pembelian, kartu stok opname hingga perbandingan efisiensi."
              currentPage="fitur"
              onNavigate={handleNavigate}
            />
            <FeatureGrid onOpenDemo={() => setIsDemoOpen(true)} />
            <InventorySection />
            <ComparisonSection />
            <PagePagination currentPage="fitur" onNavigate={handleNavigate} />
            <FinalCta onOpenDemo={() => setIsDemoOpen(true)} onNavigate={handleNavigate} />
          </div>
        )}

        {/* PAGE 4: CARA KERJA & AKUNTANSI */}
        {activePage === 'cara-kerja' && (
          <div>
            <PageHeader
              badge="// ALUR KERJA & AKUNTANSI"
              title="Alur Kerja Otomatis dari Struk Kasir ke Buku Besar"
              description="Setiap transaksi kasir langsung menghasilkan jurnal akuntansi berimbang debit dan kredit tanpa perlu input manual kedua kali."
              currentPage="cara-kerja"
              onNavigate={handleNavigate}
            />
            <WorkflowSection />
            <AccountingSection onOpenDemo={() => setIsDemoOpen(true)} />
            <SolutionSection />
            <PagePagination currentPage="cara-kerja" onNavigate={handleNavigate} />
            <FinalCta onOpenDemo={() => setIsDemoOpen(true)} onNavigate={handleNavigate} />
          </div>
        )}

        {/* PAGE 5: UNTUK BISNIS & TIM */}
        {activePage === 'bisnis' && (
          <div>
            <PageHeader
              badge="// SEGMEN USAHA & TIM"
              title="Dibuat untuk Beragam Skala Usaha dan Struktur Tim"
              description="Mulai dari toko kelontong tunggal hingga ritel dengan banyak staf. Dilengkapi hak akses terisolasi per peran dan audit trail keamanan."
              currentPage="bisnis"
              onNavigate={handleNavigate}
            />
            <UserSegmentsSection />
            <RolePermissionSection />
            <SecuritySection />
            <PagePagination currentPage="bisnis" onNavigate={handleNavigate} />
            <FinalCta onOpenDemo={() => setIsDemoOpen(true)} onNavigate={handleNavigate} />
          </div>
        )}

        {/* PAGE 6: LAPORAN KEUANGAN */}
        {activePage === 'laporan' && (
          <div>
            <PageHeader
              badge="// LAPORAN KEUANGAN & EKSPOR"
              title="Laporan Bisnis Komprehensif Siap Cetak & Audit"
              description="Pantau performa laba rugi real-time, neraca keuangan, dan arus kas operasional. Lengkap dengan ekspor Excel berformula dan cetak thermal."
              currentPage="laporan"
              onNavigate={handleNavigate}
            />
            <FinancialReportingSection />
            <ReportExportSection />
            <PagePagination currentPage="laporan" onNavigate={handleNavigate} />
            <FinalCta onOpenDemo={() => setIsDemoOpen(true)} onNavigate={handleNavigate} />
          </div>
        )}

        {/* PAGE 7: FAQ & HARGA */}
        {activePage === 'faq' && (
          <div>
            <PageHeader
              badge="// PERTANYAAN & BANTUAN"
              title="Pertanyaan yang Sering Diajukan & Informasi Paket"
              description="Informasi lengkap mengenai keandalan offline, migrasi data lama, kompatibilitas printer thermal, dan konsultasi aktivasi sistem."
              currentPage="faq"
              onNavigate={handleNavigate}
            />
            <FaqSection />
            <PricingSection onOpenDemo={() => setIsDemoOpen(true)} />
            <PagePagination currentPage="faq" onNavigate={handleNavigate} />
            <FinalCta onOpenDemo={() => setIsDemoOpen(true)} onNavigate={handleNavigate} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onOpenRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <RegisterBusinessModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
}

