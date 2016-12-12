import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personcrew',
  templateUrl: './personcrew.component.html',
  styleUrls: ['./personcrew.component.css']
})
export class PersoncrewComponent implements OnInit {
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
