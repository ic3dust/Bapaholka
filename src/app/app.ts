import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Search } from './components/search/search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Search],
  template: `
    <app-header></app-header>
    <app-search></app-search>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('web');
}
