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
  
  
  clear(){
    this.results=[];
    this.search="";
    this.active=false;
  }
  
  
  doSearch(){
    if(this.search.length >= 2){
      this.movieService.getSearch(this.search, 1)
      .subscribe(results => {
        this.results=results;
      });
    }else{
      this.results=[];
    }
  }
  

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
}
