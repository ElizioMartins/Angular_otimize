import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Dialog, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-modalSf',
  template: `
    <div #container class="root-container"></div>

    <ejs-dialog
      id="dialog"
      #ejDialog
      header="Dialog"
      showCloseIcon="true"
      content="This is a dialog with header"

      width="250px"

    >
    </ejs-dialog>
  `,

  styleUrls: ['./modal-sf.component.scss'],
})
export class ModalSfComponent {


}
