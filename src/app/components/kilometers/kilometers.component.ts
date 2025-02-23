import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {MatDivider} from '@angular/material/divider';

declare var Odometer: any;

@Component({
  selector: 'app-kilometers',
  imports: [
    MatDivider
  ],
  templateUrl: './kilometers.component.html',
  styleUrl: './kilometers.component.scss'
})
export class KilometersComponent implements AfterViewInit {
  @ViewChild('totalKilometers', {static: false}) divTotalKilometers!: ElementRef;
  @ViewChild('kilometers', {static: false}) divKilometers!: ElementRef;

  kilometers: number = 0;
  totalKilometers: number = 250000;

  ngAfterViewInit() {
    new Odometer({
      el: this.divTotalKilometers.nativeElement,
      value: this.totalKilometers
    });

    new Odometer({
      el: this.divKilometers.nativeElement,
      value: this.kilometers
    });
  }

  updateTotalKilometers(value: number) {
    this.totalKilometers = value;
    this.divTotalKilometers.nativeElement.innerHTML = value;
  }

  updateKilometers(value: number) {
    this.kilometers = value;
    this.divKilometers.nativeElement.innerHTML = value;
  }
}
