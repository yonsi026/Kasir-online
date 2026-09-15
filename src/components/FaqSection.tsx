import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Apa itu Kasir Online?',
      answer:
        'Kasir Online adalah sistem untuk membantu bisnis mengelola transaksi, stok, pemasukan, pengeluaran, kas, hutang, piutang, akuntansi, dan laporan bisnis dalam satu platform.',
    },
    {
      question: 'Apakah Kasir Online bisa digunakan tanpa internet?',
      answer:
        'POS dirancang untuk mendukung transaksi offline. Transaksi lokal akan masuk ke antrean sinkronisasi dan diproses ketika koneksi kembali tersedia.',
    },
    {
      question: 'Apakah stok otomatis berubah setelah penjualan?',
      answer:
        'Ya, transaksi penjualan dapat menghasilkan stock movement sehingga stok mengikuti transaksi yang berhasil diproses.',
    },
    {
      question: 'Apakah laporan keuangan dibuat otomatis?',
      answer:
        'Transaksi finansial dapat menghasilkan jurnal yang kemudian menjadi dasar general ledger dan laporan keuangan.',
    },
    {
      question: 'Apakah Kasir Online cocok untuk UMKM?',
      answer:
        'Ya. Target utama produk mencakup UMKM, toko retail, warung, distributor kecil, usaha jasa, dan bisnis skala kecil-menengah.',
    },
    {
      question: 'Apakah bisa digunakan oleh beberapa karyawan?',
      answer:
        'Ya. Sistem mendukung organization/member dan role seperti Owner, Admin, Cashier, Inventory, Accountant, dan Viewer.',
    },
    {
      question: 'Apakah tersedia export Excel?',
      answer:
        'Ya. Laporan dirancang untuk dapat diekspor ke Excel, PDF, dan dicetak.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 18. PERTANYAAN UMUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Jawaban untuk Pertanyaan Anda
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Informasi lengkap seputar operasional, akurasi data, dan keandalan sistem Kasir Online.
          </p>
        </div>

        {/* Swiss Accordion List */}
        <div className="border-t border-[#111827] divide-y divide-[#E5E7EB]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-6">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left flex items-center justify-between gap-4 group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-base sm:text-lg text-[#111827] group-hover:text-[#FF7A00] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 border border-[#E5E7EB] flex items-center justify-center text-[#111827] group-hover:border-[#FF7A00] group-hover:text-[#FF7A00] flex-shrink-0 transition-all">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-12 text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
