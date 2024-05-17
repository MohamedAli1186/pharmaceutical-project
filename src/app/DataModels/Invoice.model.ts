export interface Invoice {
  
    PaymentReference: string,
    PaymentOption: 'كاش' | 'حساب بنكي' | 'رصيد',
    InvoiceDate: Date,
    InvoiceAmount: number,
    OrganizationID: number,
    OrganizationName: string,
    OrderID: number,
    OrderDate: Date,
    Username: string
}
