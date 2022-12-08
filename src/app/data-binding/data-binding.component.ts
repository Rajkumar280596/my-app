import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

    public age: number = 20;
    public name: string = 'raj';
    public isindian: boolean = true;

    public phone: number= +91;
    

    test(){
      alert("submitted")
    }

    test2(){
      alert('Double clicked')
    }

    test3(){
      alert('mouse entered')

    }



}
