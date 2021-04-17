import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  
  constructor(private http: HttpClient) { }

  getBlogs(){
    return this.http.get(environment.baseurl+'getBlogs')
  }
}
