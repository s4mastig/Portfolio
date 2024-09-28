import { Component } from '@angular/core';
import { HsBottomComponent } from './hs-bottom/hs-bottom.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [HsBottomComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
