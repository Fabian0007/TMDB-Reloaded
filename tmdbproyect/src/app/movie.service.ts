import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {

  private url = "https://api.themoviedb.org/3/movie/popular";
  private apiKey = "12598c38af2f10ab6066499ccddba71d";

  constructor(private http: Http) {
    console.log("A MovieService instance was created");
   }

  get(): Observable<any> {
    return this.http.get(`${this.url}?api_key=${this.apiKey}`)
      .map(response => {
        return response.json().results;
      });
  }

  add(movie: any): void{
    
  }

  delete(movie) {

  }

}