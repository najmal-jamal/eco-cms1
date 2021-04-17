import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [{ path: '', component: BlogsComponent },
                        { path:':id',component:BlogpageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
