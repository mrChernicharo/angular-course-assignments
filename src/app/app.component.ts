import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) formData: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  data = {
    email: '',
    subscription: '',
    password: ''
  }
  submitted = false

  onSubmit(form: NgForm) {
    console.log(this.formData.value)
    this.data.email = this.formData.value.email;
    this.data.subscription = this.formData.value.subscription;
    this.data.password = this.formData.value.password;
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false
    }, 3000)
  }
}
