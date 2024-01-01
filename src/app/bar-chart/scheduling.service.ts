import { Injectable } from '@angular/core';

interface IEmployee{
  id: number; 
  firstName: string; 
  lastName: string; 
}

interface IScheduleRule{
  id: number; 

}

interface IRuleSet{
  rules: Array<IScheduleRule>;
}

function testRule(employee:IEmployee, ruleSet: IRuleSet) {
  
}
@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor() { }
}
