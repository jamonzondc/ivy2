import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from "./components/a/AComponent";


//Como los states
const appRoutes: Routes = [
  { path: '', component: AComponent },
  {
    path: 'segundo',
    loadChildren: () => import('./segundo/segundo.module').then(mod => mod.SegundoModule),
  },
  { path: '**', redirectTo: 'sigin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
