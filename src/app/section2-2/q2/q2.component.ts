import { Component, OnInit } from '@angular/core';
import { CallDataService } from 'src/app/call-data.service';
@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit {
  constructor(private service : CallDataService) { }
  data:any[] = [];
  allData:any[] =[]
  searchTerm!:string;
  ngOnInit() {
    window.scrollTo(0, 0);
    this.getData();
  }
getData(){
  this.service.data().subscribe((res:any)=>{
    if(res != null){
      this.data = res;
      this.allData = this.data;
    }
    else{
      alert("something wrong")
    }
  })
}

}
