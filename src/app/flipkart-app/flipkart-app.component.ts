import { Component } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-flipkart-app',
  templateUrl: './flipkart-app.component.html',
  styleUrls: ['./flipkart-app.component.css']
})
export class FlipkartAppComponent {

  public flipkart:any= {};

 constructor(private _itemservice: ItemsService){
  _itemservice.getitems().subscribe(
    (data:any)=>{
      this.flipkart = data;
    },

    (err:any)=>{
      alert("Internal server error")
    }
   )
 }


}
