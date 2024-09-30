import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AotBottomComponent } from "./aot-bottom/aot-bottom.component";
import { ProfileScrollComponent } from './profile-scroll/profile-scroll.component';

@Component({
  selector: 'app-aot',
  standalone: true,
  imports: [HeroSectionComponent, AotBottomComponent, ProfileScrollComponent],
  templateUrl: './aot.component.html',
  styleUrl: './aot.component.scss'
})
export class AotComponent {

}
