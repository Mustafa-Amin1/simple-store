import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { UserInterceptorInterceptor } from 'src/app/core/interceptors/user-interceptor.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';


// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    AuthLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),

  ],
  
  // providers:[
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: UserInterceptorInterceptor,
  //     multi: true,
  //   },
  // ]
})
export class AuthLayoutModule {}
