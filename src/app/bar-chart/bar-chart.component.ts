import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;

  constructor() { }

  ngOnInit() {
    this.createBarChart();
  }

  createBarChart() {
    const data = [10, 20, 30, 40, 50];
    
    const svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', 400)
      .attr('height', 300); 

  const data2 = [10, 20, 30, 40, 50]; 

    const circles = svg.selectAll('circle')
      .data(data2)
      .enter()
      .append('circle')
      .attr('r', d=>d)
      .attr('cx', (d, i) => i * 40 + 50)
      .attr('cy', 100)
      .attr('fill', 'steelblue');
    
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 60)
      .attr('y', (d) => 300 - d)
      .attr('width', 50)
      .attr('height', (d) => d)
      .attr('fill', 'steelblue');
  }
}
