import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todolist';
  asem: String = 'Asem Farhan';

  constructor(){
    this.asem ='Asem F Const';
    this.ChangeName(this.asem)
  }

  ChangeName = (name) =>{
    this.asem ='Asem F ChangeName';
  }
}
