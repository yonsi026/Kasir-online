import React from 'react';
import { 
  Store, 
  ShoppingBag, 
  Boxes, 
  Building2, 
  Truck, 
  Wrench, 
  Coffee, 
  Briefcase 
} from 'lucide-react';

export const UserSegmentsSection: React.FC = () => {
  const segments = [
    {
      num: '01',
      name: 'Toko Kelontong',
      desc: 'Kelola penjualan harian, stok sembako, hutang pelanggan langganan, dan laporan kas harian.',
      icon: Store,
    },
    {
      num: '02',
      name: 'Warung Makan & Klontong',
      desc: 'Pencatatan cepat menu, perputaran bahan baku harian, dan monitoring uang masuk kasir.',
      icon: ShoppingBag,
    },
    {
      num: '03',
      name: 'Toko Retail',
      desc: 'Scan barcode puluhan ribu SKU, kontrol diskon berkala, dan manajemen retur barang terstruktur.',
      icon: Boxes,
    },
    {
      num: '04',
      name: 'Minimarket Mandiri',
      desc: 'Dukungan multi-terminal kasir kas, shift kasir bergantian, dan pelacakan barang fast-moving.',
      icon: Building2,
    },
    {
      num: '05',
      name: 'Distributor Kecil',
      desc: 'Pencatatan purchase order supplier, faktur invoice tempo, dan pengawasan batas kredit pembeli.',
      icon: Truck,
    },
    {
      num: '06',
      name: 'Usaha Jasa & Bengkel',
      desc: 'Kombinasi nota pengerjaan jasa dengan penjualan spare part fisik dalam satu kuitansi tagihan.',
      icon: Wrench,
    },
    {
      num: '07',
      name: 'Cafe & Kedai Kopi',
      desc: 'Transaksi pesanan cepat, opsi pembayaran QRIS instan, dan kalkulator margin tiap porsi menu.',
      icon: Coffee,
    },
    {
      num: '08',
      name: 'UMKM & Usaha Mandiri',
      desc: 'Standarisasi pembukuan profesional yang siap diajukan ke perbankan atau investor usaha.',
      icon: Briefcase,
    },
  ];

  return (
    <section id="bisnis" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 09. SEGMEN PENGGUNA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Dibuat untuk berbagai jenis bisnis.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Fleksibilitas sistem dirancang spesifik untuk menjawab tantangan operasional harian beragam skala usaha di Indonesia.
          </p>
        </div>

        {/* 8-Grid Segment Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E5E7EB]">
          {segments.map((seg) => {
            const Icon = seg.icon;
            return (
              <div
                key={seg.num}
                className="p-8 border-r border-b border-[#E5E7EB] bg-white hover:bg-[#F8FAFC] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-gray-400">
                      {seg.num}
                    </span>
                    <div className="w-8 h-8 border border-[#E5E7EB] bg-[#F8FAFC] flex items-center justify-center text-[#111827]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] mb-2">
                    {seg.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {seg.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
