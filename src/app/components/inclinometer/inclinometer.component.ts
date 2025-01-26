import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-inclinometer',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './inclinometer.component.html',
  styleUrl: './inclinometer.component.scss'
})
export class InclinometerComponent implements OnInit {
  @Input() position!: 'left' | 'right';

  rightRotations: number[] = this.calculateRotations(19, 11.125, 9);
  leftRotations: number[] = this.calculateRotations(111, -11.125, 9);

  degree: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.degree++;
    }, 500)
  }

  calculateRotations(start: number, step: number, count: number): number[] {
    const rotations: number[] = [];
    for (let i = 0; i < count; i++) {
      const rotation = (start - i * step + 360) % 360;
      rotations.push(rotation);
    }
    return rotations;
  }

  getGraduationByIndex(index: number): number {
    switch (index) {
      case 0:
        return 40;
      case 1:
        return 30;
      case 2:
        return 20;
      case 3:
        return 10;
      case 4:
        return 0;
      case 5:
        return 10;
      case 6:
        return 20;
      case 7:
        return 30;
      case 8:
        return 40;
      default:
        return 0;
    }
  }
}
