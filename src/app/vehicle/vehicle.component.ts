import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public vehicles:any = [];

  constructor (private _vehicleservice: VehicleService){

    this._vehicleservice.getvehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },

      (err:any)=>{
        alert("Internal server error")
      }
    )

    

  }

  public term:string = "";

  filter(){
    this._vehicleservice.getFilteredVehicle(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },

      (err:any)=>{
        alert("Server side error")
      }

    )
  }

  public column:string = "";
  public order:string = "";

  sort(){
  this._vehicleservice.getSortedVehicle(this.column, this.order).subscribe(
    (data:any)=> {
      this.vehicles = data;
    },

    (err:any)=>{
      alert("Server side error")
    }

  )

  }

  page(page:number){
    this._vehicleservice.getPagedVehicle(page).subscribe(
      (data:any)=> {
        this.vehicles = data;
      },
  
      (err:any)=>{
        alert("Server side error")
      }
    )

  }

  delete(id:string){
    this._vehicleservice.getdeletedVehicle(id).subscribe(
      (data:any)=> {
       alert("Deleted sucessfully");
       location.reload();
      },
  
      (err:any)=>{
        alert("Server side error")
      }

    )
  }
}
