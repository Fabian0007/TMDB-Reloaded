import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';

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
  parameter:string ="Date";
  borderColorDate:string="#FFC107";
  borderColorAlphabetic:string="#673ab7";

  constructor(){}

  ngOnInit(){
  }

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
  changeState() {
    this.active=!this.active;
  }
  
  changeParameterDate() {
    this.borderColorDate="#FFC107";
    this.borderColorAlphabetic="#673ab7";
    this.parameter="Date";
    this.doSort();
  }  
  
  changeParameterAlphabetic() {
    this.borderColorAlphabetic="#FFC107";
    this.borderColorDate="#673ab7";
    this.parameter="Alphabetic";
    this.doSort();
  }  
  
  changeOrder() {
    this.orderUp=!this.orderUp;
    this.doSort();
  }
  
  ngOnChanges(changes){
    this.active = false;
    this.orderUp = false;
    this.parameter ="Date";
    this.borderColorDate="#FFC107";
    this.borderColorAlphabetic="#673ab7";
    this.doSort();
  }
  
  doSort(){
    if(this.parameter=="Date"){
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
    
    if(this.parameter=="Alphabetic"){
      if(this.orderUp){
        this.credits.sort(function(a,b) {
          var x = a.title.toLowerCase();
          var y = b.title.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
      }
      else{
        this.credits.sort(function(a,b) {
          var x = a.title.toLowerCase();
          var y = b.title.toLowerCase();
          return y < x ? -1 : y > x ? 1 : 0;
        });
      }
    }
  }
  
}
