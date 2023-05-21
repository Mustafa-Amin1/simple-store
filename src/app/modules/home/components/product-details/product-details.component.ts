import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  productId!: number;
  productInfo!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _http: HttpService,
    public translate: TranslateService,

  ) {
    // get product id
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    // change app language

    if (localStorage.getItem('selectedLang')) {
      if (localStorage.getItem('selectedLang') == 'en') {
        this.translate.use('en')
      } else {
        this.translate.use('ar')
      }
    } else {
      this.translate.use('ar')
    }
  }

  ngOnInit(): void {
    this.getProductInfo(this.productId)
  }

  getProductInfo(productId: number) {
    this._http.getReq(`/products/${productId}`).subscribe(res => {
      this.productInfo = res
    })
  }

}
