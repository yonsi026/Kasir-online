import { useState, useEffect } from 'react';

export interface BusinessProfile {
  // Store / Business identity
  businessName: string;
  address: string;
  phone: string;
  npwp: string;
  nib: string;
  ownerName: string;
  preparedBy: string;
  period: string;

  // PDF Header & Kop Surat strings (specifically requested by user)
  pdfHeaderTitle: string; // Default: 'KASIR ONLINE'
  pdfHeaderSubtitle1: string; // Default: 'SISTEM INTEGRASI KASIR POS & AKUNTANSI GANDA RESMI'
  pdfHeaderSubtitle2: string; // Default: 'Standard SAK EMKM Indonesia • Standar Keuangan Terverifikasi'
  pdfDocTag: string; // Default: 'DOKUMEN RESMI USAHA'
  pdfDocRef: string; // Default: 'Doc Ref: KSR-RPT-2026-0942'
  pdfPrintDate: string; // Default: '15 September 2026'
}

export const DEFAULT_BUSINESS_PROFILE: BusinessProfile = {
  businessName: 'Toko Berkah Sejahtera',
  address: 'Ruko Sentra Niaga Blok B-12, Jl. Sudirman No. 88, Jakarta Pusat',
  phone: '0812-3456-7890',
  npwp: '81.293.441.9-012.000',
  nib: '912000412891',
  ownerName: 'Bpk. Hendra Kurniawan',
  preparedBy: 'Siti Rahma, A.Md.Ak.',
  period: 'September 2026',

  pdfHeaderTitle: 'KASIR ONLINE',
  pdfHeaderSubtitle1: 'SISTEM INTEGRASI KASIR POS & AKUNTANSI GANDA RESMI',
  pdfHeaderSubtitle2: 'Standard SAK EMKM Indonesia • Standar Keuangan Terverifikasi',
  pdfDocTag: 'DOKUMEN RESMI USAHA',
  pdfDocRef: 'Doc Ref: KSR-RPT-2026-0942',
  pdfPrintDate: '15 September 2026',
};

const STORAGE_KEY = 'kasir_online_business_profile_v2';
const UPDATE_EVENT = 'kasir_online_profile_changed';

export function getBusinessProfile(): BusinessProfile {
  if (typeof window === 'undefined') return DEFAULT_BUSINESS_PROFILE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_BUSINESS_PROFILE;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_BUSINESS_PROFILE, ...parsed };
  } catch {
    return DEFAULT_BUSINESS_PROFILE;
  }
}

export function saveBusinessProfile(profile: Partial<BusinessProfile>): BusinessProfile {
  const current = getBusinessProfile();
  const updated: BusinessProfile = { ...current, ...profile };
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent(UPDATE_EVENT, { detail: updated }));
    } catch (e) {
      console.error('Failed to save business profile', e);
    }
  }
  return updated;
}

export function resetBusinessProfile(): BusinessProfile {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new CustomEvent(UPDATE_EVENT, { detail: DEFAULT_BUSINESS_PROFILE }));
    } catch (e) {
      console.error('Failed to reset business profile', e);
    }
  }
  return DEFAULT_BUSINESS_PROFILE;
}

/**
 * React hook to subscribe to business profile changes across components
 */
export function useBusinessProfile() {
  const [profile, setProfile] = useState<BusinessProfile>(getBusinessProfile);

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<BusinessProfile>;
      if (customEvent.detail) {
        setProfile(customEvent.detail);
      } else {
        setProfile(getBusinessProfile());
      }
    };

    window.addEventListener(UPDATE_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener(UPDATE_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const update = (changes: Partial<BusinessProfile>) => {
    const updated = saveBusinessProfile(changes);
    setProfile(updated);
    return updated;
  };

  const reset = () => {
    const defaultVal = resetBusinessProfile();
    setProfile(defaultVal);
    return defaultVal;
  };

  return { profile, update, reset };
}
