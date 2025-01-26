import {Pipe, PipeTransform} from '@angular/core';
import {GearRatio} from '../enum/gear-ratio';

@Pipe({
  name: 'gearRatio'
})
export class GearRatioPipe implements PipeTransform {

  transform(value: GearRatio): string {
    switch (value) {
      case GearRatio.GEAR_RATIO_1:
        return '1';
      case GearRatio.GEAR_RATIO_2:
        return '2';
      case GearRatio.GEAR_RATIO_3:
        return '3';
      case GearRatio.GEAR_RATIO_4:
        return '4';
      case GearRatio.GEAR_RATIO_5:
        return '5';
      case GearRatio.REVERSE:
        return 'R';
      case GearRatio.NEUTRAL:
        return 'N';
    }

  }
}
