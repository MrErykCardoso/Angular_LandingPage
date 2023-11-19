import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp8-quadro-frase',
  templateUrl: './comp8-quadro-frase.component.html',
  styleUrls: ['./comp8-quadro-frase.component.css'],

  template: '<div>{{ frase }}</div>',
})
export class Comp8QuadroFraseComponent {
  @Input() frase: string = '';
}
