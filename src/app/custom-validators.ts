import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

interface ErrorProp {
  [key: string]: boolean;
}

export class CustomValidators {
  static invalidProjectName(control: FormControl): ErrorProp {
    if (control.value === 'Test') {
      return {'ProjectNameIsInvalid': true}
    }
    return null;
  }

  static asyncInvalidEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'EmailIsInvalid': true})
        } else {
          resolve(null);
        }
      }, 2000)
    })
    return promise;
  }
}
