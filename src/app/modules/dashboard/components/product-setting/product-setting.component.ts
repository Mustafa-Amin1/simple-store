import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { ErrorHandlingService } from 'src/app/layouts/main-layout/services/error-handling.service';

@Component({
  selector: 'app-product-setting',
  templateUrl: './product-setting.component.html',
  styleUrls: ['./product-setting.component.scss']
})
export class ProductSettingComponent {

  editForm!: UntypedFormGroup;
  loadingSubmit = false;
  productId!: number;
  productInfo!: any;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private _http: HttpService,
    private errHandle: ErrorHandlingService,
  ) {
    // get product id
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'))

  }

  ngOnInit(): void {
    // init edit form
    this.editForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        // Validators.email,
      ]],
      price: [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
      description: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
    });

    this.getProductInfo(this.productId)

  }

  getProductInfo(productId: number) {
    this._http.getReq(`/products/${productId}`).subscribe(res => {
      this.productInfo = res
      // bind form data
      this.editForm = this.formBuilder.group({
        title: [this.productInfo?.title || '', [
          Validators.required,
          // Validators.email,
        ]],
        price: [
          this.productInfo?.price || null,
          Validators.compose([
            Validators.required,
          ]),
        ],
        description: [
          this.productInfo?.description || '',
          Validators.compose([
            Validators.required,
          ]),
        ],
      });
    })

  }


  submitEdit() {
    if (this.editForm.valid) {
      this.loadingSubmit = true;
      this._http.putReq(`/products/${this.productId}`, this.editForm.value).subscribe(res => {
        alert('product updated successfully')
      })
    }
    else {
      this.editForm.markAllAsTouched();
    }
    this.loadingSubmit = false;

  }

  backToPrevPage() {
    this.route.navigate(['/dashboard'])
  }
}
