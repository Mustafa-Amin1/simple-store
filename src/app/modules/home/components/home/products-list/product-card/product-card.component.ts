import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  constructor(
    public translate: TranslateService,
  ) {
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

  @Input() productInfo!: any;


  ngOnInit() {

  }
}
