
export type Page = 'home' | 'products' | 'cart' | 'login' | 'dashboard' | 'vipLogin' | 'vipDashboard' | 'wishlist' | 'showroom' | 'productDetail' | 'operations' | 'warehouse' | 'privacy' | 'security_setup';

export type UserRole = 'admin' | 'ops' | 'developer' | 'gm' | 'vip';

export type User = {
  type: 'admin' | 'ops' | 'developer' | 'gm';
  email: string;
  isDefaultPassword?: boolean;
} | {
  type: 'vip';
  phone: string;
  name: string;
  creditLimit?: number;
};

export interface CategoryConfig {
    key: CategoryKey;
    label_ar: string;
    label_en: string;
    icon: string;
    order: number;
    isVisible: boolean;
}

export type CategoryKey = 'fruits' | 'vegetables' | 'herbs' | 'qassim' | 'dates' | 'packages' | 'seasonal' | 'nuts' | 'flowers' | 'custom';

export interface Product {
  id: number;
  name_ar: string;
  name_en: string;
  category: CategoryKey;
  price: number;
  wholesale_price?: number;
  min_order_quantity?: number;
  original_price?: number;
  image: string;
  unit_ar: string; 
  unit_en: string;
  stock_quantity: number;
  min_threshold: number;
  supplier_info?: string;
}

export interface ShowroomItem {
  id: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  videoUrl?: string;
  section_ar?: string;
  section_en?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface PromotionalAd {
  id: string;
  title_ar: string;
  title_en: string;
  description_ar?: string;
  description_en?: string;
  image: string;
  link?: string;
  type: 'hero' | 'grid' | 'popup';
  isActive: boolean;
}

export interface Invoice {
  id: string;
  orderId?: string;
  clientId?: string;
  customerName: string;
  date: string;
  dueDate?: string;
  items: any[];
  subtotal: number;
  shipping?: number;
  tax?: number;
  total: number;
  status: 'Paid' | 'Pending Payment' | 'Overdue';
  status_ar: string;
  type: 'Sales' | 'Purchase';
}

export interface VipTransaction {
    id: string;
    clientId: string;
    date: string;
    description_ar: string;
    description_en: string;
    debit: number;
    credit: number;
    balance: number;
}

export interface VipClient {
  id: string;
  phone: string;
  companyName: string;
  contactPerson: string;
  shippingAddress: string;
  creditLimit: number;
  currentBalance: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface StockMovement {
  id: string;
  productId: number;
  type: 'IN' | 'OUT' | 'ADJUST';
  quantity: number;
  reason: string;
  date: string;
  user: string;
}

export interface DeliveryAgent {
  id: string;
  name: string;
  phone: string;
  vehicle_type: 'truck' | 'car' | 'bike';
  status: 'online' | 'offline' | 'delivering';
  rating: number;
  completed_orders: number;
  location: { lat: number; lng: number };
}

export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

// Added missing types: Review, Payment, Order to fix component errors
export interface Review {
  id: string;
  productId: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Payment {
  id: string;
  invoiceId: string;
  clientId: string;
  date: string;
  amount: number;
  method: string;
  method_ar: string;
  status: 'Pending' | 'Confirmed' | 'Failed';
}

export interface Order {
  id: string;
  clientId: string;
  customerName: string;
  date: string;
  status: string;
  total: number;
  items: CartItem[];
}
