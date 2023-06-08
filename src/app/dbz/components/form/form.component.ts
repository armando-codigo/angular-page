import { Component, EventEmitter, Output } from '@angular/core';
import { Chara } from '../../interfaces/chara.interface';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output()
  public onCharAdd: EventEmitter<Chara> = new EventEmitter();

  public character: Chara = {
    name: '',
    power: 10,
  };

  public addChar(): void {
    debugger;

    console.log(this.character);
    this.onCharAdd.emit(this.character);
    this.character = { name: '', power: 0 };
  }
}
