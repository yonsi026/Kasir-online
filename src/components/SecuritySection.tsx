import React from 'react';
import { Shield, Lock, Key, Server, Database, Check } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const points = [
    { title: 'Multi-tenant isolation', desc: 'Pemisahan ketat organization_id memastikan toko lain tidak dapat melihat database Anda.' },
    { title: 'Role-based access', desc: 'Pembagian kewenangan tegas antara Pemilik, Kasir, Bagian Gudang, dan Akuntan.' },
    { title: 'Permission control', desc: 'Aksi berisiko tinggi seperti Void Faktur atau Hapus Produk memerlukan otorisasi Supervisor.' },
    { title: 'Audit log komprehensif', desc: 'Setiap pergerakan uang, koreksi stok, dan pembatalan transaksi tercatat permanen beserta waktu & identitas staf.' },
    { title: 'Server-side validation', desc: 'Validasi tidak hanya di tampilan layar depan (browser), melainkan diproteksi di tingkat server & database.' },
    { title: 'Database security (RLS)', desc: 'Row Level Security PostgreSQL menjamin data hanya dieksekusi oleh akun terverifikasi.' },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 13. KEAMANAN & ISOLASI DATA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Data bisnis harus tetap menjadi milik bisnis Anda.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Kasir Online dirancang dengan pendekatan keamanan berlapis untuk membantu menjaga data setiap bisnis tetap terisolasi dan terkontrol.
          </p>
        </div>

        {/* Security Tier Diagram Container */}
        <div className="border border-[#111827] bg-white p-6 sm:p-10 shadow-[6px_6px_0px_0px_#111827] mb-12">
          <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-6">
            ARSITEKTUR PERLINDUNGAN 4 LAPIS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            
            <div className="p-5 border border-[#111827] bg-[#F8FAFC]">
              <div className="w-8 h-8 bg-gray-100 flex items-center justify-center text-[#111827] mb-3">
                <Lock className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono text-[#FF7A00] font-bold block">LAPISAN 01</span>
              <h4 className="font-extrabold text-base text-[#111827] mt-1 mb-1">AUTHENTICATION</h4>
              <p className="text-xs text-gray-600">Enkripsi token sesi login, proteksi brute-force, verifikasi email & PIN kasir.</p>
            </div>

            <div className="p-5 border border-[#111827] bg-[#F8FAFC]">
              <div className="w-8 h-8 bg-gray-100 flex items-center justify-center text-[#111827] mb-3">
                <Key className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono text-[#FF7A00] font-bold block">LAPISAN 02</span>
              <h4 className="font-extrabold text-base text-[#111827] mt-1 mb-1">AUTHORIZATION</h4>
              <p className="text-xs text-gray-600">Matriks hak akses spesifik per jabatan (Owner, Admin, Kasir, Gudang, Akuntan).</p>
            </div>

            <div className="p-5 border-2 border-[#FF7A00] bg-orange-50/50">
              <div className="w-8 h-8 bg-[#FF7A00] flex items-center justify-center text-white mb-3">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono text-[#FF7A00] font-bold block">LAPISAN 03</span>
              <h4 className="font-extrabold text-base text-[#111827] mt-1 mb-1">ROW LEVEL SECURITY</h4>
              <p className="text-xs text-gray-600">Setiap baris data dikunci di level database Postgres berdasar organization_id.</p>
            </div>

            <div className="p-5 border border-[#111827] bg-[#081A33] text-white">
              <div className="w-8 h-8 bg-blue-900 flex items-center justify-center text-white mb-3">
                <Database className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono text-[#FF7A00] font-bold block">LAPISAN 04</span>
              <h4 className="font-extrabold text-base text-white mt-1 mb-1">SECURE DATABASE</h4>
              <p className="text-xs text-gray-300">Integritas relasional ACID, transaksi atomik, dan pencadangan berkala otomatis.</p>
            </div>

          </div>
        </div>

        {/* Feature Checkpoints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt) => (
            <div key={pt.title} className="p-5 border border-[#E5E7EB] bg-white hover:border-[#111827] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-[#FF7A00] text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <h4 className="font-bold text-sm text-[#111827]">{pt.title}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed pl-6">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
