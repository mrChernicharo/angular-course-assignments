import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    div.panel {
      text-align: center;
      margin: 2px 30px;
    }
    .white-text {
      color: white;
      font-weight: bold;
    }
  `]
})
export class AppComponent {
  password: string = 'avocado';
  displayPassword: boolean = false;
  buttonLogs = [];


  onButtonClick () {
    this.buttonLogs.push(`${this.buttonLogs.length}`)
    this.displayPassword = !this.displayPassword;
    console.log(this.buttonLogs)
  }

}
