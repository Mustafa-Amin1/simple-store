import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomeGuard } from 'src/app/core/guards/home.guard';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('../../modules/home/home.module').then(
            (m) => m.HomeModule
          ),
        canActivate: [HomeGuard],
        
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        canActivate: [AdminGuard],

      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
