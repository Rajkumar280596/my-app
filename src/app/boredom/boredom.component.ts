import { Component } from '@angular/core';
import { Boredom1Service } from '../boredom1.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent {

  public boredom:any= {};

  constructor(private _boredomservice: Boredom1Service){
    this._boredomservice.getboredom().subscribe(
      (data:any)=>{
        this.boredom = data;
      },

      (err:any)=>{
        alert("Internal server error")
      }
    )
  }


}
