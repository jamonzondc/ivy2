import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BComponent } from './b/b.component';


const routes: Routes = [
  {
    path: '',
  
    children: [
      { 
        path: 'b', 
        component: BComponent,
      }]
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegundoRoutingModule { }
