import { Component, inject } from '@angular/core';
import { NotificationService } from './services';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.scss'
})
export class Notification {
  protected notifications = inject(NotificationService).notifications;
}