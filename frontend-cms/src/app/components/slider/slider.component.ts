import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  images:any;
  baseurl:string=environment.baseurl
  constructor(private http:HttpClient) { }

  sliderOptions: any = {
    loop:true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1000,
    // autoplayHoverPause:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            
        }
    }
    
  }
  
  ngOnInit(): void {
    this.http.get(this.baseurl+'sliders').subscribe((data)=>{
      this.images=data;
    });
  
  }

}
