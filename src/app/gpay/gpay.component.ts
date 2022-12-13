import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})
export class GpayComponent {

public amount:number = 0;

constructor(private _bankservice:BankService){

} 

withdraw(){
  this._bankservice.withdraw(this.amount);
}

deposit(){
  this._bankservice.deposit(this.amount);
}

showbalance(){
  alert(this._bankservice.getbalance());
}

}
