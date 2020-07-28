import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statusArray = ['Stable', 'Critical', 'Finished'];
  unallowedProject = ['Test', 'Teste'];
  unallowedEmails = ['test@test.com', 'string7dev@gmail.com'];


  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, this.unallowedProjectName.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email], this.unallowedEmail),
      'status': new FormControl(null)
    })
    this.projectForm.statusChanges.subscribe(
      (status) => console.log(status)
    )
  }

  onSubmit() {
    console.log(this.projectForm)
  }

  unallowedProjectName(control: FormControl): {[key: string]: boolean} {
    if (this.unallowedProject.find(item => item === control.value)) {
      return {'nameIsUnallowed': true};
    } else {
      return null;
    }
  }

  unallowedEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailIsUnallowed: true})
        } else {
          resolve(null)
        }
      }, 2000)
    })
    return promise;
  }
}
