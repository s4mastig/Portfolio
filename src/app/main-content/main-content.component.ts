import { Component } from '@angular/core';
import { AotComponent } from './aot/aot.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AotComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, RecommendationsComponent, ContactFormComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
