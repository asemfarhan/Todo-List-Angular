import { Component, OnInit } from '@angular/core';
import { Todo} from '../../module/Todo';

import { TodoService } from '../../services/todo.service';
 
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos : Todo[]; 
  model = {
    left: true,
    middle: false,
    right: false
  };


  constructor( private todoService:TodoService) { 
  }

  ngOnInit() {
    //server
   this.todoService.getTodo().subscribe(data => 
    {this.todos= data;
    console.log(data);
    });
  }
  
  deleteTodo( todo : Todo){
    // Dlete from UI
    this.todos= this.todos.filter(data => data.id !==todo.id )
    //Delete from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodoMain(todo:Todo){
    console.log('Arraive to addTodoMain', todo);
    console.log('After to this.todos', this.todos);

    this.todoService.addTodo(todo).subscribe(data =>{
      console.log('addTodo',data)
      this.todos.push(data);
    });

    
  }

}
