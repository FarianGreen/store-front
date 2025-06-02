import { Injectable, signal } from '@angular/core';
import { Notification } from '../interfaces/notification.interface';
import { nanoid } from 'nanoid';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private _notifications = signal<Notification[]>([]);
  readonly notifications = this._notifications.asReadonly();

  show(message: string, type: Notification['type'] = 'info', timeout = 3000) {
    const notification: Notification = {
      id: nanoid(),
      message,
      type,
      timeout
    };

    this._notifications.update((list) => [...list, notification]);

    setTimeout(() => this.remove(notification.id), timeout);
  }

  remove(id: string) {
    this._notifications.update((list) => list.filter((n) => n.id !== id));
  }
}