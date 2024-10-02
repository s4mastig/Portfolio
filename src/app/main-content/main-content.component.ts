import { Component } from '@angular/core';
import { AotComponent } from './aot/aot.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from "./skills/skills.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AotComponent, AboutMeComponent, SkillsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
