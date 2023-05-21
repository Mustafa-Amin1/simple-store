import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CategoriesListComponent } from './components/home/categories-list/categories-list.component';
import { ProductsListComponent } from './components/home/products-list/products-list.component';
import { ProductCardComponent } from './components/home/products-list/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ HomeComponent, CategoriesListComponent, ProductsListComponent, ProductCardComponent, ProductDetailsComponent],
  imports: [SharedModule, HomeRoutingModule, FormsModule, ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage:"en",
      loader: {
        provide: TranslateLoader,
        useClass: TranslateFakeLoader,
        useFactory: CreateTranslateLoader,
        deps: [HttpClient],
      },

    }),
  ],
})
export class HomeModule {
  
}


//language function
export function CreateTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'../../../assets/i18n/','.json')
}