import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  details = {};
  

  constructor(private movieService: MovieService, private route: ActivatedRoute,
  		private router: Router){
  		}

  ngOnInit(){
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.movieService.getPerson(id).subscribe(details => {
        console.log(details);
        this.details = details;
      });
    });
  }

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
}
