import { Component } from "@angular/core";
import { Header } from "../../components/header/header";
import { Search } from '../../components/search/search';

@Component({
  selector: 'app-home',
  imports: [Search, Header],
  template:`
  <app-header></app-header>
  <app-search></app-search>
  `,
  styleUrl:'home.css',
  standalone: true
})
export class Home {}