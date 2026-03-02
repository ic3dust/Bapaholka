import { Component,ViewEncapsulation } from '@angular/core';
import { Canvas } from '../canvas/canvas';

@Component({
  selector: 'app-copyright',
  standalone:true,
  templateUrl:'./copyright.html',
  styleUrl:'./copyright.css',
  encapsulation:ViewEncapsulation.None,
  imports: [Canvas]
})
export class Copyright {

}
