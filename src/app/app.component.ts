import { Component, OnInit, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  name = 'Angular ' + VERSION.major;
  form: FormGroup = new FormGroup({
    preferredContactMethod: new FormControl(''),
    name: new FormControl(''),
    subject: new FormControl(''),
  });
  private rootFormGroup: FormGroupDirective;

  ngOnInit(): void {}

  submitForm() {}
}
