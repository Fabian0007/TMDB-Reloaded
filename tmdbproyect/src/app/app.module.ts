import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MovieService } from './movie.service';
import { MovieComponent } from './movie/movie.component';
import { PopularmoviesComponent } from './popularmovies/popularmovies.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { LatestmoviesComponent } from './latestmovies/latestmovies.component';
import { IntheatersComponent } from './intheaters/intheaters.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    PopularmoviesComponent,
    ToolbarComponent,
    TopmoviesComponent,
    LatestmoviesComponent,
    IntheatersComponent,
    UpcomingComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
