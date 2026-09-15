import React from 'react';
import { Check, Minus } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisonRows = [
    { feature: 'Kasir / POS Cepat', manual: '—', excel: '—', kasirOnline: '✓' },
    { feature: 'Inventory & Mutasi Otomatis', manual: '—', excel: 'Parsial', kasirOnline: '✓' },
    { feature: 'Penjualan & Invoice Unik', manual: '✓', excel: '✓', kasirOnline: '✓' },
    { feature: 'Pembelian & Manajemen Supplier', manual: 'Parsial', excel: '✓', kasirOnline: '✓' },
    { feature: 'Hutang & Pengingat Tempo', manual: '—', excel: 'Parsial', kasirOnline: '✓' },
    { feature: 'Piutang Pelanggan & Aging', manual: '—', excel: 'Parsial', kasirOnline: '✓' },
    { feature: 'Kas & Bank Multi Rekening', manual: 'Parsial', excel: '✓', kasirOnline: '✓' },
    { feature: 'Double-Entry Accounting Otomatis', manual: '—', excel: '—', kasirOnline: '✓' },
    { feature: 'Laporan Laba Rugi Real-Time', manual: '—', excel: 'Parsial', kasirOnline: '✓' },
    { feature: 'Neraca Keuangan Otomatis', manual: '—', excel: '—', kasirOnline: '✓' },
    { feature: 'Laporan Arus Kas (Cash Flow)', manual: '—', excel: 'Parsial', kasirOnline: '✓' },
    { feature: 'Offline POS (Koneksi Terputus)', manual: '✓', excel: '—', kasirOnline: '✓' },
    { feature: 'Audit Trail Riwayat Manipulasi Data', manual: '—', excel: '—', kasirOnline: '✓' },
    { feature: 'Export Excel Profesional', manual: '—', excel: '✓', kasirOnline: '✓' },
    { feature: 'Cetak Dokumen PDF & Thermal 58/80mm', manual: '—', excel: 'Parsial', kasirOnline: '✓' },
  ];

  return (
    <section className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 15. PERBANDINGAN METODE KERJA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Dari pencatatan terpisah ke sistem yang terintegrasi.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Bandingkan bagaimana Kasir Online menyederhanakan alur kerja dibandingkan buku tulis konvensional atau file spreadsheet yang rawan rusak dan salah rumus.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="border border-[#111827] bg-white shadow-[6px_6px_0px_0px_#111827] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#111827] bg-[#081A33] text-white font-mono">
                  <th className="py-4 px-6 font-bold w-2/5">KEMAMPUAN SISTEM</th>
                  <th className="py-4 px-4 text-center font-bold w-1/5 text-gray-300">Pencatatan Manual</th>
                  <th className="py-4 px-4 text-center font-bold w-1/5 text-gray-300">Spreadsheet Mandiri</th>
                  <th className="py-4 px-4 text-center font-bold w-1/5 bg-[#FF7A00] text-white">
                    KASIR ONLINE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`hover:bg-gray-50 transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'
                    }`}
                  >
                    <td className="py-3.5 px-6 font-semibold text-[#111827]">
                      {row.feature}
                    </td>

                    <td className="py-3.5 px-4 text-center font-mono">
                      {row.manual === '✓' ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-200 text-gray-700 rounded-full text-xs font-bold">
                          ✓
                        </span>
                      ) : row.manual === 'Parsial' ? (
                        <span className="text-[11px] text-gray-500 font-mono">Parsial</span>
                      ) : (
                        <span className="text-gray-300 font-bold">—</span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-center font-mono">
                      {row.excel === '✓' ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-200 text-gray-700 rounded-full text-xs font-bold">
                          ✓
                        </span>
                      ) : row.excel === 'Parsial' ? (
                        <span className="text-[11px] text-gray-500 font-mono">Parsial</span>
                      ) : (
                        <span className="text-gray-300 font-bold">—</span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-center bg-orange-50/40 border-l border-r border-[#FF7A00]/20">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-[#FF7A00] text-white font-extrabold text-sm">
                        ✓
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-[#E5E7EB] bg-[#F8FAFC] flex flex-wrap items-center justify-between text-xs text-gray-600 font-mono">
            <span>Keterangan: (✓) Terotomatisasi Penuh • (—) Tidak Tersedia</span>
            <span className="text-[#FF7A00] font-bold">Semua data terintegrasi dalam 1 akun</span>
          </div>
        </div>

      </div>
    </section>
  );
};
