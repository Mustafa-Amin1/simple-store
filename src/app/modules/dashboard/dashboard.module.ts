import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ProductSettingComponent } from './components/product-setting/product-setting.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InputMaskDirective } from 'src/app/shared/directives/input-mask.directive';

@NgModule({
  declarations: [DashboardComponent, ProductSettingComponent,
    InputMaskDirective
  ],
  imports: [SharedModule, DashboardRoutingModule, FormsModule, ReactiveFormsModule,
    MatTableModule, MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
})
export class DashboardModule { }
