import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-store';
  constructor(public translate: TranslateService) {
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
  }
}
