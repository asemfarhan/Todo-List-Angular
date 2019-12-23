import { Component, OnInit , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
@Output() addTodoOutput : EventEmitter <any> = new EventEmitter();
  title: String;

  constructor() { }

  ngOnInit() {
  }

  addTodo(){
    const todo1= {
      title : this.title ,
      completed: false}
      if(this.title){
      this.addTodoOutput.emit(todo1);
      this.title='';}
  }
}
