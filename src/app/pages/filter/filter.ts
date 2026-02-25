import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../../components/header/header';
import { Search } from '../../components/search/search';

@Component({
  selector: 'app-filter',
  templateUrl:'./filterCOmp.html',
  styleUrls:['./filter.css', '../../components/search/search.css'],
  standalone:true,
  encapsulation:ViewEncapsulation.None,
  imports: [Header, Search, TranslateModule, RouterModule]
})
export class Filter {

}
