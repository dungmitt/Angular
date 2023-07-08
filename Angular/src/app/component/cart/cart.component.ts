import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/Product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: IProduct[] = [];
  constructor() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems')!);
  }
}

