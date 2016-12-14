import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-personcast',
  templateUrl: './personcast.component.html',
  styleUrls: ['./personcast.component.css']
})
export class PersoncastComponent implements OnInit, OnChanges {
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  @Input() credits: any;
  active:boolean = false;
  orderUp:boolean = false;


  constructor(){
   
  }

  ngOnInit(){
  }

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
  changeState() {
    this.active=!this.active;
  }
  
  changeOrder() {
    this.orderUp=!this.orderUp;
    this.doSort();
  }
  
  ngOnChanges(changes){
    this.doSort();
  }
  
  doSort(){
    if(this.orderUp){
            this.credits.sort(function(a,b) { 
      return new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
      });
    }
    else{
      this.credits.sort(function(a,b) { 
      return  new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
      });
    }

  }
  
}
