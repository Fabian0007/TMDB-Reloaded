import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchexpanded',
  templateUrl: './searchexpanded.component.html',
  styleUrls: ['./searchexpanded.component.css']
})
export class SearchexpandedComponent implements OnInit {

  baseUrl = "http://image.tmdb.org/t/p/w300/";
  resultsPersons = [];
  resultsMovies = [];
  search:string;
  page:number;
  numberPage:number;
  numberPageArray:any;
  colors:Array<string>=[];
  borderColorPerson:string;
  borderColorMovie:string;
  parameter:string;
  colorsPagination:Array<string>;
  
  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router){}
  		

  /**
  * Performs a search with the route parameters
  */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.parameter= params['parameter'];
      this.search = params['search'];
      this.page = params['page'];
      if(this.parameter=="movies"){
        this.movieService.getSearchMovie(this.search, this.page)
          .subscribe(resultsMovies => {
          this.resultsMovies=resultsMovies.results;
          this.numberPage=resultsMovies.total_pages;
          this.colorsPagination = Array(this.numberPage).fill("#FFFFFF");
          this.borderColorPerson="#ffd740";
          this.borderColorMovie="#673ab7";
          this.setColorPagination();
      });
      }else{
        this.movieService.getSearchPerson(this.search, this.page)
          .subscribe(resultsPersons => {
          this.resultsPersons=resultsPersons.results;
          this.numberPage=resultsPersons.total_pages;
          this.colorsPagination = Array(this.numberPage).fill("#FFFFFF");
          this.borderColorPerson="#673ab7";
          this.borderColorMovie="#ffd740";
          this.setColorPagination();
      });
      }
    });
  }
  
  
  
  /**
  * Go to the next page
  */
  goForward(){
      if(this.page - (-1) <= this.colorsPagination.length){
        return this.page - (-1);
      }else{
        return this.page;
      }
  }
  
  /**
  * Go to the back page
  */
  goBack(){

      if(this.page - 1 > 0){
        return this.page -1;
      }else{
        return this.page;
      }
  }
  
   
   
  /**
  * Change the background of the current page
  */ 
  setColorPagination(){
    this.colorsPagination[this.page - 1]="#673AB7";
  } 
  
  /**
  * Persons are now looking for
  */ 
  changeParameterPerson() {
   this.router.navigate(['searchexpanded/persons/'+this.search+'/1']);
  }  
  
  /**
  * Movies are now looking for
  */ 
  changeParameterMovie() {
    this.router.navigate(['searchexpanded/movies/'+this.search+'/1']);
  }  
  
  /**
  * Add background of selected div
  */ 
  putColor(i:number){
    this.colors[i]="#C6DEFF";
  }
  
  /**
  * Remove background of selected div
  */ 
  removeColor(i:number){
    this.colors[i]="#FFFFFF";
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
  * Redirects to next page
  */
  goForwardPage(type:string){
    this.router.navigate(['/searchexpanded/'+type+'/'+this.search+"/"+this.goForward()]);
  }

  /**
  * Redirects to back page
  */  
  goBackPage(type:string){
    this.router.navigate(['/searchexpanded/'+type+'/'+this.search+"/"+this.goBack()]);
  }
  
  /**
  * Redirects to the selected page
  */  
  goPage(page:any, type:string){
    this.router.navigate(['/searchexpanded/'+type+'/'+this.search+"/"+page]);
  }
  
  /**
  * Redirect to a person
  */
  goPerson(id:number) {
    this.router.navigate(['/person/'+id]);
  }
  
  /**
  * Redirect to a movie
  */
  goMovie(id:number) {
    this.router.navigate(['/movie/'+id]);
  }

}
