import { Component, OnInit,Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intheaters',
  templateUrl: './intheaters.component.html',
  styleUrls: ['./intheaters.component.css']
})
export class IntheatersComponent implements OnInit {
  baseUrl:string = "http://image.tmdb.org/t/p/w300/";
  movies:any = [];
  @Input() preview: boolean = false;

  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router){}

  /**
  * Get the movies in theaters
  */
  ngOnInit(){
    this.movieService.getPopular()
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


  /**
  * Get the Total Url of image
  * @param {String} Src of image
  * @return {String} Total Url of image
  */
  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
   href="#/movie/{{ movie.id }}"
  
  /**
  * Redirect to Intheaters component in total window
  */
  goInTheaters() {
    this.router.navigate(['/intheaters']);
  }
  
  goMovie(id:number) {
    this.router.navigate(['/movie/'+id]);
  }
}
