import React from 'react';
import { 
  Check, 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  ShoppingBag, 
  CreditCard, 
  FileSpreadsheet, 
  FileText, 
  WifiOff 
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    { label: 'Kasir', icon: ShoppingCart },
    { label: 'Inventory', icon: Package },
    { label: 'Penjualan', icon: TrendingUp },
    { label: 'Pembelian', icon: ShoppingBag },
    { label: 'Hutang & Piutang', icon: CreditCard },
    { label: 'Akuntansi', icon: FileSpreadsheet },
    { label: 'Laporan', icon: FileText },
    { label: 'Offline POS', icon: WifiOff },
  ];

  return (
    <section className="border-b border-[#E5E7EB] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E7EB]">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] tracking-tight">
            Satu sistem untuk aktivitas bisnis yang lebih teratur.
          </h2>
          <div className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
            Integrasi End-to-End UMKM & Retail
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 divide-y sm:divide-y-0 divide-[#E5E7EB] pt-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`py-3 sm:py-0 sm:px-3 flex items-center gap-2.5 ${
                  idx !== 0 ? 'sm:border-l sm:border-[#E5E7EB]' : ''
                }`}
              >
                <div className="w-5 h-5 bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[#111827] whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
