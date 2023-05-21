import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/core/services/validation.service';

@Component({
  selector: 'form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss']
})
export class FormErrorsComponent implements OnInit {
  @Input() control: any;
  emailRegex = this.validation.emailPattern;
  alphaRegex = this.validation.alphaPattern;
  numericalRegex = this.validation.numerical;

  passwordRegex = this.validation.passwordPattern;

  passwordLettersPattern = this.validation.passwordLettersPattern;
  passwordNumbersPattern = this.validation.passwordNumbersPattern;
  passwordSpecialCharPattern = this.validation.passwordSpecialCharPattern;

  constructor(private validation: ValidationService) { }

  ngOnInit(): void {
  }

  getControlName(c: AbstractControl): string | null {
    const formGroup: any = c.parent?.controls;
    if (formGroup) {
      return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
    }

    return null;
  }

}
