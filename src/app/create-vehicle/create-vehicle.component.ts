import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

public vehicleForm: FormGroup = new FormGroup(
{
  Vehicle: new FormControl(),
  manufacturer: new FormControl(),
  model: new FormControl(),
  type: new FormControl(),
  fuel: new FormControl(),
  color: new FormControl(),
  image: new FormControl(),
}
);

public isEdit:boolean = false;
public id:string = "";

constructor(private _vehicleService: VehicleService, private _activatedroute: ActivatedRoute){
  this._activatedroute.params.subscribe(
    (data:any)=>{

      if(data.id){
        this.isEdit= true;
        this.id = data.id;
      }

      this._vehicleService.getvehicle(data.id).subscribe(
        (data2:any)=>{
          this.vehicleForm.patchValue(data2)
        }
      )
    }
  )
}

submit(){
  console.log(this.vehicleForm.value)

  if(this.isEdit){

  

  this._vehicleService.editVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert("Edited sucessfully");
    },
    (err:any)=>{
      alert("Internal server error");
    }
  );
 }

 else{
  this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert("Submitted sucessfully");
    },
    (err:any)=>{
      alert("Internal server error");
    }
  );

 }

  
}



}