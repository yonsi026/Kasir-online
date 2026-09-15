export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  qty: number;
  stock: number;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  cogs: number;
  stock: number;
  minStock: number;
  unit: string;
  status: 'Aman' | 'Menipis' | 'Habis';
}

export interface StockMovementRecord {
  type: string;
  amount: number;
  note: string;
  color: string;
}

export interface JournalRecord {
  account: string;
  type: 'Debit' | 'Credit';
  amount: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type PageId = 'beranda' | 'produk' | 'fitur' | 'cara-kerja' | 'bisnis' | 'laporan' | 'faq';
