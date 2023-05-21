import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CategoriesListComponent } from './components/home/categories-list/categories-list.component';
import { ProductsListComponent } from './components/home/products-list/products-list.component';
import { ProductCardComponent } from './components/home/products-list/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [ HomeComponent, CategoriesListComponent, ProductsListComponent, ProductCardComponent, ProductDetailsComponent],
  imports: [SharedModule, HomeRoutingModule, FormsModule, ReactiveFormsModule,],
})
export class HomeModule {}
