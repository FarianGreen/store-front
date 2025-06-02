import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './shared/layout/header';
import { Notification } from './features/notifications/notification';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    Header,
    Notification
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'storefront';
}
