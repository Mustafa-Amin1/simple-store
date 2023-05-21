import { Injectable } from '@angular/core';
import {NotificationsService} from 'angular2-notifications'

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor(private notify:NotificationsService) { }

  errorHandling(err:any ){
    if ( err.error?.status_code == 422 ) {
      let errorKeys = Object.keys(err?.error.validator)
      this.notify.error("", err?.error.validator[errorKeys[0]][0]);

    } else if (err?.error?.message) {
      this.notify.error('', err?.error?.message);
    }else {
      this.notify.error('', 'Something wrong happened, please try again later');
    }
  }

}
