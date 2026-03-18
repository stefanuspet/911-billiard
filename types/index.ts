export type BranchTag = "VIP Room" | "Cafe" | "GrabFood" | "Lounge";

export interface Branch {
  id: string;
  zone: string;
  name: string;
  city: string;
  province: string;
  address: string;
  tables: number;
  tags: BranchTag[];
  mapsUrl: string;
  waNumber?: string;
  photo?: string;
  openHour: string;
  closeHour: string;
  lat?: number;
  lng?: number;
}

export interface MerchItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: "BESTSELLER" | "NEW";
  photo: string;
  tokopediaUrl: string;
}

export interface Promo {
  id: string;
  label: string;
  isHot: boolean;
  title: string;
  description: string;
  validInfo: string;
  photo: string;
}

export interface Tournament {
  id: string;
  day: string;
  month: string;
  year: string;
  name: string;
  location: string;
  prize: string;
  photo: string;
}
