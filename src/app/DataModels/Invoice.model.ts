export class Invoice {
  constructor(
    PaymentReference: string,
    PaymentOption: 'Cash' | 'Credit' | 'Balance',
    InvoiceDate: Date,
    InvoiceAmount: number,
    OrganizationID: number,
    OrganizationName: string,
    OrderID: number,
    OrderDate: Date,
    Username: string
  ) {}
}
