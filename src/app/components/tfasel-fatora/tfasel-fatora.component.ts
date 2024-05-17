import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/DataModels/Invoice.model';
import { InvoicesService } from 'src/app/servies/invoices.service';

@Component({
  selector: 'app-tfasel-fatora',
  templateUrl: './tfasel-fatora.component.html',
  styleUrls: ['./tfasel-fatora.component.css']
})
export class TfaselFatoraComponent {
  invoice: Invoice | undefined;
  paymentRef: string = '';
  constructor(
    private activeatedRoute: ActivatedRoute,
    private invoicesSrevice: InvoicesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Retrieve the OrderID from the route parameters
    this.activeatedRoute.paramMap.subscribe((params) => {
      this.paymentRef = String(params.get('id'));
      this.fetchOrderDetails();
    });
  }
  fetchOrderDetails(): void {
    this.invoicesSrevice.getOrders().subscribe((invoices) => {
      this.invoice = invoices.find((invoice) => invoice.PaymentReference === this.paymentRef);
    });
  }
  back() {
    this.router.navigate(['fawater']);
  }
}
