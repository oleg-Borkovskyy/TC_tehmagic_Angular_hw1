import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsPageComponent } from './components/pages/films-page/films-page.component';
import { SearchResultComponent } from './components/templates/search-result/search-result.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'films', component: FilmsPageComponent },
  { path: 'search', component: SearchResultComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
