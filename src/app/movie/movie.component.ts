import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  baseUrl = "http://image.tmdb.org/t/p/w300/";
  details = {};
  keyvideo:string;
  

  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router){
  		}

  /**
  * Get a movie with your id
  */
  ngOnInit(){
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.movieService.getMovie(id).subscribe(details => {
        this.details = details;
        this.keyvideo=details.videos.results[0];
      });
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
  
}