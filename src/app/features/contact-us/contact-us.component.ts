import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

phoneNumberRegularExpression = new RegExp(`\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*`);

  contactUsForm = new FormGroup({
    fullNameInput: new FormControl('', [Validators.required]),
    emailInput: new FormControl('', [Validators.required, Validators.email]),
    phoneNumberInput: new FormControl('', [Validators.required, Validators.pattern(this.phoneNumberRegularExpression)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void { }
}
