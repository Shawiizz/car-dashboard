import { Routes } from '@angular/router';
import {CounterComponent} from './components/speedometer/counter.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'speeds',
    component: DashboardComponent
  }
];
