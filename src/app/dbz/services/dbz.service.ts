import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Chara } from '../interfaces/chara.interface';

@Injectable({ providedIn: 'root' })
export class DBZService {
  // ? Toma las propiedades del form y crea nuevo objeto para hacer push
  public onNewChar(char: Chara): void {
    const newChar: Chara = {
      ...char,
      id: uuid(),
    };
    this.chars.push(newChar);
  }

  // ? Elimina del array el index traido desde la lista
  /*   public onDelete(index: number): void {
    const newChars = [...this.chars];
    newChars.splice(index, 1);
    this.chars = [...newChars];
  } */

  // ? Elimina del array el ID
  public deleteByID(id: string): void {
    this.chars = this.chars.filter((char) => char.id != id);
  }

  // ? Define el array de personajes
  public chars: Chara[] = [
    { id: uuid(), name: 'Krillin', power: 500 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
    { id: uuid(), name: 'Piccolo', power: 5500 },
    { id: uuid(), name: 'Raditz', power: 6500 },
    { id: uuid(), name: 'Nappa', power: 5000 },
  ];
}
