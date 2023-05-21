import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { FormsModule } from '@angular/forms';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
//ngx translate
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, 
    MainLayoutRoutingModule, 
    FormsModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage:"en",
      loader: {
        provide: TranslateLoader,
        // useClass: TranslateFakeLoader,
        useFactory: CreateTranslateLoader,
        deps: [HttpClient],
      },

    }),
],
})
export class MainLayoutModule {}

//language function
export function CreateTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'../../../assets/i18n/','.json')
}
