import {Component, Input, OnInit} from '@angular/core';
import {GearRatio} from '../../enum/gear-ratio';
import {GearRatioPipe} from '../../pipe/gear-ratio.pipe';
import {UnitProps} from '../../interfaces/unit';
import {UNITS} from '../../config/unit';

@Component({
  selector: 'app-counter',
  imports: [
    GearRatioPipe
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {
  @Input() unit!: UnitProps;
  @Input() maxValue!: number;

  value: number = 0;
  gearRatio: GearRatio = GearRatio.NEUTRAL;

  barDegree: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.setSpeed(this.value + 1)
    }, 500)

    console.log(this.calculateSpeedGraduationGaps())
  }

  private calculateBarDegree() {
    this.barDegree = (this.value / this.maxValue) * (this.unit === UNITS.BAR ? 230 : 208);
  }

  setSpeed(speed: number) {
    if (speed > this.maxValue) return
    this.value = speed;
    this.calculateBarDegree();
  }

  calculateSpeedGraduationGaps(): number[] {
    const gaps: number[] = [0];
    if (this.maxValue < 100) {
      for (let i = 1; i <= this.maxValue; i++) {
        gaps.push(i);
      }
    } else if (this.maxValue < 1000) {
      for (let i = 10; i <= this.maxValue; i += 10) {
        gaps.push(i);
      }
    } else {
      for (let i = 1; i <= this.maxValue / 1000; i++) {
        gaps.push(i);
      }
    }
    return gaps;
  }

  protected readonly UNITS = UNITS;
}
