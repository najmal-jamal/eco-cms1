import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { ComponentsModule } from '../components/components.module';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { OwlModule } from 'ngx-owl-carousel';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogpageComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    ComponentsModule,
    OwlModule
  ]
})

export class BlogsModule {
  
 }
