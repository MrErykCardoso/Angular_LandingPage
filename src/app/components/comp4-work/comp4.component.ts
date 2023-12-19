import { Component, Input } from '@angular/core';
import { Comp7ButtomLeroComponent } from '../comp7-buttom-lero/comp7-buttom-lero.component';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css'],
})
export class Comp4Component {
  fraseRecebida: string = '';

  receberFrase(frase: string) {
    this.fraseRecebida = frase;
  }
}
