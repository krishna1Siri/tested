import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';
import {ReactiveComponent} from './reactive/reactive.component'

const routes: Routes = [
  { path : '',component:HomeComponent},
  { path:'reactive',component:ReactiveComponent },
  { path:'modeldriven',component:ModeldrivenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
