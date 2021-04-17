import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  baseUrl: string = environment.baseurl;
  productModel : any;
  values:any;
  serviceModel:any;
  testimonialModel:any;

  sliderOptions: any = {
    loop:true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:4000,
    margin:10,
    rewind:false,
    // lazyLoadEager:4,
    dots:false,
    
    // autoplayHoverPause:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            
        }
    }
    
  }
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl+'products').subscribe((data)=>{
      this.productModel= data;

      // console.log(this.productModel);
    });
    this.http.get(this.baseUrl+'blogs').subscribe((data)=>{
      this.values= data;
      
      // console.log(this.values);
    });
    this.http.get(this.baseUrl+'services').subscribe((data)=>{
      this.serviceModel= data;
      
      // console.log(this.serviceModel);
    })

  }

}
