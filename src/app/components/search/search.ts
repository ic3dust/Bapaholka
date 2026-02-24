import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './searchComp.html',
  styleUrl: './search.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports:[RouterModule,TranslateModule]
})
export class Search {

}
