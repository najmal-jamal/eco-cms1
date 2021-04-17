import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  baseurl:string=environment.baseurl;
  servicemodel:any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.baseurl+'services').subscribe((data) => {
      this.servicemodel = data;
      console.log(this.servicemodel);
    })
  }

}
