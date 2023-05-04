import { Component ,EventEmitter, Output,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
// export class SearchComponent {
//   // // @Output() searchTerm = new EventEmitter<string>();
//   // @Input() searchTerm: any ;
//   // //  prevText: string = '';
//   //  onSubmit() {
//   //    this.searchTerm
//   //   // console.log(this.searchTerm);
//   //   // console.log(this.prevText)
//   //   console.log(this.searchTerm)
//     // @Output() searchTerm = new EventEmitter<string>();
    
//     @Input() searchTerm: any ;
    
//     public constructor (private api: ApiService){}
//     onSubmit() {
//        this.api.getApiRespons().subscribe((data:{})=>{
//         alert(data)
//        })
//        this.api.myMethod(this.searchTerm);

//       console.log(this.searchTerm)

//       // public constructor(private)
  


//       }
  
// }

export class SearchComponent {
  
  @Input() searchTerm: any ;
  public data;

  public constructor(private myService: ApiService) {}
  onSubmit() {
           this.myService.getApiRespons(this.searchTerm).subscribe((data:{})=>{
            console.log(data)
             this.data=data
           })
          }
}
