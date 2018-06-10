//This module will define the different pages of the website
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

//This array ties components to specific paths
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
