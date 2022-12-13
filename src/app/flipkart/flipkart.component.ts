
import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  public products: any = [];

  constructor(private _productservice: ProductService){
    this.products = _productservice.products;
  }

  sort(){
    this.products = this.products.sort((a:any,b:any)=>a.name.localeCompare(b.name));
  }

}
