import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './b/b.component';
import { SegundoRoutingModule } from './segundo-routing.module';



@NgModule({
  declarations: [BComponent],
  imports: [
    CommonModule,
    SegundoRoutingModule
  ]
})
export class SegundoModule { }
