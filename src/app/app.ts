import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './shared/layout/header';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    Header,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'storefront';
}
