import { Injectable } from '@angular/core';
import { Invoice } from '../DataModels/Invoice.model';
import { Observable, of } from 'rxjs';
import mockInvoices from './mockInvoices';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor() { }
  getOrders(): Observable<Invoice[]> {
    return of(mockInvoices);
  }
}
