import { Component } from "@angular/core";
import { Header } from "../../components/header/header";
import { Search } from '../../components/search/search';
import { CardPanel } from "../../components/card-panel/card-panel";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Search, Header,CardPanel],
  template:`
  <app-header></app-header>
  <app-search></app-search>
  <app-card-panel></app-card-panel>
  `,
})
export class Home {}