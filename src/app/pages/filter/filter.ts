import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../../components/header/header';
import { Search } from '../../components/search/search';
import { Chapters } from '../../components/chapters/chapters';
import { Copyright } from '../../components/copyright/copyright';

@Component({
  selector: 'app-filter',
  templateUrl:'./filterComp.html',
  styleUrls:['./filter.css', '../../components/search/search.css', '../../components/chapters/chapters.css','../../components/copyright/copyright.css'],
  standalone:true,
  encapsulation:ViewEncapsulation.None,
  imports: [Header, Search, Chapters, Copyright,TranslateModule, RouterModule]
})
export class Filter {
/*
  param: string = '';
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params=>{
     this.param = params['param'];
      //this.loadItems();
    })
  }*/
}
