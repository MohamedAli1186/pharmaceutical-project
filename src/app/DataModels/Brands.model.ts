export class Brands {
  constructor(
    CatalogID: number,
    CatalogName: string,
    BrandID: string,
    Brandname: string,
    LeadingTime: Date,
    PaymentOption:  'Cash' | 'Credit' | 'Balance',
    ActiveBrand: BinaryData
  ) {}
}
