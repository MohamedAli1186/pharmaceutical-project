export class Order {
  constructor(
    OrganizationID: number,
    OrganizationName: string,
    OrderID: number,
    OrderDate: Date,
    Username: string,
    OrderAmount: number,
    Paid: 'Total' | 'Partial' | 'NA',
    PaymentReference: number,
    PaidAmount: number,
    RemainingAmount: number,
    ItemsCOUNT: number,
    Received: number,
    Receivetime: number,
    SKU: number,
    SKUcount: number,
    SKUName: string,
    SKUPrice: number,
    SKUextendedprice1: number,
    SKUextendedprice2: number
  ) {}
}
