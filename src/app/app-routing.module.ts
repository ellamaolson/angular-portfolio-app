import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'publications', component: PublicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
