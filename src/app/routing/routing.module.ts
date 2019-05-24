import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BioBodyComponent } from '../bio-body/bio-body.component';


const routes: Routes = [
  { path: 'home', component: BioBodyComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
