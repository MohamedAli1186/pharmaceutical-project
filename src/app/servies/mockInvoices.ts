import { Invoice } from "../DataModels/Invoice.model";

const mockInvoices : Invoice[] = [
    {
      PaymentReference: 'PAY123456',
      PaymentOption: 'كاش',
      InvoiceDate: new Date('2024-05-10'),
      InvoiceAmount: 1200.00,
      OrganizationID: 1,
      OrganizationName: 'Tech Corp',
      OrderID: 12345,
      OrderDate: new Date('2024-05-01'),
      Username: 'john_doe'
    },
    {
      PaymentReference: 'PAY789012',
      PaymentOption: 'حساب بنكي',
      InvoiceDate: new Date('2024-04-20'),
      InvoiceAmount: 800.00,
      OrganizationID: 2,
      OrganizationName: 'Office Supplies Co.',
      OrderID: 67890,
      OrderDate: new Date('2024-04-15'),
      Username: 'jane_smith'
    },
    {
      PaymentReference: 'PAY345678',
      PaymentOption: 'رصيد',
      InvoiceDate: new Date('2024-03-25'),
      InvoiceAmount: 450.00,
      OrganizationID: 3,
      OrganizationName: 'Retail Hub',
      OrderID: 11223,
      OrderDate: new Date('2024-03-20'),
      Username: 'mark_jones'
    }
  ];
export default mockInvoices;