import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiselectComponent } from './multiselect.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MultiselectComponent
  ],
  imports: [
    CommonModule,
    MultiSelectModule,
    FormsModule
  ],
  exports: [
    MultiselectComponent
  ]
})
export class MultiselectModule { }
