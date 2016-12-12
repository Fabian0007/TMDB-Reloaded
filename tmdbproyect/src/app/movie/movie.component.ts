import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  baseUrl = "http://image.tmdb.org/t/p/w300/";
  details = {};
  private sub:any;
  

  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router){
  		}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.movieService.getMovie(id)
      .subscribe(details => {
        //console.log(details);
        this.details = details;
      });
    });
  }

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
}