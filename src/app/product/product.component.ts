import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'Product Component';

  products= [
    { id:1, name:'Watch', price: '5000.00' },
    { id:2, name:'T-Shirt', price: '2000.00' },
    { id:3, name:'Bag', price: '1000.00' },
    { id:4, name:'Laptop', price: '4000.00' },
    { id:5, name:'LED TV', price: '25000.00' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
