import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() control: FormControl;
  @Input() label: string;

  showError() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
