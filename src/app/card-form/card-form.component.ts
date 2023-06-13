import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control'; 
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.maxLength(5),
      Validators.minLength(5),
    ]),
  });
}
