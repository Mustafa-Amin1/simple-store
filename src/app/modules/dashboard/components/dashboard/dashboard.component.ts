import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth-service';
import { HttpService } from 'src/app/core/services/http.service';
import { ErrorHandlingService } from 'src/app/layouts/main-layout/services/error-handling.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  loading: boolean = false
  productsList!: Product[];
  displayedColumns: string[] = ['title', 'price', 'category', 'actions'];
  dataSource: any;

  constructor(private _auth: AuthService, private _http: HttpService, private errHandle: ErrorHandlingService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | any;




  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    // this.loading=true

    this._http.getReq('/products').subscribe(res => {
      console.log(res)
      // this.loading=false
      this.productsList = res
      this.dataSource = new MatTableDataSource<Product>(this.productsList)
      this.dataSource.paginator = this.paginator;

    }, err => {
      // this.loading=false
    })
  }
}

export interface Product {
  id: number;
  title: string;
  image: number;
  description: string;
  price: number;
  category: string;

}


