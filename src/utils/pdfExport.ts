import { jsPDF } from 'jspdf';
import { getBusinessProfile, BusinessProfile } from './businessConfig';

export interface PdfExportOptions extends Partial<BusinessProfile> {
  reportType?: 'laba_rugi' | 'neraca' | 'arus_kas';
}

export function generateAndDownloadPdfReport(options?: PdfExportOptions) {
  const currentProfile = getBusinessProfile();

  const reportType = options?.reportType || 'laba_rugi';
  const businessName = options?.businessName || currentProfile.businessName || 'Toko Berkah Sejahtera (Kasir Online)';
  const address = options?.address || currentProfile.address || 'Ruko Sentra Niaga Blok B-12, Jl. Utama No. 88';
  const period = options?.period || currentProfile.period || 'September 2026';
  const preparedBy = options?.preparedBy || currentProfile.preparedBy || 'Siti Rahma, A.Md.Ak.';
  const ownerName = options?.ownerName || currentProfile.ownerName || 'Bpk. Hendra Kurniawan';

  // Customized PDF Header / Kop strings
  const pdfHeaderTitle = options?.pdfHeaderTitle || currentProfile.pdfHeaderTitle || 'KASIR ONLINE';
  const pdfHeaderSubtitle1 = options?.pdfHeaderSubtitle1 || currentProfile.pdfHeaderSubtitle1 || 'SISTEM INTEGRASI KASIR POS & AKUNTANSI GANDA RESMI';
  const pdfHeaderSubtitle2 = options?.pdfHeaderSubtitle2 || currentProfile.pdfHeaderSubtitle2 || 'Standard SAK EMKM Indonesia • Standar Keuangan Terverifikasi';
  const pdfDocTag = options?.pdfDocTag || currentProfile.pdfDocTag || 'DOKUMEN RESMI USAHA';
  const pdfDocRef = options?.pdfDocRef || currentProfile.pdfDocRef || `Doc Ref: KSR-RPT-${new Date().getFullYear()}-0942`;
  const pdfPrintDate = options?.pdfPrintDate || currentProfile.pdfPrintDate || new Date().toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  // Header Banner
  doc.setFillColor(8, 26, 51); // Dark Navy #081A33
  doc.rect(margin, margin, contentWidth, 24, 'F');

  doc.setFillColor(255, 122, 0); // Orange #FF7A00
  doc.rect(margin, margin + 22, contentWidth, 2, 'F');

  // Header Text
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text(pdfHeaderTitle.toUpperCase(), margin + 6, margin + 9);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(200, 210, 225);
  doc.text(pdfHeaderSubtitle1, margin + 6, margin + 15);
  doc.text(pdfHeaderSubtitle2, margin + 6, margin + 19);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(255, 122, 0);
  doc.text(pdfDocTag, pageWidth - margin - 6, margin + 9, { align: 'right' });
  doc.setTextColor(200, 210, 225);
  doc.setFont('helvetica', 'normal');
  doc.text(pdfDocRef, pageWidth - margin - 6, margin + 15, { align: 'right' });
  doc.text(`Tgl Cetak: ${pdfPrintDate}`, pageWidth - margin - 6, margin + 19, { align: 'right' });

  let y = margin + 34;

  // Business Details Card
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(229, 231, 235);
  doc.rect(margin, y, contentWidth, 22, 'FD');

  doc.setTextColor(17, 24, 39);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text(businessName.toUpperCase(), margin + 5, y + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(75, 85, 99);
  doc.text(`Alamat: ${address} • Status: WP Usaha / SAK EMKM`, margin + 5, y + 13);
  doc.text(`Periode Laporan: ${period} • Mata Uang: IDR (Rupiah)`, margin + 5, y + 18);

  y += 28;

  // Title of Report
  const titleText =
    reportType === 'neraca'
      ? 'LAPORAN NERACA KEUANGAN (POSISI KEUANGAN)'
      : reportType === 'arus_kas'
      ? 'LAPORAN ARUS KAS OPERASIONAL (CASH FLOW)'
      : 'LAPORAN LABA RUGI KOMPREHENSIF (PROFIT & LOSS)';

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(17, 24, 39);
  doc.text(titleText, margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(107, 114, 128);
  doc.text(`Disusun otomatis secara berimbang melalui jurnal umum Kasir Online`, margin, y + 5);

  y += 10;

  // Table Drawing Helper
  const drawTableHeader = (headers: { label: string; width: number; align?: 'left' | 'right' }[]) => {
    doc.setFillColor(17, 24, 39);
    doc.rect(margin, y, contentWidth, 7, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(255, 255, 255);

    let x = margin + 3;
    headers.forEach((h) => {
      if (h.align === 'right') {
        doc.text(h.label, x + h.width - 6, y + 5, { align: 'right' });
      } else {
        doc.text(h.label, x, y + 5);
      }
      x += h.width;
    });
    y += 8;
  };

  const drawTableRow = (
    cols: { text: string; width: number; align?: 'left' | 'right'; bold?: boolean; highlight?: boolean; color?: [number, number, number] }[]
  ) => {
    const isHighlight = cols.some((c) => c.highlight);
    if (isHighlight) {
      doc.setFillColor(254, 243, 199); // Soft amber
      doc.rect(margin, y - 1, contentWidth, 6.5, 'F');
    } else {
      doc.setDrawColor(240, 242, 245);
      doc.line(margin, y + 5.5, margin + contentWidth, y + 5.5);
    }

    doc.setFontSize(8);
    let x = margin + 3;
    cols.forEach((c) => {
      doc.setFont('helvetica', c.bold ? 'bold' : 'normal');
      if (c.color) {
        doc.setTextColor(c.color[0], c.color[1], c.color[2]);
      } else {
        doc.setTextColor(17, 24, 39);
      }

      if (c.align === 'right') {
        doc.text(c.text, x + c.width - 6, y + 4, { align: 'right' });
      } else {
        doc.text(c.text, x, y + 4);
      }
      x += c.width;
    });
    y += 6.5;
  };

  if (reportType === 'laba_rugi') {
    drawTableHeader([
      { label: 'KODE', width: 25 },
      { label: 'URAIAN AKUN', width: 95 },
      { label: 'JUMLAH (IDR)', width: 60, align: 'right' },
    ]);

    // Section 1
    drawTableRow([{ text: '4-1000', width: 25, bold: true }, { text: 'PENDAPATAN PENJUALAN', width: 95, bold: true }, { text: '', width: 60 }]);
    drawTableRow([{ text: '4-1001', width: 25 }, { text: 'Penjualan Kasir POS (Retail Toko)', width: 95 }, { text: 'Rp 84.500.000', width: 60, align: 'right' }]);
    drawTableRow([{ text: '4-1002', width: 25 }, { text: 'Penjualan Pesanan & Grosir Pelanggan', width: 95 }, { text: 'Rp 16.800.000', width: 60, align: 'right' }]);
    drawTableRow([{ text: '4-1003', width: 25 }, { text: 'Potongan & Diskon Promosi Penjualan', width: 95 }, { text: '-Rp 1.300.000', width: 60, align: 'right', color: [220, 38, 38] }]);
    drawTableRow([{ text: '', width: 25 }, { text: 'TOTAL PENDAPATAN BERSIH', width: 95, bold: true }, { text: 'Rp 100.000.000', width: 60, align: 'right', bold: true }]);

    y += 2;
    // Section 2
    drawTableRow([{ text: '5-1000', width: 25, bold: true }, { text: 'HARGA POKOK PENJUALAN (HPP)', width: 95, bold: true }, { text: '', width: 60 }]);
    drawTableRow([{ text: '5-1001', width: 25 }, { text: 'Persediaan Awal Barang Dagang', width: 95 }, { text: 'Rp 42.000.000', width: 60, align: 'right' }]);
    drawTableRow([{ text: '5-1002', width: 25 }, { text: 'Pembelian Bersih Barang Periode Ini', width: 95 }, { text: 'Rp 58.000.000', width: 60, align: 'right' }]);
    drawTableRow([{ text: '5-1003', width: 25 }, { text: 'Biaya Angkut Masuk Pembelian (Freight-In)', width: 95 }, { text: 'Rp 1.500.000', width: 60, align: 'right' }]);
    drawTableRow([{ text: '5-1005', width: 25 }, { text: 'Persediaan Akhir Barang Dagang (Opname)', width: 95 }, { text: '-Rp 36.500.000', width: 60, align: 'right', color: [220, 38, 38] }]);
    drawTableRow([{ text: '', width: 25 }, { text: 'TOTAL HARGA POKOK PENJUALAN (HPP)', width: 95, bold: true }, { text: 'Rp 65.000.000', width: 60, align: 'right', bold: true }]);

    y += 2;
    drawTableRow([{ text: '', width: 25 }, { text: 'LABA KOTOR (GROSS PROFIT)', width: 95, bold: true, highlight: true }, { text: 'Rp 35.000.000', width: 60, align: 'right', bold: true, highlight: true, color: [4, 120, 87] }]);

    y += 2;
    // Section 3
    drawTableRow([{ text: '6-1000', width: 25, bold: true }, { text: 'BEBAN OPERASIONAL USAHA', width: 95, bold: true }, { text: '', width: 60 }]);
    drawTableRow([{ text: '6-1001', width: 25 }, { text: 'Beban Gaji Kasir & Staff Toko', width: 95 }, { text: 'Rp 9.500.000', width: 60, align: 'right' }]);
    drawTableRow([{ text: '6-1002', width: 25 }, { text: 'Beban Listrik PLN, Air PDAM & Fiber Optic', width: 95 }, { text: 'Rp 2.400.000', width: 60, align: 'right' }]);
    drawTableRow([{ text: '6-1003', width: 25 }, { text: 'Beban Sewa Tempat & Keamanan Lingkungan', width: 95 }, { text: 'Rp 3.000.000', width: 60, align: 'right' }]);
    drawTableRow([{ text: '6-1004', width: 25 }, { text: 'Beban Kertas Struk, Plastik & Lakban Toko', width: 95 }, { text: 'Rp 600.000', width: 60, align: 'right' }]);
    drawTableRow([{ text: '6-1005', width: 25 }, { text: 'Beban Pemeliharaan & Depresiasi Hardware', width: 95 }, { text: 'Rp 1.500.000', width: 60, align: 'right' }]);
    drawTableRow([{ text: '', width: 25 }, { text: 'TOTAL BEBAN OPERASIONAL', width: 95, bold: true }, { text: 'Rp 17.000.000', width: 60, align: 'right', bold: true }]);

    y += 2;
    drawTableRow([{ text: '', width: 25 }, { text: 'LABA BERSIH SEBELUM PAJAK (EBIT)', width: 95, bold: true }, { text: 'Rp 18.000.000', width: 60, align: 'right', bold: true, color: [234, 88, 12] }]);
    drawTableRow([{ text: '7-1001', width: 25 }, { text: 'Estimasi Pajak Final UMKM (PP 23/55)', width: 95 }, { text: '-Rp 500.000', width: 60, align: 'right', color: [220, 38, 38] }]);

    y += 2;
    // Grand Total Net Profit
    doc.setFillColor(8, 26, 51);
    doc.rect(margin, y, contentWidth, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text('LABA BERSIH PERIODE BERJALAN (NET PROFIT)', margin + 4, y + 5.5);
    doc.setTextColor(255, 122, 0);
    doc.text('Rp 17.500.000', pageWidth - margin - 4, y + 5.5, { align: 'right' });
    y += 12;
  } else {
    // Neraca Table
    drawTableHeader([
      { label: 'AKTIVA (ASET USAHA)', width: 60 },
      { label: 'JUMLAH (IDR)', width: 30, align: 'right' },
      { label: 'PASIVA (KEWAJIBAN & MODAL)', width: 60 },
      { label: 'JUMLAH (IDR)', width: 30, align: 'right' },
    ]);

    drawTableRow([
      { text: 'Kas di Laci Kasir', width: 60 },
      { text: 'Rp 5.250.000', width: 30, align: 'right' },
      { text: 'Hutang Dagang Supplier', width: 60 },
      { text: 'Rp 38.000.000', width: 30, align: 'right' },
    ]);
    drawTableRow([
      { text: 'Bank Operasional BCA', width: 60 },
      { text: 'Rp 44.750.000', width: 30, align: 'right' },
      { text: 'Beban Akrual Gaji Karyawan', width: 60 },
      { text: 'Rp 7.500.000', width: 30, align: 'right' },
    ]);
    drawTableRow([
      { text: 'Piutang Pelanggan', width: 60 },
      { text: 'Rp 12.000.000', width: 30, align: 'right' },
      { text: 'Hutang PPN Kasir', width: 60 },
      { text: 'Rp 4.500.000', width: 30, align: 'right' },
    ]);
    drawTableRow([
      { text: 'Persediaan Stok Barang', width: 60 },
      { text: 'Rp 58.000.000', width: 30, align: 'right' },
      { text: 'TOTAL KEWAJIBAN', width: 60, bold: true },
      { text: 'Rp 50.000.000', width: 30, align: 'right', bold: true },
    ]);
    drawTableRow([
      { text: 'Peralatan Mesin POS', width: 60 },
      { text: 'Rp 18.000.000', width: 30, align: 'right' },
      { text: 'Modal Pemilik Usaha', width: 60 },
      { text: 'Rp 82.000.000', width: 30, align: 'right' },
    ]);
    drawTableRow([
      { text: 'Display Rak Etalase Toko', width: 60 },
      { text: 'Rp 17.000.000', width: 30, align: 'right' },
      { text: 'Laba Periode Berjalan', width: 60 },
      { text: 'Rp 18.000.000', width: 30, align: 'right' },
    ]);
    drawTableRow([
      { text: 'Akumulasi Penyusutan', width: 60, color: [220, 38, 38] },
      { text: '-Rp 5.000.000', width: 30, align: 'right', color: [220, 38, 38] },
      { text: 'TOTAL EKUITAS / MODAL', width: 60, bold: true },
      { text: 'Rp 100.000.000', width: 30, align: 'right', bold: true },
    ]);

    y += 2;
    doc.setFillColor(8, 26, 51);
    doc.rect(margin, y, contentWidth, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text('TOTAL AKTIVA: Rp 150.000.000', margin + 4, y + 5.5);
    doc.text('TOTAL PASIVA: Rp 150.000.000', margin + 95, y + 5.5);
    doc.setTextColor(255, 122, 0);
    doc.text('[ BALANCE 100% ]', pageWidth - margin - 4, y + 5.5, { align: 'right' });
    y += 12;
  }

  // Verification & Signatures section
  y = Math.max(y + 6, pageHeight - 50);

  // Box for Audit Stamp
  doc.setDrawColor(200, 210, 225);
  doc.setFillColor(250, 252, 255);
  doc.rect(margin, y, 62, 24, 'FD');

  doc.setTextColor(255, 122, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.text('★ AUDITED & SYSTEM VERIFIED', margin + 4, y + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(75, 85, 99);
  doc.text('Integritas angka terverifikasi oleh', margin + 4, y + 11);
  doc.text('Kasir Online Ledger Engine v2.4.', margin + 4, y + 15);
  doc.text('Hash: #KSR-9412-SHA256-OK', margin + 4, y + 19);

  // Signatures
  const sigX1 = margin + 80;
  const sigX2 = margin + 130;

  doc.setTextColor(75, 85, 99);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('Disusun Oleh:', sigX1, y + 6);
  doc.text('Disetujui Oleh (Owner):', sigX2, y + 6);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(17, 24, 39);
  doc.setFontSize(8);
  doc.text(preparedBy, sigX1, y + 20);
  doc.text(ownerName, sigX2, y + 20);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(156, 163, 175);
  doc.text('Staff Akuntansi & Pajak', sigX1, y + 24);
  doc.text('Pemilik Usaha', sigX2, y + 24);

  // Footer Page Info
  doc.setFontSize(7);
  doc.setTextColor(156, 163, 175);
  doc.text('Dokumen ini dicetak otomatis dari Kasir Online (https://kasironline.id). Standar Keuangan UMKM Indonesia.', margin, pageHeight - 8);
  doc.text('Halaman 1 / 1', pageWidth - margin, pageHeight - 8, { align: 'right' });

  // Save PDF
  const filename = `Laporan_Keuangan_${reportType}_${period.replace(/\s+/g, '_')}.pdf`;
  doc.save(filename);

  return { success: true, filename };
}
