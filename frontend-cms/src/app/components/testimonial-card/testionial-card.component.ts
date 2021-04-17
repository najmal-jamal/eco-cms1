import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'testimonial-card',
  templateUrl: './testionial-card.component.html',
  styleUrls: ['./testionial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {
   testimonial:any;
   baseurl:string=environment.baseurl;

  constructor(private http: HttpClient) { }

  sliderOptions: any = {
    loop:true,
    responsiveClass:true,
    margin:10,
    // lazyLoadEager:4,
    dots:true,
    center:true,
    // dotContainer:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            
        }
    }
  }

  ngOnInit(): void {

    this.http.get(this.baseurl+'testimonials').subscribe((data)=>{
      this.testimonial= data;
    })

  }

}
