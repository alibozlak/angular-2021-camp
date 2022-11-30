import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product1 = { productId: 1, productName: "Glass", categoryId: 4, unitPrice: 35.25 }
  product2 = { productId: 2, productName: "Mouse", categoryId: 4, unitPrice: 35.25 }
  product3 = { productId: 3, productName: "Keyboard", categoryId: 4, unitPrice: 35.25 }
  product4 = { productId: 4, productName: "Camera", categoryId: 4, unitPrice: 35.25 }
  product5 = { productId: 5, productName: "Table", categoryId: 4, unitPrice: 35.25 }

  products = [this.product1, this.product2, this.product3, this.product4, this.product5];
}
