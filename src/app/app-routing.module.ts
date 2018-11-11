import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'location', component: LocationComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
