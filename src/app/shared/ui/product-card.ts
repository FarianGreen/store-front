import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../features/cart/services';
import { Product } from '../../features/catalog/interfaces/catalog-product.interfaces';

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
