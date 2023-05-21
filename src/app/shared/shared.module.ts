import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ngx loader 
import {  NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    FormErrorsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  exports: [
    // modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    
    //components
    FormErrorsComponent,
  ]
})
export class SharedModule {}
