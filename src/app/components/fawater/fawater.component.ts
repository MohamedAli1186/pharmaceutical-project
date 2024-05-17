import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/DataModels/Invoice.model';
import { InvoicesService } from 'src/app/servies/invoices.service';

@Component({
  selector: 'app-fawater',
  templateUrl: './fawater.component.html',
  styleUrls: ['./fawater.component.css']
})
export class FawaterComponent {
  invoices: Invoice[] = [];
  selectedPaymentRef: Set<string> = new Set<string>();

  constructor(private invoicesService: InvoicesService, private router: Router) {}
  ngOnInit(): void {
    this.invoicesService.getOrders().subscribe(data => {
      this.invoices = data;
    });
  }

  viewInvoiceDetails(invoceID: string): void {
    this.router.navigate(['/tfaselFatora', invoceID]);
  }
  // Toggle selection of an order
  toggleSelection(paymentRef: string): void {
    if (this.selectedPaymentRef.has(paymentRef)) {
      this.selectedPaymentRef.delete(paymentRef);
    } else {
      this.selectedPaymentRef.add(paymentRef);
    }
  }

  // Example method to perform an action on selected orders
  processSelected(state : boolean): void {
    const selectedInvoices = this.invoices.filter(invoice => this.selectedPaymentRef.has(invoice.PaymentReference));
    this.invoices = this.invoices.filter(invoice => !this.selectedPaymentRef.has(invoice.PaymentReference));
    if(state){
    alert("تم قبول الفواتير");
    }else{
      alert("تم رفض الفواتير");
    }
    
  }
}
