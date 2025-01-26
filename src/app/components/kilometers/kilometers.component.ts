import { Component } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-kilometers',
  imports: [
    MatCard,
    MatCardContent,
    MatDivider
  ],
  templateUrl: './kilometers.component.html',
  styleUrl: './kilometers.component.scss'
})
export class KilometersComponent {

}
