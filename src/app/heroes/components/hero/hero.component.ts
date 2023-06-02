import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getheroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    const names: string[] = ['spiderman', 'ironman', 'hulk'];
    let nameIndex = Math.floor(Math.random() * names.length);
    this.name = names[nameIndex];
  }

  public changeAge(): void {
    let newAge = Math.floor(Math.random() * (45 + 1));
    this.age = newAge;
  }

  public reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
