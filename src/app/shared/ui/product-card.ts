import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../pages/catalog-page/interfaces/catalog-product.interfaces';
import { CartService } from '../../pages/cart-page/services';


@Component({
  selector: 'app-product-card',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() product!: Product;

  private cart = inject(CartService);

  addToCart() {
    this.cart.add({
      id: this.product.id,
      name: this.product.title,
      price: this.product.price,
      quantity: 1,
    });
  }
}
