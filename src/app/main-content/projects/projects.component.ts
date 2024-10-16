import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  projectId: number;
  projectNumber: string;
  projectName: string;
  projectDescription: string;
  techniques: string[];
  techniqueSymbols: string[];
  githubLink: string;
  projectLink: string;
  projectImg: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

  popupOpen: boolean = false;
  activeProject: number = 0;

  projects: Project[] = [
    {
      projectId: 0,
      projectNumber: '01',
      projectName: 'Join',
      projectDescription: 'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',
      techniques: ['Firebase', 'JavaScript', 'CSS', 'HTML'],
      techniqueSymbols: ['../../../assets/img/firebase-icon.png', '../../../assets/img/javascript-icon.png', '../../../assets/img/css-icon.png', '../../../assets/img/html-icon.png'],
      githubLink: 'link-placeholder',
      projectLink: 'link-placeholder',
      projectImg: '../../../assets/img/stand-in.jpg'
    },
    {
      projectId: 1,
      projectNumber: '02',
      projectName: 'El Pollo Loco',
      projectDescription: 'jump, run and throw game based on object oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      techniques: ['JavaScript', 'CSS', 'HTML'],
      techniqueSymbols: ['../../../assets/img/javascript-icon.png', '../../../assets/img/css-icon.png', '../../../assets/img/html-icon.png'],
      githubLink: 'link-placeholder',
      projectLink: 'link-placeholder',
      projectImg: '../../../assets/img/stand-in.jpg'
    },
    {
      projectId: 2,
      projectNumber: '03',
      projectName: 'Pokedex',
      projectDescription: 'Library that retrieves and displays Pokémon details from the PokéAPI. Browse, filter, and explore Pokémon with interactive search and navigation features.',
      techniques: ['JavaScript', 'CSS', 'HTML'],
      techniqueSymbols: ['../../../assets/img/javascript-icon.png', '../../../assets/img/css-icon.png', '../../../assets/img/html-icon.png'],
      githubLink: 'link-placeholder',
      projectLink: 'link-placeholder',
      projectImg: '../../../assets/img/stand-in.jpg'
    }
  ]

  openPopup(popUpNumber: number) {
    this.popupOpen = true;
    this.activeProject = popUpNumber;
    document.body.style.overflow = 'hidden';
  }

  closePopup() {
    this.popupOpen = false;
    document.body.style.overflow = 'auto';
  }

  nextProject() {
    this.activeProject++;
    if (this.activeProject == 3) {
      this.activeProject = 0;
    }
  }
}
