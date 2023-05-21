import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ngx loader 
import {  NgxSpinnerModule } from "ngx-spinner";
// import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

//directives
// import { NumbersOnlyDirective } from './directives/numbers-only.directive';
// import { KeyPatternControllerDirective } from './directives/key-pattern-controller.directive';


@NgModule({
  declarations: [
    FormErrorsComponent,
    // NumbersOnlyDirective,
    // KeyPatternControllerDirective,
    // LoadingSpinnerComponent,

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
