import { Component } from '@angular/core';
import { BankserverService } from '../bankserver.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  public bankdetail:any= {};

  constructor(private _bankserverservice: BankserverService){
    this._bankserverservice.getaccount().subscribe(
      (data:any)=>{
        this.bankdetail = data;
      },

      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

}
