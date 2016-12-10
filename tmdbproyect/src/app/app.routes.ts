import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

export const ROUTES: Routes = [
	{ path: '',  component: HomeComponent },
	{ path: 'movie/:id', component: MovieComponent }
];