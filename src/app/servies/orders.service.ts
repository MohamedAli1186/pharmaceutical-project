import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../DataModels/Order.model';
import mockOrders from './mockOrders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
   // Mock data
   getOrders(): Observable<Order[]> {
    return of(mockOrders);
  }
}
