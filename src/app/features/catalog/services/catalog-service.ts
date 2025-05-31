import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })// эта хрень делает сервис доступным глобально, для всего приложения (синглтон) и доступен в любом месте без дополнительного импорта в модули
export class CatalogService {
  
  private readonly _products = signal<Product[]>([
    {
      id: 1,
      title: 'Ноутбук ASUS ZenBook',
      price: 89990,
      imageUrl: 'https://via.placeholder.com/300x200?text=ASUS+ZenBook',
    },
    {
      id: 2,
      title: 'Смартфон Samsung Galaxy',
      price: 49990,
      imageUrl: 'https://via.placeholder.com/300x200?text=Galaxy+S',
    },
    {
      id: 3,
      title: 'Наушники Sony WH-1000XM4',
      price: 22990,
      imageUrl: 'https://via.placeholder.com/300x200?text=Sony+WH-1000XM4',
    },
  ]);

  products = this._products.asReadonly(); // безопасный доступ

  constructor() {}
}