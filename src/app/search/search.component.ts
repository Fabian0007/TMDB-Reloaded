import { Component, OnInit, Input} from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  results = [];
  search:string;
  active:boolean=false;
  focus:boolean=false;
  colors:Array<string>=[];
  @Input() preview:boolean;

  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router){
  		  this.router.events.subscribe(path => {
  		    this.clear();
      });
  	}

  ngOnInit(){

  }
  
  changeState(active:boolean){
    this.active=active;
  }
  
  changeFocus(focus:boolean){
    this.focus=focus;
  }
  
  putColor(i:number){
    this.colors[i]="#C6DEFF";
  }
  
  removeColor(i:number){
    this.colors[i]="#FFFFFF";
  }
  
  clear(){
    this.results=[];
    this.search="";
    this.active=false;
  }
  
  
  doSearch(){
    if(this.search.length >= 2){
      this.movieService.getSearch(this.search, 1)
      .subscribe(results => {
        if (this.preview) {
          try {
             this.results=results;
          }
          catch(err){
            this.results = results;
          }
        }
        else {
          this.results=results;
        }
        
        for(let i=0;i<results.length;i++){
          this.colors[i]="#FFFFFF";
        }
      });
    }else{
      this.results=[];
    }
  }
  

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
}
