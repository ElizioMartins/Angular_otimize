import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BotaoSfComponent } from './Botoes/botao-sf.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { Schedule_SfComponent } from './Schedule/schedule.component';
import { ModalSfComponent } from './modal-sf/modal-sf.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { AppRoutingModule } from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent, BotaoSfComponent, Schedule_SfComponent, ModalSfComponent, ModalSfComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, CommonModule, ScheduleModule, DialogModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
