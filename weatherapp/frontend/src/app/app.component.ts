import { Component,EventEmitter, Output,Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import {ApiService} from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // // @Output() searchTerm = new EventEmitter<string>();
  // @Input() searchTerm: any ;
  // //  prevText: string = '';
  //  onSubmit() {
  //    this.searchTerm
  //   // console.log(this.searchTerm);
  //   // console.log(this.prevText)
  //   console.log(this.searchTerm)

  //   // APiLink='http://localhost:8000/weather/'
  //   // getData=this.APiLink+this.searchTerm
  //   // console.log(getData)
  //   constructor(private http: HttpClient) {}


}
// }
