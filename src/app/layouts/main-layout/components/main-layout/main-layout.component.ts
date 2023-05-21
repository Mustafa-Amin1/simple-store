import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public language = 'Arabic';
  public selectedLang= "'currentTheme' | translate"
  public currentLang = 'ar';

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    if(localStorage.getItem('selectedLang')) {
      if(localStorage.getItem('selectedLang') == 'en') {
        this.language="English"
        this.currentLang = 'en'
        // change app language
        this.translate.use('en')
      }else {
        this.language="Arabic"
        this.currentLang = 'ar'
        // change app language
        this.translate.use('ar')
      }
    }else {
      this.language="Arabic"
      this.currentLang = 'ar'
      // change app language
      this.translate.use('ar')
    }
  }

  languageChanged (language: string) {
    debugger
    this.language = language;
    console.log(language);
    let htmlTag = document.getElementsByTagName('html')[0]
    htmlTag.setAttribute('dir', this.language =='English'? 'ltr': 'rtl' )
    htmlTag.setAttribute('lang', this.language =='English'? 'en': 'ar' )
  }

 
}