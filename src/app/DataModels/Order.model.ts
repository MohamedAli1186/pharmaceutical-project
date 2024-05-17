// Product interface
export interface Order {
    organizationId: number; // Foreign Key
    organizationName: string;
    orderId: string; // Unique ID
    orderDate: Date;
    username: string;
    orderAmount: number; // Currency
    paid: 'مدفوع كليا' | 'مدفوع جزئيا' | 'غير مدفوع'; 
    paymentReference: number; // Foreign Key
    paidAmount: number; // Currency
    remainingAmount: number; // Currency
    itemsCount: number;
    received: boolean; // Binary/boolean
    receiveTime: Date;
    skus: SKU[]; // Array of SKU objects
  }
  
  // SKU interface
  export interface SKU {
    id: number; // Foreign Key
    count: number;
    name: string;
    price: number; // Currency
    extendedPrice1: number; // Currency
    extendedPrice2: number; // Currency
  }
  