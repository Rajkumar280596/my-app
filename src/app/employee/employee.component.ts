import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  

  public employeeform: FormGroup = new FormGroup(

    {
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      mobile: new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(1111111111)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      dob: new FormControl(),

      addressdetails: new FormGroup(

      {
      address: new FormControl(),
      city: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      state: new FormControl(),
      pin: new FormControl(),
      }
      ),

      education: new FormArray([]),
      type: new FormControl(),
      html: new FormControl(),
      node: new FormControl(),


      
    }

  );

  get educationformarray(){
    return this.employeeform.get('education') as FormArray;
  }

  
  addnew(){
    this.educationformarray.push(
      new FormGroup(
        {
          qualification: new FormControl(),
          year: new FormControl(),
          percentage: new FormControl(),

        }
      )
    );


    
  }

  constructor() {}

  submit(){
    console.log(this.employeeform)
  }
  
  delete(i:number){
    this.educationformarray.removeAt(i);
  }

  public backopts:number[] = [1, 2 , 3, 4, 5]
  public frontopts:number[] = [1, 2 , 3, 4, 5]


}
