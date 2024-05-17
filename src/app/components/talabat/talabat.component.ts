import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/DataModels/Order.model';
import { OrdersService } from 'src/app/servies/orders.service';

@Component({
  selector: 'app-talabat',
  templateUrl: './talabat.component.html',
  styleUrls: ['./talabat.component.css']
})
export class TalabatComponent {
  orders: Order[] = [];
  selectedOrderIds: Set<string> = new Set<string>();

  constructor(private ordersService: OrdersService, private router: Router) {}
  ngOnInit(): void {
    this.ordersService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  viewOrderDetails(orderId: string): void {
    this.router.navigate(['/tfasel', orderId]);
  }
  // Toggle selection of an order
  toggleSelection(orderId: string): void {
    if (this.selectedOrderIds.has(orderId)) {
      this.selectedOrderIds.delete(orderId);
    } else {
      this.selectedOrderIds.add(orderId);
    }
  }

  // Example method to perform an action on selected orders
  processSelected(state : boolean): void {
    const selectedOrders = this.orders.filter(order => this.selectedOrderIds.has(order.orderId));
    console.log('Selected Orders:', selectedOrders); 
    this.orders = this.orders.filter(order => !this.selectedOrderIds.has(order.orderId));
    if(state){
    alert("تم قبول الطلبات");
    }else{
      alert("تم رفض الطلبات");
    }
    
  }
    // Add logic to handle selected orders
  }

