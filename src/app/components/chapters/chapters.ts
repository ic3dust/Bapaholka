import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chapters',
  templateUrl:'./chapters.html',
  styleUrl:'./chapters.css',
  imports: [TranslateModule,RouterModule]
  
})
export class Chapters {

}
