import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // APiLink : string;
  
  // constructor(private httpClient:HttpClient) {
  //   this.APiLink= "http://localhost:8000/weather"
  //   getByName():Observable<User>{
  //     return this.httpClient.get<User>(`${this.APiLink}${id}`);
  //   }
  //  }
}
