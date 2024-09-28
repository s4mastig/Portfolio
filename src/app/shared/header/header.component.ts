import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  languageOn: boolean = true;


  toggleLanguage() {
    this.languageOn = !this.languageOn;
}
}
