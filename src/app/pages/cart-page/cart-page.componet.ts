import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './services';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart-page.componet.html',
  styleUrl: './cart-page.componet.scss'
})
export class Cart {
  private cart = inject(CartService);

  protected items = this.cart.items;
  protected total = this.cart.total;
}
