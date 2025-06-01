import { Component, inject } from '@angular/core';
import { ProductCard } from '../../shared/ui/product-card';
import { CatalogService } from './services/catalog-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCard, CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  private catalogServise = inject(CatalogService);

  protected products = this.catalogServise.products;


}
