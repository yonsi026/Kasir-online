import React from 'react';
import { UserCheck, Shield, Key, ShoppingCart, Package, BookOpen, Eye } from 'lucide-react';

export const RolePermissionSection: React.FC = () => {
  const roles = [
    {
      role: 'OWNER',
      access: 'Full Access',
      badge: 'bg-[#FF7A00] text-white',
      icon: Shield,
      desc: 'Kendali penuh atas pengaturan bisnis, rekening bank, penutupan buku (closing), dan hak tambah/hapus karyawan.',
    },
    {
      role: 'ADMIN',
      access: 'Operational Access',
      badge: 'bg-gray-800 text-white',
      icon: Key,
      desc: 'Mengelola operasional harian toko, approval diskon khusus, penyesuaian master data produk & supplier.',
    },
    {
      role: 'CASHIER',
      access: 'POS & Payment',
      badge: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
      icon: ShoppingCart,
      desc: 'Hanya akses antarmuka POS, penerimaan kas, dan cetak struk. Dilarang menghapus transaksi atau mengubah harga tanpa izin.',
    },
    {
      role: 'INVENTORY',
      access: 'Stock Management',
      badge: 'bg-blue-100 text-blue-900 border border-blue-300',
      icon: Package,
      desc: 'Pencatatan barang masuk dari supplier, mutasi gudang, dan pelaksanaan Stock Opname fisik.',
    },
    {
      role: 'ACCOUNTANT',
      access: 'Financial Reports',
      badge: 'bg-purple-100 text-purple-900 border border-purple-300',
      icon: BookOpen,
      desc: 'Akses penuh jurnal umum, buku besar, neraca saldo, rekonsiliasi akun kas & laporan keuangan komprehensif.',
    },
    {
      role: 'VIEWER',
      access: 'Read Only',
      badge: 'bg-gray-100 text-gray-700 border border-gray-300',
      icon: Eye,
      desc: 'Hanya dapat memantau ringkasan performa penjualan tanpa izin mengedit atau memanipulasi data.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 14. STRUKTUR TIM & OTORISASI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Setiap orang mendapatkan akses sesuai perannya.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Cegah kebocoran data sensitif laba rugi kepada kasir dan pastikan setiap staf memiliki tugas yang jelas sesuai wewenangnya.
          </p>
        </div>

        {/* 6 Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.role}
                className="p-6 border border-[#111827] bg-[#F8FAFC] shadow-[4px_4px_0px_0px_#111827] hover:bg-white transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white border border-[#E5E7EB] flex items-center justify-center text-[#111827]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-extrabold text-lg text-[#111827] tracking-tight">
                        {r.role}
                      </h3>
                    </div>
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-1 ${r.badge}`}>
                      {r.access}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-200 text-[11px] font-mono text-gray-400">
                  Akses terisolasi via permission database
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
