import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-latestmovies',
  templateUrl: './latestmovies.component.html',
  styleUrls: ['./latestmovies.component.css']
})
export class LatestmoviesComponent implements OnInit {
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  movies = [];
  @Input() preview: boolean = false;

  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router){}

  ngOnInit(){
    this.movieService.getLatest()
      .subscribe(movies => {
        if (this.preview) {
          try {
             this.movies = movies.slice(0,4);
          }
          catch(err){
            this.movies = movies;
          }
        }
        else {
          this.movies = movies;
        }
      });
  }

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
  goLatestMovies() {
    this.router.navigate(['/latestmovies']);
  }
}
