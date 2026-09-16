import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Bluetooth, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  Smartphone, 
  QrCode, 
  FileText,
  Zap,
  Volume2
} from 'lucide-react';

interface ThermalReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ReceiptType = 'transaksi' | 'closing_shift';
type PaperWidth = '58mm' | '80mm';

export const ThermalReceiptModal: React.FC<ThermalReceiptModalProps> = ({ isOpen, onClose }) => {
  const [receiptType, setReceiptType] = useState<ReceiptType>('transaksi');
  const [paperWidth, setPaperWidth] = useState<PaperWidth>('58mm');
  const [isScanningBt, setIsScanningBt] = useState(false);
  const [connectedPrinter, setConnectedPrinter] = useState<string>('RPP02N Mini-BT (Default 58mm)');
  const [printerBattery, setPrinterBattery] = useState<number>(92);
  const [paperFeedCount, setPaperFeedCount] = useState<number>(0);
  const [printStatus, setPrintStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleScanBluetooth = async () => {
    setIsScanningBt(true);
    setPrintStatus('Memindai perangkat Bluetooth thermal terdekat...');
    
    // Check if navigator.bluetooth is available in current browser
    if (typeof navigator !== 'undefined' && 'bluetooth' in navigator) {
      try {
        const nav = navigator as unknown as {
          bluetooth: {
            requestDevice: (opts: unknown) => Promise<{ name?: string }>;
          };
        };
        const device = await nav.bluetooth.requestDevice({
          acceptAllDevices: true,
          optionalServices: ['000018f0-0000-1000-8000-00805f9b34fb'],
        });
        setConnectedPrinter(device.name || 'Bluetooth Printer');
        setPrintStatus(`Berhasil tersambung ke ${device.name || 'Printer Bluetooth'}!`);
      } catch {
        // Fallback simulation
        setTimeout(() => {
          setConnectedPrinter('Panda PRJ-58D Bluetooth');
          setPrintStatus('Tersambung ke Panda PRJ-58D Bluetooth (Simulasi).');
        }, 1200);
      }
    } else {
      setTimeout(() => {
        setConnectedPrinter('Epson TM-T82X BT (80mm Ready)');
        setPrintStatus('Tersambung ke Epson TM-T82X BT (Simulasi Bluetooth).');
      }, 1000);
    }

    setTimeout(() => {
      setIsScanningBt(false);
      setTimeout(() => setPrintStatus(null), 3500);
    }, 1200);
  };

  const handleFeedPaper = () => {
    setPaperFeedCount((prev) => prev + 1);
    setPrintStatus('Paper feed 3 baris terkirim ke printer.');
    setTimeout(() => setPrintStatus(null), 2500);
  };

  const generateRawReceiptText = (): string => {
    const is58 = paperWidth === '58mm';
    const divider = is58 ? '--------------------------------' : '------------------------------------------------';
    const doubleDivider = is58 ? '================================' : '================================================';

    if (receiptType === 'transaksi') {
      return [
        '      TOKO BERKAH SEJAHTERA      ',
        '      SISTEM KASIR ONLINE        ',
        '  Jl. Sudirman No.88 Jakarta     ',
        '       Telp: 0812-3456-7890      ',
        doubleDivider,
        'No: TRX-2026-0915-0842           ',
        'Tgl: 15/09/2026 14:28 WIB        ',
        'Kasir: Siti Rahma (Kasir 01)     ',
        divider,
        'Indomie Goreng Original 85g      ',
        '  2 x Rp 3.000         Rp  6.000 ',
        'Aqua Botol 600ml                 ',
        '  3 x Rp 4.000         Rp 12.000 ',
        'Minyak Goreng Sawit 1L           ',
        '  1 x Rp 16.500        Rp 16.500 ',
        'Biskuit Roma Kelapa 300g         ',
        '  1 x Rp 8.500         Rp  8.500 ',
        divider,
        'Subtotal             : Rp 43.000 ',
        'Diskon Promo Member  : -Rp 3.000 ',
        'PPN (11%)            : Rp  4.400 ',
        doubleDivider,
        'TOTAL AKHIR          : Rp 44.400 ',
        'Bayar (Tunai)        : Rp 50.000 ',
        'KEMBALIAN            : Rp  5.600 ',
        doubleDivider,
        'Metode: Tunai Cash (Laci Terbuka)',
        'Status: LUNAS & TERCATAT BUKU BESAR',
        '',
        '  TERIMA KASIH TELAH BERBELANJA  ',
        ' Barang dibeli dapat ditukar 1x24',
        '     jam sertakan struk ini.     ',
        '================================',
        '   [ESC/POS Thermal Paper Feed]  ',
      ].join('\n');
    } else {
      return [
        '   REKAPITULASI CLOSING SHIFT    ',
        '      TOKO BERKAH SEJAHTERA      ',
        doubleDivider,
        'No Dokumen : CLS-20260915-01     ',
        'Shift      : Shift 1 (Pagi)      ',
        'Kasir      : Siti Rahma          ',
        'Waktu Buka : 15/09/2026 08:00    ',
        'Waktu Tutup: 15/09/2026 16:00    ',
        divider,
        'Modal Awal Laci      : Rp   500.000',
        'Total Transaksi Kasir: 42 Trx    ',
        divider,
        'Penjualan Tunai      : Rp 2.450.000',
        'Penjualan QRIS       : Rp 1.400.000',
        'Penjualan Debit      : Rp   450.000',
        doubleDivider,
        'TOTAL OMZET SHIFT    : Rp 4.300.000',
        divider,
        'Fisik Kas di Laci    : Rp 2.950.000',
        '(Modal Awal + Kas Tunai Masuk)   ',
        'Selisih Kas Fisik    : Rp         0',
        'STATUS AUDIT         : SEIMBANG  ',
        doubleDivider,
        'Tanda Tangan Kasir : Siti Rahma  ',
        'Tanda Tangan Spv   : Hendra K.   ',
        '   [ESC/POS Thermal Paper Feed]  ',
      ].join('\n');
    }
  };

  const handleDownloadTxt = () => {
    const text = generateRawReceiptText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Struk_Thermal_${receiptType}_${paperWidth}_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setPrintStatus('File Struk Raw TXT (ESC/POS) berhasil diunduh.');
    setTimeout(() => setPrintStatus(null), 3000);
  };

  const handlePrintReceipt = () => {
    setPrintStatus('Perintah cetak thermal dikirim ke printer Bluetooth...');
    setTimeout(() => {
      window.print();
      setPrintStatus('Cetak thermal berhasil diproses.');
      setTimeout(() => setPrintStatus(null), 3000);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-[#081A33] border-2 border-[#111827] text-white max-w-3xl w-full p-4 sm:p-6 shadow-[8px_8px_0px_0px_#FF7A00] relative max-h-[95vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 flex-shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF7A00] font-bold uppercase mb-1">
              <Printer className="w-3.5 h-3.5" />
              <span>STRUK THERMAL & KONEKSI BLUETOOTH PRINTER</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Simulator Struk Kasir & Bluetooth ESC/POS
            </h2>
            <p className="text-xs text-gray-300 mt-0.5">
              Dukungan langsung printer Bluetooth 58mm & 80mm tanpa driver khusus.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-white/20 hover:border-white text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bluetooth Device Strip */}
        <div className="mt-3 p-3 bg-[#0d2747] border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
            <div>
              <span className="text-gray-400 block text-[10px]">Perangkat Terhubung:</span>
              <span className="font-bold text-white flex items-center gap-1.5">
                <Bluetooth className="w-3.5 h-3.5 text-blue-400" />
                {connectedPrinter}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block text-right pr-2 border-r border-white/10">
              <span className="text-gray-400 text-[10px] block">Baterai & Kertas:</span>
              <span className="text-emerald-400 font-bold">{printerBattery}% • Siap</span>
            </div>

            <button
              onClick={handleScanBluetooth}
              disabled={isScanningBt}
              className="px-2.5 py-1.5 bg-blue-900/60 hover:bg-blue-800 border border-blue-500 text-blue-200 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3 h-3 ${isScanningBt ? 'animate-spin' : ''}`} />
              <span>{isScanningBt ? 'Scanning...' : 'Cari Printer BT'}</span>
            </button>

            <button
              onClick={handleFeedPaper}
              className="px-2.5 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-200 text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer"
              title="Feed Kertas 3 Baris"
            >
              <Zap className="w-3 h-3 text-[#FF7A00]" />
              <span>Feed Kertas</span>
            </button>
          </div>
        </div>

        {/* Options Selector Bar */}
        <div className="py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          
          {/* Format Type */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-gray-400 hidden sm:inline">Format:</span>
            <div className="flex gap-1 bg-[#0b213c] p-1 border border-white/10">
              <button
                onClick={() => setReceiptType('transaksi')}
                className={`px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                  receiptType === 'transaksi'
                    ? 'bg-[#FF7A00] text-white font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Struk Belanja Kasir
              </button>
              <button
                onClick={() => setReceiptType('closing_shift')}
                className={`px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                  receiptType === 'closing_shift'
                    ? 'bg-[#FF7A00] text-white font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Rekap Closing Shift (Z)
              </button>
            </div>
          </div>

          {/* Paper Width (58mm vs 80mm) */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-gray-400 hidden sm:inline">Lebar Roll:</span>
            <div className="flex gap-1 bg-[#0b213c] p-1 border border-white/10">
              <button
                onClick={() => setPaperWidth('58mm')}
                className={`px-2.5 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                  paperWidth === '58mm'
                    ? 'bg-white text-[#111827] font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                58 mm (Mobile)
              </button>
              <button
                onClick={() => setPaperWidth('80mm')}
                className={`px-2.5 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                  paperWidth === '80mm'
                    ? 'bg-white text-[#111827] font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                80 mm (Desktop)
              </button>
            </div>
          </div>

        </div>

        {printStatus && (
          <div className="my-2 p-2.5 bg-blue-900/40 border border-blue-400 text-blue-200 text-xs font-mono flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{printStatus}</span>
            </div>
            <span className="text-[10px] text-gray-300">ESC/POS Command Sent</span>
          </div>
        )}

        {/* Realistic Thermal Receipt Visual Preview */}
        <div className="flex-1 overflow-y-auto py-6 flex justify-center items-start bg-[#06152a] p-4">
          
          <div
            className={`bg-[#FFFEF8] text-[#111827] font-mono shadow-2xl transition-all relative border border-gray-300 ${
              paperWidth === '58mm' ? 'w-[310px] text-[11px] p-4 sm:p-5' : 'w-[420px] text-xs p-6 sm:p-7'
            }`}
          >
            {/* Serrated Top Edge (Paper Tear) */}
            <div className="absolute -top-2.5 left-0 right-0 h-3 bg-repeat-x overflow-hidden flex">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#FFFEF8]" />
              ))}
            </div>

            {/* Extra feed space if feed triggered */}
            {paperFeedCount > 0 && (
              <div className="h-6 border-b border-dashed border-gray-300 mb-2 flex items-center justify-center text-[9px] text-gray-400">
                [ +{paperFeedCount * 3} baris paper feed ]
              </div>
            )}

            {/* Receipt Content: Transaksi */}
            {receiptType === 'transaksi' && (
              <div>
                <div className="text-center space-y-0.5 pb-3 border-b-2 border-dashed border-gray-400">
                  <h3 className="font-extrabold text-sm sm:text-base tracking-tight text-[#111827]">
                    TOKO BERKAH SEJAHTERA
                  </h3>
                  <p className="text-[10px] text-gray-600">
                    Sistem Kasir Online Indonesia
                  </p>
                  <p className="text-[10px] text-gray-600">
                    Jl. Sudirman No.88, Jakarta Pusat
                  </p>
                  <p className="text-[10px] text-gray-600">
                    Telp / WA: 0812-3456-7890
                  </p>
                </div>

                <div className="py-2.5 border-b border-dashed border-gray-300 text-[10px] space-y-0.5">
                  <div className="flex justify-between">
                    <span>No: TRX-2026-0915-0842</span>
                    <span>15/09/2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kasir: Siti Rahma</span>
                    <span>14:28 WIB</span>
                  </div>
                  <div className="text-gray-500">Terminal: POS-01 (Offline-Sync OK)</div>
                </div>

                {/* Items List */}
                <div className="py-3 border-b-2 border-dashed border-gray-400 space-y-2">
                  <div>
                    <div className="font-bold">Indomie Goreng Original 85g</div>
                    <div className="flex justify-between text-gray-600">
                      <span>2 x Rp 3.000</span>
                      <span className="font-bold text-[#111827]">Rp 6.000</span>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold">Aqua Botol 600ml Dingin</div>
                    <div className="flex justify-between text-gray-600">
                      <span>3 x Rp 4.000</span>
                      <span className="font-bold text-[#111827]">Rp 12.000</span>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold">Minyak Goreng Sawit 1 Liter</div>
                    <div className="flex justify-between text-gray-600">
                      <span>1 x Rp 16.500</span>
                      <span className="font-bold text-[#111827]">Rp 16.500</span>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold">Biskuit Roma Kelapa 300g</div>
                    <div className="flex justify-between text-gray-600">
                      <span>1 x Rp 8.500</span>
                      <span className="font-bold text-[#111827]">Rp 8.500</span>
                    </div>
                  </div>
                </div>

                {/* Totals */}
                <div className="py-2.5 border-b-2 border-dashed border-gray-400 space-y-1">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal Produk (7 item)</span>
                    <span>Rp 43.000</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Diskon Member Promo</span>
                    <span>-Rp 3.000</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>PPN (11%)</span>
                    <span>Rp 4.400</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-sm pt-1 border-t border-gray-300 text-[#111827]">
                    <span>TOTAL BAYAR</span>
                    <span className="text-base text-[#FF7A00]">Rp 44.400</span>
                  </div>
                  <div className="flex justify-between text-gray-600 pt-1">
                    <span>Bayar Tunai (Cash)</span>
                    <span>Rp 50.000</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-900">
                    <span>KEMBALIAN</span>
                    <span>Rp 5.600</span>
                  </div>
                </div>

                {/* Payment info & QR Code */}
                <div className="pt-3 text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="p-2 border border-gray-400 bg-white inline-block">
                      <QrCode className="w-16 h-16 text-black" />
                    </div>
                  </div>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest">
                    Scan untuk cek struk elektronik (e-Receipt)
                  </p>
                  <p className="text-[10px] font-bold text-gray-800">
                    TERIMA KASIH TELAH BERBELANJA!
                  </p>
                  <p className="text-[9px] text-gray-500">
                    Barang yang sudah dibeli dapat ditukar maksimal 1x24 jam dengan membawa struk fisik ini.
                  </p>
                  <div className="pt-2 text-[8px] text-gray-400 font-mono">
                    Powered by Kasir Online • Roll: {paperWidth}
                  </div>
                </div>
              </div>
            )}

            {/* Receipt Content: Closing Shift (Z-Report) */}
            {receiptType === 'closing_shift' && (
              <div>
                <div className="text-center space-y-0.5 pb-3 border-b-2 border-dashed border-gray-400">
                  <h3 className="font-extrabold text-sm sm:text-base tracking-tight text-[#111827]">
                    REKAPITULASI CLOSING SHIFT
                  </h3>
                  <p className="text-[10px] text-gray-600">
                    TOKO BERKAH SEJAHTERA (KASIR 01)
                  </p>
                  <p className="text-[10px] text-gray-600">
                    LAPORAN Z-REPORT HARIAN
                  </p>
                </div>

                <div className="py-2.5 border-b border-dashed border-gray-300 text-[10px] space-y-0.5">
                  <div className="flex justify-between">
                    <span>Doc: CLS-20260915-01</span>
                    <span>Shift 1 (Pagi)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kasir: Siti Rahma</span>
                    <span>15/09/2026</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Buka: 08:00 WIB</span>
                    <span>Tutup: 16:00 WIB</span>
                  </div>
                </div>

                <div className="py-3 border-b-2 border-dashed border-gray-400 space-y-1.5 text-[10px]">
                  <div className="flex justify-between font-bold">
                    <span>Modal Awal Kas di Laci:</span>
                    <span>Rp 500.000</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Total Transaksi Shift:</span>
                    <span className="font-bold">42 Transaksi</span>
                  </div>
                  <div className="pt-1 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span>Penjualan Tunai:</span>
                      <span className="font-bold">Rp 2.450.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Penjualan QRIS Dinamis:</span>
                      <span className="font-bold">Rp 1.400.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Penjualan Kartu Debit:</span>
                      <span className="font-bold">Rp 450.000</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t-2 border-dashed border-gray-400 flex justify-between font-extrabold text-xs">
                    <span>TOTAL OMZET SHIFT</span>
                    <span className="text-[#FF7A00]">Rp 4.300.000</span>
                  </div>
                </div>

                <div className="py-3 border-b-2 border-dashed border-gray-400 space-y-1 text-[10px]">
                  <div className="flex justify-between">
                    <span>Kas Tunai Masuk:</span>
                    <span>Rp 2.450.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Modal Awal Laci:</span>
                    <span>Rp 500.000</span>
                  </div>
                  <div className="flex justify-between font-bold bg-amber-50 p-1 border border-amber-300">
                    <span>Target Fisik Kas:</span>
                    <span>Rp 2.950.000</span>
                  </div>
                  <div className="flex justify-between font-bold bg-emerald-50 p-1 border border-emerald-300 text-emerald-800">
                    <span>Hasil Hitung Fisik Laci:</span>
                    <span>Rp 2.950.000</span>
                  </div>
                  <div className="flex justify-between font-extrabold pt-1 text-emerald-700">
                    <span>SELISIH KAS (VARIANCE):</span>
                    <span>Rp 0 (SEIMBANG)</span>
                  </div>
                </div>

                <div className="pt-4 text-center space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-[9px]">
                    <div>
                      <p className="text-gray-500 mb-6">Kasir Yang Bertugas</p>
                      <p className="font-bold underline">Siti Rahma</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-6">Supervisor Toko</p>
                      <p className="font-bold underline">Hendra K.</p>
                    </div>
                  </div>
                  <div className="text-[8px] text-gray-400">
                    Status Shift: CLOSED & DIARSIPKAN KE BUKU BESAR
                  </div>
                </div>
              </div>
            )}

            {/* Serrated Bottom Edge (Paper Tear) */}
            <div className="absolute -bottom-2.5 left-0 right-0 h-3 bg-repeat-x overflow-hidden flex rotate-180">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#FFFEF8]" />
              ))}
            </div>

          </div>

        </div>

        {/* Modal Action Bar */}
        <div className="pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="text-xs font-mono text-gray-300 flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Format ESC/POS Standard • Support Android, iOS & Windows POS</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadTxt}
              className="px-3.5 py-2 border border-white/30 hover:border-white text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh Raw Struk (.txt)</span>
            </button>

            <button
              onClick={handlePrintReceipt}
              className="bg-[#FF7A00] hover:bg-[#e66e00] text-white text-xs font-mono font-bold px-4 py-2 transition-all flex items-center gap-1.5 cursor-pointer active:translate-y-0.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak ke Printer Thermal</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
