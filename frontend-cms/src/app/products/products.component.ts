import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  baseurl: string=environment.baseurl;
  productModel:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.baseurl+'products').subscribe((data)=>{
      this.productModel= data;

      console.log(this.productModel);
    });

  }

}
