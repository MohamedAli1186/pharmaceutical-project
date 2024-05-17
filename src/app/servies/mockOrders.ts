import { Order } from "../DataModels/Order.model";

const mockOrders: Order[] = [
    {
      organizationId: 1,
      organizationName: "Tech Corp",
      orderId: "ORD12345",
      orderDate: new Date('2024-05-01'),
      username: "john_doe",
      paid: 'مدفوع جزئيا',
      orderAmount: 1000.00,
      paymentReference: 98765,
      paidAmount: 500.00,
      remainingAmount: 500.00,
      itemsCount: 2,
      received: true,
      receiveTime: new Date('2024-05-03'),
      skus: [
        {
          id: 101,
          count: 1,
          name: "Laptop",
          price: 800.00,
          extendedPrice1: 800.00,
          extendedPrice2: 900.00,
        },
        {
          id: 102,
          count: 1,
          name: "Mouse",
          price: 200.00,
          extendedPrice1: 200.00,
          extendedPrice2: 220.00,
        }
      ]
    },
    {
      organizationId: 2,
      organizationName: "Office Supplies Co.",
      orderId: "ORD67890",
      orderDate: new Date('2024-04-15'),
      username: "jane_smith",
      orderAmount: 450.00,
      paid: 'مدفوع كليا',
      paymentReference: 12345,
      paidAmount: 450.00,
      remainingAmount: 0.00,
      itemsCount: 3,
      received: false,
      receiveTime: new Date('2024-04-17'),
      skus: [
        {
          id: 201,
          count: 2,
          name: "Printer Ink",
          price: 100.00,
          extendedPrice1: 200.00,
          extendedPrice2: 220.00,
        },
        {
          id: 202,
          count: 5,
          name: "Notebooks",
          price: 50.00,
          extendedPrice1: 250.00,
          extendedPrice2: 275.00,
        }
      ]
    }
  ];
  
  // Exporting mock orders for use in services
  export default mockOrders;