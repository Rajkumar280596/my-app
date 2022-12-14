import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public names:string[] = ['Ravi', 'raj', 'joshna']

  public states:string[] = ['Telangana', 'andhra', 'tamilnadu']
  

  public users: any = [
  {name: 'anil', age: 20, package:10},
  {name: 'ravi', age: 22, package:30},
  {name: 'raj', age: 25, package:15},
  {name: 'joshna', age: 26, package:20},
  {name: 'nayak', age: 21, package:23},

  ];

  public time:number = 22;

  public today:any = new Date;

}
