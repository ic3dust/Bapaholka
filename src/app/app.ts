import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('web');
    constructor(private translate: TranslateService) {
    translate.use('en');
  }
}
