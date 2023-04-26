import { Pipe, PipeTransform } from '@angular/core';
import {Timestamp} from "@angular/fire/firestore";
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'dateShow'
})
export class DateShowPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {
  }
  transform(date: Timestamp ): string {
    return this.datePipe.transform(date.toMillis(), 'shortTime')??'';
  }

}
