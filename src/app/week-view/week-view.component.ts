import { Component, OnInit } from '@angular/core';

interface EmployeeScheule{
  employeeName:string; 
  shiftTime: string;
}
@Component({
  selector: 'app-week-view',
  standalone: true,
  imports: [],
  templateUrl: './week-view.component.html',
  styleUrl: './week-view.component.css'
})
export class WeekViewComponent implements OnInit {
  weekSchedule: {[day:string]: EmployeeScheule[]} = {};

  ngOnInit(): void {
    this.weekSchedule = {
      'Monday': [{ employeeName: 'Alice', shiftTime: '9AM-5PM'}, {employeeName: 'Joe', shiftTime:'9AM-6PM'}]
    };
  }

}
