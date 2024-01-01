import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MockConfigViewComponent } from './bar-chart/mock-config-view/mock-config-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroesComponent,
     BarChartComponent, MockConfigViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}

// @Component({
//   selector: "chart-widget",
//   standalone: true, 
//   imports: [CommonModule], 
//   templateUrl: '.chart.component.html', 
//   styleUrl: './chart.component.html'
// })