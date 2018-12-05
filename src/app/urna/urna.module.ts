import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrnaComponent } from './components';
import { UrnaService } from './services';

@NgModule({
  declarations: [
    UrnaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UrnaComponent
  ],
  providers: [
    UrnaService
  ]
})
export class UrnaModule { }
