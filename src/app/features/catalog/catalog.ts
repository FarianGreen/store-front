import { Component } from '@angular/core';
import { ProductCard } from '../../shared/ui/product-card';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class Catalog {

}
