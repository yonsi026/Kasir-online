import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  Trash2, 
  Printer, 
  Check, 
  QrCode, 
  CreditCard, 
  Banknote, 
  ArrowRight,
  Receipt,
  RotateCcw
} from 'lucide-react';
import { CartItem } from '../types';

export const PosSection: React.FC = () => {
  const catalog = [
    { id: '1', name: 'Indomie Goreng', price: 3000, category: 'Makanan Instan', stock: 48 },
    { id: '2', name: 'Aqua Botol 600ml', price: 4000, category: 'Minuman Dingin', stock: 24 },
    { id: '3', name: 'Kopi Kapal Api Special', price: 5000, category: 'Minuman Sachet', stock: 15 },
    { id: '4', name: 'Minyak Goreng 1L', price: 16500, category: 'Sembako', stock: 12 },
    { id: '5', name: 'Gula Pasir 1kg', price: 17000, category: 'Sembako', stock: 18 },
    { id: '6', name: 'Biskuit Roma Kelapa', price: 8500, category: 'Snack', stock: 10 },
  ];

  // Default initial cart matching the prompt specification (Indomie x2, Aqua x3 = Rp 18.000)
  const [cart, setCart] = useState<CartItem[]>([
    { id: '1', name: 'Indomie Goreng', price: 3000, category: 'Makanan Instan', qty: 2, stock: 48 },
    { id: '2', name: 'Aqua Botol 600ml', price: 4000, category: 'Minuman Dingin', qty: 3, stock: 24 },
  ]);

  const [paymentMethod, setPaymentMethod] = useState<string>('Cash');
  const [discount, setDiscount] = useState<number>(0);
  const [showReceipt, setShowReceipt] = useState<boolean>(false);
  const [transactionCount, setTransactionCount] = useState<number>(128);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = Math.max(0, subtotal - discount);

  const addToCart = (product: typeof catalog[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handlePay = () => {
    if (cart.length === 0) return;
    setShowReceipt(true);
    setTransactionCount((c) => c + 1);
  };

  const resetOrder = () => {
    setShowReceipt(false);
    setCart([
      { id: '1', name: 'Indomie Goreng', price: 3000, category: 'Makanan Instan', qty: 2, stock: 48 },
      { id: '2', name: 'Aqua Botol 600ml', price: 4000, category: 'Minuman Dingin', qty: 3, stock: 24 },
    ]);
  };

  const paymentOptions = [
    { id: 'Cash', label: 'Cash (Tunai)', icon: Banknote },
    { id: 'QRIS', label: 'QRIS', icon: QrCode },
    { id: 'Transfer', label: 'Transfer Bank', icon: CreditCard },
    { id: 'E-Wallet', label: 'E-Wallet', icon: CreditCard },
    { id: 'Credit', label: 'Tempo / Kredit', icon: CreditCard },
    { id: 'Split Payment', label: 'Split Payment', icon: CreditCard },
  ];

  return (
    <section id="pos" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF7A00] uppercase">
            <span>// 04. SIMULASI TERMINAL KASIR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Kasir cepat. Transaksi lebih terkontrol.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Dari memilih produk hingga pembayaran, proses penjualan dibuat sederhana agar kasir dapat bekerja lebih cepat. Coba simulator di bawah ini secara langsung:
          </p>
        </div>

        {/* POS Workstation Container */}
        <div className="border border-[#111827] shadow-[6px_6px_0px_0px_#111827] bg-white overflow-hidden">
          
          {/* POS Top Bar */}
          <div className="bg-[#081A33] text-white px-5 py-3 border-b border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#FF7A00]" />
              <span className="font-bold text-sm tracking-wide">
                TERMINAL KASIR #01 — TOKO BERKAH UTAMA
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-gray-300">Kasir: Budi Santoso</span>
              <span className="text-emerald-400">● SHIFT AKTIF</span>
              <span className="text-gray-400">#INV-20260915-0{transactionCount}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]">
            
            {/* Left Column: Product Selector (Catalog) */}
            <div className="lg:col-span-7 p-6 space-y-4 bg-[#F8FAFC]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-lg text-[#111827]">
                    Katalog Produk
                  </h3>
                  <p className="text-xs text-gray-500">Klik item untuk menambah ke keranjang transaksi</p>
                </div>
                <span className="text-xs font-mono bg-white border border-[#E5E7EB] px-2.5 py-1 text-gray-600">
                  Barcode: Siap Scan
                </span>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {catalog.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => addToCart(item)}
                    className="p-3.5 bg-white border border-[#E5E7EB] hover:border-[#FF7A00] text-left transition-all group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 block mb-0.5">
                        {item.category}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-[#111827] group-hover:text-[#FF7A00] transition-colors leading-snug">
                        {item.name}
                      </h4>
                    </div>
                    <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                      <span className="font-mono font-bold text-xs text-[#111827]">
                        Rp {item.price.toLocaleString('id-ID')}
                      </span>
                      <div className="w-5 h-5 bg-gray-100 group-hover:bg-[#FF7A00] group-hover:text-white flex items-center justify-center transition-colors">
                        <Plus className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Payment Methods Selection */}
              <div className="pt-4 border-t border-[#E5E7EB]">
                <span className="text-xs font-mono font-bold text-gray-500 uppercase block mb-2">
                  Metode Pembayaran Tersedia:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {paymentOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setPaymentMethod(opt.id)}
                      className={`px-3 py-2 border text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                        paymentMethod === opt.id
                          ? 'border-[#FF7A00] bg-orange-50/70 text-[#FF7A00] font-bold'
                          : 'border-[#E5E7EB] bg-white text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {paymentMethod === opt.id && <Check className="w-3.5 h-3.5 text-[#FF7A00]" />}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Active Cart, Totals & Checkout */}
            <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-white">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                  <div className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-[#FF7A00]" />
                    <h3 className="font-extrabold text-base text-[#111827]">
                      Keranjang Kasir
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-gray-500">
                    {cart.reduce((s, i) => s + i.qty, 0)} Item
                  </span>
                </div>

                {/* Cart Items List */}
                <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1">
                  {cart.length === 0 ? (
                    <div className="py-12 text-center text-gray-400 text-xs font-mono">
                      Keranjang masih kosong. Pilih produk di sebelah kiri.
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="p-2.5 border border-[#E5E7EB] bg-[#F8FAFC] flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-[#111827] truncate">
                            {item.name}
                          </h5>
                          <span className="text-gray-500 font-mono text-[11px]">
                            @ Rp {item.price.toLocaleString('id-ID')}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 bg-white border border-[#E5E7EB] px-1 py-0.5">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="p-1 text-gray-500 hover:text-black cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono font-bold px-1.5 text-xs text-[#111827]">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="p-1 text-gray-500 hover:text-black cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="font-mono font-bold text-xs text-[#111827] min-w-[70px] text-right">
                          Rp {(item.price * item.qty).toLocaleString('id-ID')}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Price Calculation Breakdown */}
              <div className="pt-4 border-t border-[#E5E7EB] space-y-2 text-xs font-mono">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Diskon Penjualan</span>
                  <span className="text-emerald-600">Rp {discount.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Metode Bayar</span>
                  <span className="font-semibold text-[#111827]">{paymentMethod}</span>
                </div>

                <div className="pt-2 border-t border-[#111827] flex justify-between items-baseline">
                  <span className="font-sans font-extrabold text-sm text-[#111827] uppercase">
                    TOTAL
                  </span>
                  <span className="font-mono font-extrabold text-2xl text-[#FF7A00]">
                    Rp {total.toLocaleString('id-ID')}
                  </span>
                </div>

                {/* Bayar CTA */}
                <div className="pt-3">
                  <button
                    disabled={cart.length === 0}
                    onClick={handlePay}
                    className="w-full bg-[#FF7A00] hover:bg-[#E56E00] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-extrabold text-base py-3.5 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:translate-y-0.5"
                  >
                    <span>BAYAR SEKARANG</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Realistic Receipt Pop-up Modal */}
        {showReceipt && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border-2 border-[#111827] max-w-sm w-full p-6 space-y-4 shadow-[8px_8px_0px_0px_#111827]">
              
              {/* Receipt Header */}
              <div className="text-center space-y-1 border-b border-dashed border-gray-300 pb-4 font-mono text-xs">
                <div className="w-3 h-3 bg-[#FF7A00] mx-auto mb-2" />
                <h4 className="font-extrabold text-sm text-[#111827] font-sans">
                  TOKO BERKAH UTAMA
                </h4>
                <p className="text-gray-500 text-[11px]">Jl. Sudirman No. 45, Jakarta</p>
                <p className="text-gray-500 text-[11px]">Telp: 0812-3456-7890</p>
                <div className="text-[10px] text-gray-400 pt-1">
                  INV-20260915-0{transactionCount} • Kasir: Budi
                </div>
              </div>

              {/* Items in Receipt */}
              <div className="space-y-1.5 font-mono text-xs py-2 border-b border-dashed border-gray-300">
                {cart.map((i) => (
                  <div key={i.id} className="flex justify-between">
                    <span>{i.name} x{i.qty}</span>
                    <span>Rp {(i.price * i.qty).toLocaleString('id-ID')}</span>
                  </div>
                ))}
              </div>

              {/* Totals in Receipt */}
              <div className="font-mono text-xs space-y-1 border-b border-dashed border-gray-300 pb-3">
                <div className="flex justify-between font-bold text-[#111827]">
                  <span>TOTAL BELANJA</span>
                  <span>Rp {total.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>PEMBAYARAN</span>
                  <span>{paymentMethod}</span>
                </div>
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>STATUS</span>
                  <span>LUNAS</span>
                </div>
              </div>

              {/* Receipt Footer with Accounting Note */}
              <div className="bg-emerald-50 border border-emerald-200 p-2.5 text-[11px] font-mono text-emerald-800 space-y-0.5">
                <span className="font-bold block">✓ Eksekusi Otomatis Berhasil:</span>
                <span>• Stok fisik otomatis berkurang</span>
                <span>• Jurnal Debit Kas / Kredit Penjualan tercatat</span>
                <span>• Laporan Laba Rugi real-time terupdate</span>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={resetOrder}
                  className="flex-1 bg-[#111827] text-white py-2.5 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-black cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Transaksi Baru</span>
                </button>
                <button
                  onClick={() => setShowReceipt(false)}
                  className="border border-[#111827] text-[#111827] px-4 py-2.5 font-bold text-xs hover:bg-gray-100 cursor-pointer"
                >
                  Tutup
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
