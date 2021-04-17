import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { TestimonialCardComponent } from './testimonial-card/testionial-card.component';




@NgModule({
  declarations: [
    BlogCardComponent,
    ContactFormComponent,
    FooterComponent,
    SliderComponent,
    HeaderComponent,
    ProductCardComponent,
    ServiceCardComponent,
    TestimonialCardComponent
  ],
  imports: [
    CommonModule,
    OwlModule
  ],
  exports: [
    BlogCardComponent,
    ContactFormComponent,
    FooterComponent,
    SliderComponent,
    HeaderComponent,
    ProductCardComponent,
    ServiceCardComponent,
    TestimonialCardComponent
  ]
})
export class ComponentsModule { }
