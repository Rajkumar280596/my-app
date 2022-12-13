import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public products:any = [
    {name: 'anil', price: 100, quantity:10, rating:4},
    {name: 'Sanjay', price: 150, quantity:20, rating:5},
    {name: 'joshna', price: 200, quantity:30, rating:3},
    {name: 'Ajay', price: 50, quantity:40, rating:3},
    {name: 'raj', price: 500, quantity:50, rating:2},
  ]


}
