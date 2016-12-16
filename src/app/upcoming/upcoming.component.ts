import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  movies = [];
  @Input() preview: boolean = false;

  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router){}

  ngOnInit(){
    this.movieService.getUpComing()
      .subscribe(movies => {
        if (this.preview) {
          try {
             this.movies = movies.slice(0,5);
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
  
  goUpComing() {
    this.router.navigate(['/upcoming']);
  }
  
  goMovie(id:number) {
    this.router.navigate(['/movie/'+id]);
  }
}
