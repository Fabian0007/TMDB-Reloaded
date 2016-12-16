import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personcrew',
  templateUrl: './personcrew.component.html',
  styleUrls: ['./personcrew.component.css']
})
export class PersoncrewComponent implements OnInit, OnChanges {
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  @Input() credits: any;
  active:boolean = false;
  orderUp:boolean = false;
  parameter:string ="Date";
  borderColorDate:string="#FFC107";
  borderColorAlphabetic:string="#673ab7";

  constructor(private route: ActivatedRoute,
  		private router: Router){}

  ngOnInit(){
  }

  /**
  * Get the Total Url of image
  * @param {String} Src of image
  * @return {String} Total Url of image
  */
  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
  /**
  * Change visibility of component in the html
  */
  changeState() {
    this.active=!this.active;
  }
  
  /**
  * Makes date the new ordering parameter
  */
  changeParameterDate() {
    this.borderColorDate="#FFC107";
    this.borderColorAlphabetic="#673ab7";
    this.parameter="Date";
    this.doSort();
  }  
  
  /**
  * Makes alphabetic the new ordering parameter
  */
  changeParameterAlphabetic() {
    this.borderColorAlphabetic="#FFC107";
    this.borderColorDate="#673ab7";
    this.parameter="Alphabetic";
    this.doSort();
  }  
  
  /**
  * Reverse order
  */
  changeOrder() {
    this.orderUp=!this.orderUp;
    this.doSort();
  }
  
  /**
  * Restart the component
  */
  ngOnChanges(changes){
    this.active = false;
    this.orderUp = false;
    this.parameter ="Date";
    this.borderColorDate="#FFC107";
    this.borderColorAlphabetic="#673ab7";
    this.doSort();
  }
  
  /**
  * Performs the ordering
  */
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
  
  /**
  * Redirect to a person
  */
  goMovie(id:number) {
    this.router.navigate(['/movie/'+id]);
  }
  
}
