
import { VipClient, Invoice, Payment, VipTransaction } from '../../../types';

export const mockVipClients: VipClient[] = [
    { id: '966558828009', phone: '966558828009', companyName: 'فندق دلتا التجريبي', contactPerson: 'مدير المشتريات', shippingAddress: 'شارع المنار، جدة، المملكة العربية السعودية', creditLimit: 10000, currentBalance: 0 },
    { id: '966501234567', phone: '966501234567', companyName: 'مطاعم الواحة', contactPerson: 'الشيف التنفيذي', shippingAddress: 'طريق الملك عبدالعزيز، حي الزهراء، جدة', creditLimit: 5000, currentBalance: -363.08 },
    { id: '966598765432', phone: '966598765432', companyName: 'سوبرماركت النجمة', contactPerson: 'مسؤول قسم الخضار', shippingAddress: 'شارع الأمير سلطان، حي السلامة، جدة', creditLimit: 15000, currentBalance: 0 },
];

export const mockInvoices: Invoice[] = [
  {
    id: 'INV-DS-1024',
    orderId: 'DS-1024',
    clientId: '966501234567',
    customerName: 'مطاعم الواحة',
    date: '2024-05-28',
    dueDate: '2024-06-12',
    items: [
      { productId: 77, name_ar: 'بطاطس', name_en: 'Potato', quantity: 50, price: 3.5 },
      { productId: 62, name_ar: 'بصل احمر', name_en: 'Onion Red', quantity: 50, price: 3.5 },
      { productId: 87, name_ar: 'طماطم', name_en: 'Tomato Red', quantity: 20, price: 5.0 },
    ],
    subtotal: 450.50,
    shipping: 25.0,
    tax: 67.58,
    total: 543.08,
    status: 'Pending Payment',
    status_ar: 'بانتظار الدفع',
    type: 'Sales'
  },
  {
    id: 'PUR-DS-001',
    customerName: 'المورد العالمي للفواكه',
    date: '2024-06-01',
    items: [{ productId: 1, name_ar: 'تفاح سكري', quantity: 1000, price: 4.5 }],
    subtotal: 4500,
    total: 4500,
    status: 'Paid',
    status_ar: 'مدفوع',
    type: 'Purchase'
  },
   {
    id: 'INV-DS-1029',
    orderId: 'DS-1029',
    clientId: '966558828009',
    customerName: 'فندق دلتا التجريبي',
    date: '2024-06-02',
    dueDate: '2024-06-17',
    items: [
      { productId: 91, name_ar: 'بيض', name_en: 'Fresh Eggs XL', quantity: 2, price: 185 },
      { productId: 14, name_ar: 'بروكلي', name_en: 'Broccoli', quantity: 10, price: 16.0 },
    ],
    subtotal: 530.00,
    shipping: 30.00,
    tax: 79.50,
    total: 639.50,
    status: 'Paid',
    status_ar: 'مدفوع',
    type: 'Sales'
  }
];

export const mockPayments: Payment[] = [
    { 
        id: 'PAY-001', 
        invoiceId: 'INV-DS-1029', 
        clientId: '966558828009', 
        date: '2024-06-03', 
        amount: 639.50, 
        method: 'Bank Transfer',
        method_ar: 'تحويل بنكي',
        status: 'Confirmed' 
    }
];

export const mockTransactions: VipTransaction[] = [
    { id: 'TRN-01', clientId: '966501234567', date: '2024-05-22', description_ar: 'فاتورة طلب #DS-1021', description_en: 'Invoice for Order #DS-1021', debit: 320.00, credit: 0, balance: -320.00 },
    { id: 'TRN-02', clientId: '966501234567', date: '2024-05-25', description_ar: 'دفعة مقدمة', description_en: 'Advance Payment', debit: 0, credit: 500.00, balance: 180.00 },
    { id: 'TRN-03', clientId: '966501234567', date: '2024-05-28', description_ar: 'فاتورة #INV-DS-1024', description_en: 'Invoice #INV-DS-1024', debit: 543.08, credit: 0, balance: -363.08 },
];
