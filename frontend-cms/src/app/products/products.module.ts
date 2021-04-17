import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductpageComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ComponentsModule
  ]
})
export class ProductsModule { }
