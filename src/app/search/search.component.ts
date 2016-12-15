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
  resultsPersons = [];
  resultsMovies = [];
  search:string;
  active:boolean=false;
  focus:boolean=false;
  colorsPersons:Array<string>=[];
  colorsMovies:Array<string>=[];
  color:string="#FFFFFF";
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
  
  
  putColor(){
    this.color="#C6DEFF";
  }
  
  removeColor(){
    this.color="#FFFFFF";
  }
  
  putColorPersons(i:number){
    this.colorsPersons[i]="#C6DEFF";
  }
  
  putColorMovies(i:number){
    this.colorsMovies[i]="#C6DEFF";
  }
  
  removeColorPersons(i:number){
    this.colorsPersons[i]="#FFFFFF";
  }
  
  removeColorMovies(i:number){
    this.colorsMovies[i]="#FFFFFF";
  }
  
  clear(){
    this.resultsPersons=[];
    this.resultsMovies=[];
    this.search="";
    this.active=false;
  }
  
  
  doSearch(){
    if(this.search.length >= 2){
      this.movieService.getSearchPerson(this.search, 1)
      .subscribe(resultsPersons => {
        this.resultsPersons=resultsPersons.slice(0,3);
        for(let i=0;i<this.resultsPersons.length;i++){
          this.colorsPersons[i]="#FFFFFF";
        }
      });
      this.movieService.getSearchMovie(this.search, 1)
      .subscribe(resultsMovies => {
        this.resultsMovies=resultsMovies.slice(0,3);
        for(let i=0;i<this.resultsPersons.length;i++){
          this.colorsMovies[i]="#FFFFFF";
        }
      });
      
      
    }else{
      this.resultsPersons=[];
       this.resultsMovies=[];
    }
  }
  

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
}
