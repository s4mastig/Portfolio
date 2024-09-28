import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-aot',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './aot.component.html',
  styleUrl: './aot.component.scss'
})
export class AotComponent {

}
