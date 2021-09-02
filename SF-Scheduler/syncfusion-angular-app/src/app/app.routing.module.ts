import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { ModalSfComponent } from './modal-sf/modal-sf.component';

export const routes: Routes = [
  {path: 'modalSf', component: ModalSfComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
