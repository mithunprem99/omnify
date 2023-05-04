import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   myMethod: Observable<any>;
//   private myMethodSubject = new Subject<any>();
  
//   constructor (private http:HttpClient) {}
//   searchTerm
//   APiLink="http://localhost:8000/weather/"
//   getApiRespons(): Observable<any> {
//     // console.log(this.searchTerm)
//     return this.http.get(this.APiLink + this.searchTerm);
//   }

// }


@Injectable({
  providedIn: 'root',
})
export class ApiService {
    myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();

    constructor(private http:HttpClient) {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

  

    APiLink="http://localhost:8000/weather/"
    getApiRespons(data): Observable<any> {
      // console.log(this.searchTerm)
      return this.http.get(this.APiLink + data + '/');
    }
}
