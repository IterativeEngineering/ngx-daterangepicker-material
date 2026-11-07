import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs/esm';
import utc from '../../../../plugin-overrides/utc';
import * as fr from 'dayjs/locale/fr';
dayjs.extend(utc);

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'locale',
  templateUrl: './locale.component.html'
})
export class LocaleComponent implements OnInit {
  selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs };
  locale = fr;
  constructor() {}

  ngOnInit(): void {}
}
