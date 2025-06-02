import { Injectable, signal, computed, inject } from '@angular/core';
import { CartItem } from '../interfaces/cart-item.interface';
import { NotificationService } from '../../../features/notifications/services';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly _items = signal<CartItem[]>([]);
  private notify = inject(NotificationService);

  readonly items = this._items.asReadonly();
  readonly total = computed(() =>
    this._items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  add(item: CartItem) {
    const existing = this._items().find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
      this._items.update(items => [...items]);
    } else {
      this._items.update(items => [...items, item]);
    }
    this.notify.show(`${item.name} добавлен в корзину`, 'success');
  }

  remove(id: number) {
    this._items.update(items => items.filter(i => i.id !== id));
  }

  clear() {
    this._items.set([]);
  }
}