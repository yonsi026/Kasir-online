import React, { useState } from 'react';
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
import { LoginModal } from './components/LoginModal';
import { RegisterBusinessModal } from './components/RegisterBusinessModal';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans antialiased">
      {/* 01. Global Navigation */}
      <Navbar
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      <main className="flex-1">
        {/* 02. Hero Section */}
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />

        {/* 03. Trust Strip */}
        <TrustStrip />

        {/* 04. Problem Section */}
        <ProblemSection />

        {/* 05. Solution Section */}
        <SolutionSection />

        {/* 06. Features Overview */}
        <FeatureGrid onOpenDemo={() => setIsDemoOpen(true)} />

        {/* 07. POS Cashier Section */}
        <PosSection />

        {/* 08. Offline Section */}
        <OfflineSection />

        {/* 09. Inventory Section */}
        <InventorySection />

        {/* 10. Accounting Section */}
        <AccountingSection onOpenDemo={() => setIsDemoOpen(true)} />

        {/* 11. Financial Reporting Section */}
        <FinancialReportingSection />

        {/* 12. Business User Segments */}
        <UserSegmentsSection />

        {/* 13. Workflow Section */}
        <WorkflowSection />

        {/* 14. Full-Width Dashboard Preview */}
        <DashboardPreviewSection />

        {/* 15. Report Export Section */}
        <ReportExportSection />

        {/* 16. Security Section */}
        <SecuritySection />

        {/* 17. Role & Permission Section */}
        <RolePermissionSection />

        {/* 18. Comparison Table Section */}
        <ComparisonSection />

        {/* 19. Swiss Benefit Section */}
        <BenefitSection />

        {/* 20. Pricing Architecture Section */}
        <PricingSection onOpenDemo={() => setIsDemoOpen(true)} />

        {/* 21. FAQ Accordion Section */}
        <FaqSection />

        {/* 22. Final CTA */}
        <FinalCta onOpenDemo={() => setIsDemoOpen(true)} />
      </main>

      {/* 23. Footer */}
      <Footer />

      {/* 24. Modals */}
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
