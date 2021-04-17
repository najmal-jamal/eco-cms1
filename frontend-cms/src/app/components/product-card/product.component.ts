import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductCardComponent implements OnInit {
 
  constructor() { }

 
  @Input('data') data:any;

  ngOnInit(): void {
    

  }

}
