import { Component } from '@angular/core';

import { DBZService } from '../services/dbz.service';
import { Chara } from '../interfaces/chara.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DBZService) {}

  get charList(): Chara[] {
    return [...this.dbzService.chars];
  }

  onDeleteChar(id: string) {
    this.dbzService.deleteByID(id);
  }

  onNewChar(char: Chara) {
    this.dbzService.onNewChar(char);
  }
}
