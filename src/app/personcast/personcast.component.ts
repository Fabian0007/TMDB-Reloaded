import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personcast',
  templateUrl: './personcast.component.html',
  styleUrls: ['./personcast.component.css']
})
export class PersoncastComponent implements OnInit {
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
