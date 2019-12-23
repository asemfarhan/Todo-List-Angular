import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/module/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo:Todo;
@Output() deleteTodo : EventEmitter<Todo> =new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    
  }

  setClass (){
    let classCSS={
      item: true,
      isCompletedCSS:this.todo.completed
    }
    return classCSS;
  }

  onTaggle(todo : Todo){
    console.log("taggle");
    this.todo.completed= !todo.completed;
    this.todoService.taggoleCompleted(todo).subscribe(data =>{
      console.log(data)
    })
  }

  onDelete(){
    console.log("onClick");
    this.deleteTodo.emit(this.todo);
    console.log("this.deleteTodo", this.deleteTodo);

  }
}
