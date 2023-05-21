import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from 'src/app/core/guards/home.guard';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [HomeGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [HomeGuard],
  },
  {path:'products/:id',component:ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
