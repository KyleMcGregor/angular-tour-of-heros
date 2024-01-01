import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';
@Component({
  selector: 'app-mock-config-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mock-config-view.component.html',
  styleUrl: './mock-config-view.component.css'
})
export class MockConfigViewComponent implements OnInit {
  @ViewChild('config_view', { static: true }) private configViewContainer!: ElementRef;
  /**
   *
   */
  constructor() {
  }
  ngOnInit() {
    // this.createConfigView();
    this.createBlocks();
  }
  createBlocks() {
    const svg = d3.create('svg'); 
    
    const b1 = svg.append('g'); 
    b1.attr('height', 500)
    const p_area = d3.polygonArea([[1,1], [1.3, 9], [2,1]]); 
    console.log(p_area); 
  }

  createConfigView() {
    /**
     * Static mock up of a configuration view using d3
     */

    const svg = d3.select(this.configViewContainer.nativeElement).append('svg')
    const width = 640;
    const height = 500;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 40;
    const marginLeft = 40;
    const start: Date = new Date(Date.parse("2023-01-01"));
    const end: Date = new Date(Date.parse("2023-12-31"));
    const x = d3.scaleUtc()
      .domain([start, end])
      .range([marginLeft, width - marginRight]);

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height - marginBottom, marginTop]);

    svg.append("g")
      .attr("transform", `translate(0, ${height - marginBottom})`)
      .call(d3.axisBottom(x));

    svg.append("g")
      .attr("transform", `translate(${marginLeft})`)
      .call(d3.axisLeft(y));
  }

}
