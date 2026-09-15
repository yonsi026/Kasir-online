import React from 'react';
import { 
  ShoppingCart, 
  Package, 
  FileText, 
  ShoppingBag, 
  Wallet, 
  Scale, 
  BookOpen, 
  BarChart3,
  ArrowUpRight 
} from 'lucide-react';

interface FeatureGridProps {
  onOpenDemo: () => void;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ onOpenDemo }) => {
  const features = [
    {
      num: '01',
      title: 'Kasir / POS',
      desc: 'Proses penjualan lebih cepat dengan pencarian produk, barcode, diskon, pajak, dan berbagai metode pembayaran.',
      icon: ShoppingCart,
      tags: ['Barcode Scanner', 'Multi Payment', 'Cetak Struk'],
    },
    {
      num: '02',
      title: 'Inventory',
      desc: 'Pantau stok, stock movement, stock opname, dan penyesuaian stok secara lebih terstruktur.',
      icon: Package,
      tags: ['Audit Trail', 'Alert Menipis', 'Stock Opname'],
    },
    {
      num: '03',
      title: 'Penjualan',
      desc: 'Kelola transaksi, invoice unik, pembayaran, refund, dan riwayat penjualan lengkap.',
      icon: FileText,
      tags: ['Nomor Invoice Unik', 'Void Aman', 'Riwayat Pelanggan'],
    },
    {
      num: '04',
      title: 'Pembelian',
      desc: 'Catat pembelian, penerimaan barang, supplier, dan kewajiban pembayaran tempo.',
      icon: ShoppingBag,
      tags: ['Purchase Order', 'Supplier Tracking', 'HPP Rata-rata'],
    },
    {
      num: '05',
      title: 'Kas & Bank',
      desc: 'Pantau arus uang masuk dan keluar dari berbagai akun kas tunai, bank, dan dompet digital.',
      icon: Wallet,
      tags: ['Multi Kas', 'Rekonsiliasi', 'Biaya Operasional'],
    },
    {
      num: '06',
      title: 'Hutang & Piutang',
      desc: 'Ketahui tagihan yang belum dibayar, jatuh tempo, pembayaran sebagian, dan outstanding balance.',
      icon: Scale,
      tags: ['Aging Schedule', 'Jatuh Tempo', 'Kartu Piutang'],
    },
    {
      num: '07',
      title: 'Akuntansi',
      desc: 'Gunakan pencatatan double-entry untuk membangun laporan keuangan dari transaksi yang sudah tercatat.',
      icon: BookOpen,
      tags: ['Double-Entry', 'Chart of Accounts', 'General Ledger'],
    },
    {
      num: '08',
      title: 'Laporan',
      desc: 'Lihat penjualan, stok, laba rugi, neraca, arus kas, jurnal, ledger, dan laporan lainnya.',
      icon: BarChart3,
      tags: ['Export Excel', 'Export PDF', 'Thermal 58/80mm'],
    },
  ];

  return (
    <section id="fitur" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E5E7EB]">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
              <span>// 03. CAKUPAN MODUL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111827] tracking-tight leading-tight">
              Semua yang dibutuhkan untuk mengelola bisnis.
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Setiap modul dirancang selaras dengan alur operasional bisnis riil di Indonesia.
            </p>
          </div>

          <button
            onClick={onOpenDemo}
            className="bg-[#111827] hover:bg-black text-white text-sm font-bold px-6 py-3 transition-colors flex items-center gap-2 self-start md:self-end cursor-pointer"
          >
            <span>Coba Kasir Online</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF7A00]" />
          </button>
        </div>

        {/* 8-Grid Feature Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E5E7EB]">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.num}
                className="p-8 border-r border-b border-[#E5E7EB] bg-white hover:bg-[#F8FAFC] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#FF7A00] transition-colors">
                      MODUL {f.num}
                    </span>
                    <div className="w-9 h-9 border border-[#E5E7EB] bg-[#F8FAFC] flex items-center justify-center text-[#111827] group-hover:border-[#FF7A00] group-hover:text-[#FF7A00] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#111827] mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {f.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-gray-600 bg-gray-100 px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
