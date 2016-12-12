import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moviecrew',
  templateUrl: './moviecrew.component.html',
  styleUrls: ['./moviecrew.component.css']
})
export class MoviecrewComponent implements OnInit {
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  @Input() credits: any;
  active:boolean = false;

  constructor(){}

  ngOnInit(){
  }

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
  changeState() {
    this.active=!this.active;
  }
}
