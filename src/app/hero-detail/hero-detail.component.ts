import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';


// these aer some edits hers. 
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
hero: any;

}
