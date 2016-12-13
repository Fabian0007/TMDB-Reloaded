import { Component, OnInit} from '@angular/core';
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

  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router){
  		  this.router.events.subscribe(path => {
  		    this.results=[];
  		    this.search="";
      });
  	}

  ngOnInit(){

  }
  
  
  doSearch(){
    if(this.search.length >= 2){
      this.movieService.getSearch(this.search, 1)
      .subscribe(results => {
        console.log(results);
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
