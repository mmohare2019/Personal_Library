import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.less'
})
export class HeroesComponent {
  hero = 'HERO';
}
