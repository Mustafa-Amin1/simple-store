import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  passwordPattern = /^.(?=.*[a-z])(?=.*[0-9])(?=.*[~!@#$%^&*()_-]).{7,}$/;
  emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
  preventSpaces = "^[A-Za-z][A-Za-z0-9]*$";



  // ***** password validations
  passwordLettersPattern = /[A-Za-z]/;
  passwordCapitalLetterPatter = /[A-Z]/;
  passwordSmallLetterPatter = /[a-z]/;
  passwordNumbersPattern = /\d/;
  passwordSpecialCharPattern = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

  constructor() { }


}