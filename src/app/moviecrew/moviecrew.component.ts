import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviecrew',
  templateUrl: './moviecrew.component.html',
  styleUrls: ['./moviecrew.component.css']
})
export class MoviecrewComponent implements OnInit, OnChanges {
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  @Input() credits: any;
  copyCredits:any;
  active:boolean = false;
  orderUp:boolean = false;
  parameter:string ="Relevance";
  borderColorRelevance:string="#FFC107";
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
  * Makes relevance the new ordering parameter
  */
  changeParameterRelevance() {
    this.borderColorRelevance="#FFC107";
    this.borderColorAlphabetic="#673ab7";
    this.parameter="Relevance";
    this.doSort();
  }  
  
  /**
  * Makes alphabetic the new ordering parameter
  */
  changeParameterAlphabetic() {
    this.borderColorAlphabetic="#FFC107";
    this.borderColorRelevance="#673ab7";
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
    this.copyCredits=this.credits;
    this.active = false;
    this.orderUp = false;
    this.parameter ="Relevance";
    this.borderColorRelevance="#FFC107";
    this.borderColorAlphabetic="#673ab7";
    this.doSort();
  }
  
  /**
  * Performs the ordering
  */
  doSort(){
    
    if(this.parameter=="Relevance"){
      if(this.orderUp){
        console.log();
        this.credits=this.copyCredits.slice().reverse();
      }
      else{
        this.credits=this.copyCredits.slice();

      }
    }
    
    if(this.parameter=="Alphabetic"){
      if(this.orderUp){
        this.credits.sort(function(a,b) {
          var x = a.name.toLowerCase();
          var y = b.name.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
      }
      else{
        this.credits.sort(function(a,b) {
          var x = a.name.toLowerCase();
          var y = b.name.toLowerCase();
          return y < x ? -1 : y > x ? 1 : 0;
        });
      }
    }
  }
  
  /**
  * Redirect to a person
  */
  goPerson(id:number) {
    this.router.navigate(['/person/'+id]);
  }
}
