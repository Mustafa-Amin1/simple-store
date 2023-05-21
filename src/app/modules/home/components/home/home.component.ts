import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { BehaviorSubject, debounceTime, Observable, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth-service';
import { HttpService } from 'src/app/core/services/http.service';
import { ErrorHandlingService } from 'src/app/layouts/main-layout/services/error-handling.service';
// import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  productsList!:any;

  constructor(
    private _http: HttpService,
    private _auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private errHandle:ErrorHandlingService,
    private notify:NotificationsService
  ) {
  
  }
  ngOnInit(): void {
    this.getProductsData()
  }

  getProductsData() {
    this._http.getReq('/products').subscribe(res=> {
      this.productsList = res
    })
  }

  getFilteredProductsByCategory(products:any) {
    this.productsList = products
  }

 
}
