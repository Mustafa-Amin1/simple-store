import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('expandedAnimation', [
      state(
        'opened',
        style({
          width: '100%',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          width: '0%',
          opacity: 0,

        })
      ),
      transition('opened => closed', animate('400ms ease-in-out')),
      transition('closed => opened', animate('400ms ease-in-out'))
    ]),
  ]
})
export class NavbarComponent implements OnInit {

  public isCollapsed = false;
  public smallScreens = false
  public menuState: string = 'closed';

  public isLoggedIn = this._auth.isUserAuth()

  public currentLanguage = 'Arabic'

  constructor(
    public translate: TranslateService,
    private _auth: AuthService,
  ) { }
  @Input() language: string = this.currentLanguage;
  @Output() languageChanged: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
    //get selected language from local storage if there is
    if (localStorage.getItem('selectedLang')) {
      if (localStorage.getItem('selectedLang') == 'en') {
        this.currentLanguage = "English"
      } else {
        this.currentLanguage = "Arabic"
      }
    } else {
      this.currentLanguage = "Arabic"
    }
    this.selectLanguageChange()
  }
  public toggleMenu() {
    this.menuState = this.menuState === 'closed' ? 'opened' : 'closed';
    let toggleBtn = document.getElementById('toggleBtn')
    let toggleBtnIcon = document.getElementById('toggleBtnIcon')
    toggleBtnIcon?.classList.toggle('active')
    toggleBtn?.classList.toggle('active')
  }


  public changeLanguage(event:any) {
    let currentLanguage = event.target.innerText.replace(' ','')
    this.currentLanguage = currentLanguage == 'Arabic'? 'Arabic' : 'English'
    this.selectLanguageChange()
  }

  public selectLanguageChange() {
    let bodyTag = document.getElementsByTagName('body')[0]

    // change language flag src
    if (this.currentLanguage == 'Arabic') {

      // change app direction
      bodyTag.classList.add('direction-rtl')
      bodyTag.classList.remove('direction-ltr')
      // change app language
      this.translate.use('ar')
      localStorage.setItem('selectedLang', 'ar')
    

    } else {
        // change app direction
        bodyTag.classList.add('direction-ltr')
        bodyTag.classList.remove('direction-rtl')
        // change app language
        this.translate.use('en')
        localStorage.setItem('selectedLang', 'en')
    }
    // to send data to app component
    this.languageChanged.emit(this.currentLanguage);
  }

  signOut() {
    this._auth.signOut()
  }
}
