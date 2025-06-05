import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Product } from '../interfaces/catalog-product.interfaces';


@Injectable({ providedIn: 'root' })// эта хрень делает сервис доступным глобально, для всего приложения (синглтон) и доступен в любом месте без дополнительного импорта в модули
export class CatalogService {
  
  private readonly _products = signal<Product[]>([
    {
      id: 1,
      title: 'Ноутбук ASUS ZenBook',
      price: 89990,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV8jiQWa3BEbcDWBkGFIvEBysCSHgoNdffAA&s',
    },
    {
      id: 2,
      title: 'Смартфон Samsung Galaxy',
      price: 49990,
      imageUrl: 'https://appdom.ru/image/cache/catalog/galaxy/s24ultra/samsung-galaxy-s24-ultra-black-titanium-1000x1000.jpg',
    },
    {
      id: 3,
      title: 'Наушники Sony WH-1000XM4',
      price: 22990,
      imageUrl: 'https://doctorhead.ru/upload/dev2fun.imagecompress/webp/iblock/969/auvd09sdtk24x7o8wb0zh0h49p2xo0t1/sony_wh1000xm5_black.webp',
    },
  ]);

  products = this._products.asReadonly(); // безопасный доступ

  constructor() {}
}