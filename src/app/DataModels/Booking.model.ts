export class Booking {
  constructor(
    BookingID: number,
    BookingDate: Date,
    Paid: BinaryData,
    TotalPayment: number,
    VAT: number,
    ServiceFeesAmount: number,
    UserID: number,
    OrganizationID: number,
    ServiceID: number,
    Username: string,
    OrganizationName: string,
    ServiceAgentID: number,
    ServiceAgentname: string,
    Bookingstart: Date,
    BookingExpiry: Date,
    Attachement: string[] | null,
  ) {}
}
