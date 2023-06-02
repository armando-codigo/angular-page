import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola counter</h1>
    <h3>Counter: {{ counter }}</h3>
    <button type="button" (click)="aumentar(+1)">Aumentar</button>
    <button type="button" (click)="decrementar(-1)">Decrementar</button>
    <button type="button" (click)="resetear()">Resetear</button> `,
})
export class CounterComponent {
  public counter: number = 1;

  public aumentar(numb: number): void {
    if (this.counter < 10) this.counter += numb;
    else alert('El maximo es 10');
  }
  public decrementar(numb: number): void {
    if (this.counter > 0) this.counter += numb;
    else alert('El minimo es 0');
  }
  public resetear(): void {
    this.counter = 1;
  }
}
