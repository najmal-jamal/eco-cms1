import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  baseUrl=environment.baseurl;
  values:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl+'blogs').subscribe((data)=>{
      this.values= data;
      
      console.log(this.values);
    });
  }

}
