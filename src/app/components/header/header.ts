import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './headerComp.html',
  styleUrl: './header.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None,//encapsulation: off, styles/subelements: can be assigned globally 
  imports:[RouterModule,TranslateModule]
})
export class Header {

  constructor(private translate: TranslateService){
    translate.use('en');
  }
  
  currentLang = "English";
  
  setLang(lang: string){
    this.translate.use(lang);
    this.currentLang=lang;
    document.body.className=lang;
  }



  isHidden = false;
  lastScroll = 0;

  @HostListener('window:scroll')
  onScroll(){
    const current = window.scrollY;
    this.isHidden = current>this.lastScroll && current>100;
    //header height=100px, window.scrollY - current scroll position in pixels (from up to down)
    this.lastScroll=current;
  }

}
