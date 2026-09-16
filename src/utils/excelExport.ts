import * as XLSX from 'xlsx';

export interface ExportBusinessMeta {
  businessName?: string;
  period?: string;
  preparedBy?: string;
}

export function downloadBusinessExcelReport(meta?: ExportBusinessMeta) {
  const businessName = meta?.businessName || 'Toko Berkah Sejahtera (Kasir Online)';
  const period = meta?.period || 'September 2026';
  const preparedBy = meta?.preparedBy || 'Siti Rahma (Admin Akuntansi)';
  const printDate = new Date().toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const wb = XLSX.utils.book_new();

  // -------------------------------------------------------------
  // 1. SHEET: LABA RUGI (PROFIT & LOSS)
  // -------------------------------------------------------------
  const labaRugiData = [
    ['KASIR ONLINE - LAPORAN LABA RUGI KOMPREHENSIF'],
    [`Nama Entitas Usaha : ${businessName}`],
    [`Periode Pelaporan  : ${period}`],
    [`Mata Uang         : IDR (Rupiah Indonesia)`],
    [`Dicetak Pada      : ${printDate} | Disusun oleh: ${preparedBy}`],
    [],
    ['KODE AKUN', 'URAIAN TRANSAKSI / REKENING', 'JUMLAH (IDR)'],
    ['--- PENDAPATAN USAHA ---', '', ''],
    ['4-1001', 'Penjualan Kasir POS (Retail)', 84500000],
    ['4-1002', 'Penjualan Pesanan / Grosir', 16800000],
    ['4-1003', 'Potongan & Diskon Promosi Penjualan', -1300000],
    ['', 'TOTAL PENDAPATAN BERSIH', 100000000],
    [],
    ['--- HARGA POKOK PENJUALAN (HPP) ---', '', ''],
    ['5-1001', 'Persediaan Awal Barang Dagang', 42000000],
    ['5-1002', 'Pembelian Bersih Periode Berjalan', 58000000],
    ['5-1003', 'Biaya Angkut Masuk Pembelian (Freight-In)', 1500000],
    ['5-1004', 'Barang Tersedia Untuk Dijual (BTUD)', 101500000],
    ['5-1005', 'Persediaan Akhir Barang Dagang (Stok Opname)', -36500000],
    ['', 'TOTAL HARGA POKOK PENJUALAN (HPP)', 65000000],
    [],
    ['', 'LABA KOTOR (GROSS PROFIT)', 35000000],
    [],
    ['--- BEBAN OPERASIONAL USAHA ---', '', ''],
    ['6-1001', 'Beban Gaji Kasir & Kru Toko', 9500000],
    ['6-1002', 'Beban Listrik, Air & Internet Fiber', 2400000],
    ['6-1003', 'Beban Sewa Ruko / Tempat Usaha', 3000000],
    ['6-1004', 'Beban Plastik, Struk Thermal & Perlengkapan', 600000],
    ['6-1005', 'Beban Pemeliharaan & Penyusutan Mesin Kasir', 1500000],
    ['', 'TOTAL BEBAN OPERASIONAL', 17000000],
    [],
    ['', 'LABA BERSIH SEBELUM PAJAK (EBIT)', 18000000],
    ['7-1001', 'Estimasi Pajak Final UMKM (PP 23/55 0.5%)', -500000],
    ['', 'LABA BERSIH SETELAH PAJAK (NET PROFIT)', 17500000],
  ];

  const wsLabaRugi = XLSX.utils.aoa_to_sheet(labaRugiData);
  wsLabaRugi['!cols'] = [{ wch: 18 }, { wch: 45 }, { wch: 22 }];
  XLSX.utils.book_append_sheet(wb, wsLabaRugi, 'Laba Rugi');

  // -------------------------------------------------------------
  // 2. SHEET: NERACA (BALANCE SHEET)
  // -------------------------------------------------------------
  const neracaData = [
    ['KASIR ONLINE - LAPORAN NERACA KEUANGAN (POSISI KEUANGAN)'],
    [`Nama Entitas Usaha : ${businessName}`],
    [`Per Tanggal        : 30 ${period}`],
    [`Mata Uang          : IDR (Rupiah Indonesia)`],
    [],
    ['KODE', 'AKTIVA / ASET', 'JUMLAH (IDR)', 'KODE', 'PASIVA (KEWAJIBAN & MODAL)', 'JUMLAH (IDR)'],
    ['-- ASET LANCAR --', '', '', '-- KEWAJIBAN LANCAR --', '', ''],
    ['1-1001', 'Kas Tunai di Laci Kasir', 5250000, '2-1001', 'Hutang Dagang Supplier', 38000000],
    ['1-1002', 'Kas Rekening Bank Operasional', 44750000, '2-1002', 'Beban Akrual Gaji Karyawan', 7500000],
    ['1-1003', 'Piutang Usaha Konsumen', 12000000, '2-1003', 'Hutang Pajak Penjualan PPN', 4500000],
    ['1-1004', 'Persediaan Barang Dagang (Stok)', 58000000, '', 'TOTAL KEWAJIBAN', 50000000],
    ['', 'Total Aset Lancar', 120000000, '', '', ''],
    [],
    ['-- ASET TETAP --', '', '', '-- EKUITAS / MODAL --', '', ''],
    ['1-2001', 'Peralatan Kasir POS & Komputer', 18000000, '3-1001', 'Modal Disetor Pemilik', 82000000],
    ['1-2002', 'Display Etalase & Rak Gondola', 17000000, '3-1002', 'Laba Bersih Berjalan', 18000000],
    ['1-2003', 'Akumulasi Penyusutan Aset', -5000000, '', 'TOTAL EKUITAS', 100000000],
    ['', 'Total Aset Tetap', 30000000, '', '', ''],
    [],
    ['', 'TOTAL ASET (AKTIVA)', 150000000, '', 'TOTAL KEWAJIBAN & EKUITAS', 150000000],
    ['', 'STATUS VALIDASI:', 'SEIMBANG (Rp 0 SELISIH)', '', 'STATUS VALIDASI:', 'SEIMBANG (Rp 0 SELISIH)'],
  ];

  const wsNeraca = XLSX.utils.aoa_to_sheet(neracaData);
  wsNeraca['!cols'] = [{ wch: 14 }, { wch: 34 }, { wch: 18 }, { wch: 14 }, { wch: 34 }, { wch: 18 }];
  XLSX.utils.book_append_sheet(wb, wsNeraca, 'Neraca Keuangan');

  // -------------------------------------------------------------
  // 3. SHEET: TRANSAKSI KASIR
  // -------------------------------------------------------------
  const transaksiData = [
    ['KASIR ONLINE - LOG TRANSAKSI PENJUALAN KASIR POS'],
    [`Tanggal Ekspor : ${printDate}`],
    [],
    ['NO TRANSAKSI', 'WAKTU', 'KASIR', 'METODE BAYAR', 'SUBTOTAL', 'DISKON', 'PAJAK (11%)', 'TOTAL BAYAR', 'STATUS'],
    ['TRX-2026-0901', '08:14:22', 'Siti Kasir 01', 'Tunai / Cash', 48000, 0, 5280, 53280, 'Selesai'],
    ['TRX-2026-0902', '08:29:10', 'Siti Kasir 01', 'QRIS Dinamis', 125000, 5000, 13200, 133200, 'Selesai'],
    ['TRX-2026-0903', '09:05:44', 'Budi Kasir 02', 'Transfer BCA', 450000, 15000, 47850, 482850, 'Selesai'],
    ['TRX-2026-0904', '09:42:19', 'Siti Kasir 01', 'Tunai / Cash', 18000, 0, 1980, 19980, 'Selesai'],
    ['TRX-2026-0905', '10:11:02', 'Budi Kasir 02', 'QRIS Dinamis', 87500, 0, 9625, 97125, 'Selesai'],
    ['TRX-2026-0906', '10:45:51', 'Siti Kasir 01', 'Debit Mandiri', 210000, 10000, 22000, 222000, 'Selesai'],
    ['TRX-2026-0907', '11:15:33', 'Budi Kasir 02', 'Tunai / Cash', 62000, 0, 6820, 68820, 'Selesai'],
    ['TRX-2026-0908', '11:58:40', 'Siti Kasir 01', 'QRIS Dinamis', 340000, 0, 37400, 377400, 'Selesai'],
  ];

  const wsTransaksi = XLSX.utils.aoa_to_sheet(transaksiData);
  wsTransaksi['!cols'] = [
    { wch: 16 },
    { wch: 12 },
    { wch: 16 },
    { wch: 16 },
    { wch: 14 },
    { wch: 12 },
    { wch: 14 },
    { wch: 16 },
    { wch: 12 },
  ];
  XLSX.utils.book_append_sheet(wb, wsTransaksi, 'Ringkasan Transaksi');

  // -------------------------------------------------------------
  // 4. SHEET: STOK OPNAME & VALUASI
  // -------------------------------------------------------------
  const stokData = [
    ['KASIR ONLINE - KARTU VALUASI STOK BARANG DAGANG'],
    [`Metode Valuasi : FIFO (First In First Out)`],
    [],
    ['KODE SKU', 'NAMA PRODUK', 'KATEGORI', 'STOK SISTEM', 'FISIK OPNAME', 'SELISIH', 'HARGA BELI', 'TOTAL NILAI ASET'],
    ['BRG-001', 'Indomie Goreng Original 85g', 'Makanan Instan', 48, 48, 0, 2600, 124800],
    ['BRG-002', 'Aqua Botol Tanggung 600ml', 'Minuman Ringan', 24, 24, 0, 2900, 69600],
    ['BRG-003', 'Kopi Kapal Api Special 165g', 'Kopi & Teh', 15, 15, 0, 3800, 57000],
    ['BRG-004', 'Minyak Goreng Sawit 1 Liter', 'Sembako', 12, 12, 0, 14200, 170400],
    ['BRG-005', 'Gula Pasir Kristal Putih 1kg', 'Sembako', 18, 18, 0, 14500, 261000],
    ['BRG-006', 'Biskuit Roma Kelapa 300g', 'Snack & Biskuit', 10, 10, 0, 6800, 68000],
    ['BRG-007', 'Beras Ramos Super 5kg', 'Sembako', 25, 25, 0, 64000, 1600000],
    ['BRG-008', 'Telur Ayam Ras 1kg', 'Fresh Food', 30, 30, 0, 26000, 780000],
    ['', '', '', '', '', 'TOTAL NILAI STOK GUDANG:', '', 3130800],
  ];

  const wsStok = XLSX.utils.aoa_to_sheet(stokData);
  wsStok['!cols'] = [
    { wch: 12 },
    { wch: 32 },
    { wch: 18 },
    { wch: 14 },
    { wch: 14 },
    { wch: 10 },
    { wch: 14 },
    { wch: 18 },
  ];
  XLSX.utils.book_append_sheet(wb, wsStok, 'Stok & Valuasi FIFO');

  // Trigger File Download
  const filename = `Laporan_Keuangan_${businessName.replace(/[^a-zA-Z0-9]/g, '_')}_${period.replace(/\s+/g, '_')}.xlsx`;
  
  try {
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return { success: true, filename };
  } catch {
    // Fallback using direct XLSX writeFile
    XLSX.writeFile(wb, filename);
    return { success: true, filename };
  }
}
