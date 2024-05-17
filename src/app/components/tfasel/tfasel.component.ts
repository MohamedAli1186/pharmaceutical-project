import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/DataModels/Order.model';
import { OrdersService } from 'src/app/servies/orders.service';

@Component({
  selector: 'app-tfasel',
  templateUrl: './tfasel.component.html',
  styleUrls: ['./tfasel.component.css'],
})
export class TfaselComponent {
  constructor(
    private activeatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {}
  order: Order | undefined;
  orderId: string = '';
  ngOnInit(): void {
    // Retrieve the OrderID from the route parameters
    this.activeatedRoute.paramMap.subscribe((params) => {
      this.orderId = String(params.get('id'));
      this.fetchOrderDetails();
    });
  }
  // orderNumber = '123456';
  // orderDate = '2024-05-15';
  // totalAmount = '500.00 USD';
  // paymentStatus = 'Paid';
  // paidAmount = '500.00 USD';
  // remainingAmount = '0.00 USD';
  // itemCount = 10;
  // received = 'Yes';
  // receiptDate = '2024-05-16';
  // paymentMethod = 'Credit Card';
  // soldUnits = ['Item 1', 'Item 2', 'Item 3']; // Example list of sold units
   showSoldUnits = false;

  toggleSoldUnits() {
    this.showSoldUnits = !this.showSoldUnits;
  }

  fetchOrderDetails(): void {
    this.ordersService.getOrders().subscribe((orders) => {
      this.order = orders.find((order) => order.orderId === this.orderId);
    });
  }
  back() {
    this.router.navigate(['talabat']);
  }
}
