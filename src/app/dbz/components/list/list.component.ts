import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Chara } from '../../interfaces/chara.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDeleteChar = new EventEmitter<string>();

  @Input('charactersChild')
  public charList2: Chara[] = [
    {
      id: 'N/A',
      name: 'No name',
      power: 0,
    },
  ];

  public onDelete(id: string): void {
    this.onDeleteChar.emit(id);
  }
}
