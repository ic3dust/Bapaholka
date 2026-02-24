import { Routes } from '@angular/router';
import { Filter } from './pages/filter/filter';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'filter', component: Filter },
];