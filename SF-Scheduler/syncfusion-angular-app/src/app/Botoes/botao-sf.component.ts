import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-sf',
  template: `<button class="bt-custom2"  (click)="abrirModal()">Custom</button>`,
  styleUrls: ['./botao-sf.component.scss'],
})
export class BotaoSfComponent {
  abrirModal() {
    console.log('FOI----------------->>>>>');
  }
}
