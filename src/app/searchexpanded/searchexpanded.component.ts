import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchexpanded',
  templateUrl: './searchexpanded.component.html',
  styleUrls: ['./searchexpanded.component.css']
})
export class SearchexpandedComponent implements OnInit, OnChanges {

  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router){
  		}
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  resultsPersons = [];
  resultsMovies = [];
  search:string;
  page:number;
  colors:Array<string>=[];
  borderColorPerson:string;
  borderColorMovie:string;
  parameter:string;
  colorsPagination:Array<string>=["#FFFFFF","#FFFFFF", "#FFFFFF","#FFFFFF","#FFFFFF", "#FFFFFF"];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.parameter= params['parameter'];
      this.search = params['search'];
      this.page = params['page'];
      if(this.parameter=="movies"){
        this.movieService.getSearchMovie(this.search, this.page)
          .subscribe(resultsMovies => {
          this.resultsMovies=resultsMovies;
          this.borderColorPerson="#ffd740";
          this.borderColorMovie="#673ab7";
          this.setColorPagination();
      });
      }else{
        this.movieService.getSearchPerson(this.search, this.page)
          .subscribe(resultsPersons => {
          this.resultsPersons=resultsPersons;
          this.borderColorPerson="#673ab7";
          this.borderColorMovie="#ffd740";
          this.setColorPagination();
      });
      }
    });
  }
  
  ngOnChanges(changes){
    this.colorsPagination=["#FFFFFF","#FFFFFF", "#FFFFFF","#FFFFFF","#FFFFFF", "#FFFFFF"];
  }
  setPage(sum:boolean){
    if(sum){
      if(this.page - (-1) <= 6){
        return this.page - (-1);
      }else{
        return this.page;
      }
    }else{
      if(this.page - 1 >= 1){
        return this.page - 1;
      }else{
        return this.page;
      }
    }
    
  }
  
  
  setColorPagination(){
    this.colorsPagination=["#FFFFFF","#FFFFFF", "#FFFFFF","#FFFFFF","#FFFFFF", "#FFFFFF"];
    this.colorsPagination[this.page - 1]="#673ab7";
  } 
  
  changeParameterPerson() {
   this.router.navigate(['searchexpanded/persons/'+this.search+'/1']);
  }  
  
  changeParameterMovie() {
    this.router.navigate(['searchexpanded/movies/'+this.search+'/1']);
  }  
  
  

  
  putColor(i:number){
    this.colors[i]="#C6DEFF";
  }
  
  removeColor(i:number){
    this.colors[i]="#FFFFFF";
  }

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }

}
