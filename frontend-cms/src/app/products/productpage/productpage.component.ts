import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {

  constructor(private http: HttpClient ,private activatedRoute:ActivatedRoute) { }

  baseUrl: string = environment.baseurl;
  productModel : any;
  productById :any;
  similarProduct: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      let id = data.get('id');
      console.log(id);
      this.getdetails(id);
    })

  }

  getdetails(id:any)
  {
    this.http.get(this.baseUrl+'products/'+id).subscribe((data) => {
      this.productById = data;
      console.log(this.productById);
      let category_id = this.productById.category_id;
      
      this.http.get(this.baseUrl+'category_product'+'/'+category_id).subscribe((data) => {
        this.similarProduct = data;
        console.log(this.similarProduct);
      })
    })
  }

}
