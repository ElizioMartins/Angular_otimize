import { Component } from '@angular/core';

import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-schedule',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule> </ejs-schedule>`,
  styleUrls: ['./schedule.component.scss'],

})
export class Schedule_SfComponent  {

}

