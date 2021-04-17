import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { ComponentsModule } from '../components/components.module';
import { OwlModule } from 'ngx-owl-carousel';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ComponentsModule,
    OwlModule
  ]
})
export class HomepageModule { }
