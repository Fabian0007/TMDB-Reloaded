import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-latestmovies',
  templateUrl: './latestmovies.component.html',
  styleUrls: ['./latestmovies.component.css']
})
export class LatestmoviesComponent implements OnInit {
  baseUrl:string = "http://image.tmdb.org/t/p/w300/";
  movies:any = [];
  @Input() preview: boolean = false;

  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router){}

  /**
  * Get the latest movies
  */
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

  /**
  * Get the Total Url of image
  * @param {String} Src of image
  * @return {String} Total Url of image
  */
  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
  /**
  * Redirect to latestmovies component in total window
  */
  goLatestMovies() {
    this.router.navigate(['/latestmovies']);
  }
  
  /**
  * Redirect to a movie
  */
  goMovie(id:number) {
    this.router.navigate(['/movie/'+id]);
  }
}
