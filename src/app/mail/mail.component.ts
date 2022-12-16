import { Component } from '@angular/core';
import { VisitedService } from '../visited.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

  public mail:any= {};

  constructor(private _vistedservice: VisitedService){
   _vistedservice.getmail().subscribe(
     (data:any)=>{
       this.mail = data;
     },
 
     (err:any)=>{
       alert("Internal server error")
     }
    )

}

}
