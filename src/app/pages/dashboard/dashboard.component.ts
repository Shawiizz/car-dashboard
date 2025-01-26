import {Component} from '@angular/core';
import {CounterComponent} from '../../components/speedometer/counter.component';
import {UNITS} from '../../config/unit';
import {InclinometerComponent} from '../../components/inclinometer/inclinometer.component';
import {MiddleGraduationComponent} from '../../components/inclinometer/middle-graduation/middle-graduation.component';
import {KilometersComponent} from '../../components/kilometers/kilometers.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    CounterComponent,
    InclinometerComponent,
    MiddleGraduationComponent,
    KilometersComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  protected readonly UNITS = UNITS;
}
