import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './headerComp.html',
  styleUrl: './header.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None,//encapsulation: off, styles/subelements: can be assigned globally 
  imports:[RouterModule]
})
export class Header {
  currentLang='English';
  
  setLang(lang: string){
    this.currentLang= lang;
  }
}
