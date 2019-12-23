import { Component, OnInit, Output ,EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoSearchComponent } from '../todo-search/todo-search.component';
import { Todo} from '../../module/Todo';

import { TodoService } from '../../services/todo.service';
 
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements AfterViewInit {
  @ViewChild(AddTodoComponent, {static: true}) childAdd;
  todo2: Todo[];
  @Output() todos : Todo[];
  
  constructor( private todoService:TodoService) {   }

ngAfterViewInit() {
  //server
  this.todoService.getTodo().subscribe(data => {this.todos= data;
    this.todo2= data} );
}

searchTodo(model : String){
    if(model!=='')
    {    this.todos= this.todos.filter(data => data.title.toLowerCase().indexOf(model.toLowerCase()) > -1)
        if (this.todos.length==0)
          this.todos= this.todo2;}
    else 
    {this.todos= this.todo2;
    console.log(' elseeeess searchTodo', this.todos);
    }
  }

deleteTodo( todo : Todo){
    // Dlete from UI
    this.todos= this.todos.filter(data => data.id !==todo.id )
    this.todo2=this.todo2.filter(data => data.id !==todo.id )
    //Delete from server
    this.todoService.deleteTodo(todo).subscribe();
    if (this.todos.length==0)
    this.todos=this.todo2;
  }

addTodoMain(todo:Todo){
    this.todoService.addTodo(todo).subscribe(data =>{
      this.todo2.push(data);
      this.todos=this.todo2;
    });
  }

}
