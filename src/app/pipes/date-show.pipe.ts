import { Pipe, PipeTransform } from '@angular/core';
import {Timestamp} from "@angular/fire/firestore";

@Pipe({
  name: 'dateShow'
})
export class DateShowPipe implements PipeTransform {

  transform(date:Timestamp): unknown {
    return null;
  }

}
