import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  templateUrl: './searchComp.html',
  styleUrl: './search.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports:[TranslateModule]
})
export class Search {

}
