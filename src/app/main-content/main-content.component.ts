import { Component } from '@angular/core';
import { AotComponent } from './aot/aot.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AotComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
