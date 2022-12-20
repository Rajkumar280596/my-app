import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public studentform: FormGroup = new FormGroup(

    {
      name : new FormControl(),
      phone: new FormControl(),
      email : new FormControl(),
      address : new FormGroup(
        {
        city : new FormControl(),
        state : new FormControl(),
        pin : new FormControl(),
        }
      ),

        cards: new FormArray([]),
        type: new FormControl(),
        bus: new FormControl(),
        hostel: new FormControl(),

     
      
    }
  );

  get cardsformarray(){
    return this.studentform.get('cards') as FormArray;
  }

  add(){
    this.cardsformarray.push(
      new FormGroup(
        {
          number: new FormControl(),
          expiry: new FormControl(),
          cvv: new FormControl()
        }
      )
    )
  }

  constructor() {}

  submit(){
    console.log(this.studentform);
  }

  delete(i:number){
    this.cardsformarray.removeAt(i);

  }
}

