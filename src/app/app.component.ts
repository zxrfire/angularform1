import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    middlename: new FormControl(),
    dob: new FormControl('', [Validators.required]),
    sap: new FormControl(),
    doj: new FormControl('', [Validators.required]),
    project: new FormControl()
  })
  data = false;


  onSubmit() {
    console.log(this.contactForm.value);
    this.data = true;
  }
}

