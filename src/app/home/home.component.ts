import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  title = 'app works!';
  movies = [];

  constructor(private movieService: MovieService){}

  ngOnInit(){
    this.movieService.getPopular()
      .subscribe(movies => {
        this.movies = movies.slice(0,10);
      });
  }

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
}