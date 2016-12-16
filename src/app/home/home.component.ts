import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  baseUrl = "http://image.tmdb.org/t/p/w300/";

  constructor(){}

    /**
   * Get the Total Url of image
   * @param {String} Src of image
   * @return {String} Total Url of image
   */
  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
}