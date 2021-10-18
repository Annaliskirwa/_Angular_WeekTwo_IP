import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'githubsearch', component: SearchComponent},
  { path: 'about', component: AboutComponent},
  { path:'**', component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
