import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Todo } from '../module/Todo'

const httpHeaderOption=  {
  headers : new HttpHeaders({  
    'Content-Type' : 'application/json'
})
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl: String = 'https://jsonplaceholder.typicode.com/todos';
  limit = '?_limit=8';
  todo_DB: Todo[] =[
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    }]

  constructor(private http:HttpClient) {
   }

    
  getTodo () {
  // To enable API https://jsonplaceholder.typicode.com/todos
  // getTodo () : Observable<Todo[]> {
  // return this.http.get<Todo[]> (`${this.todoUrl}${this.limit}`)
    return this.todo_DB;
  }

  taggoleCompleted(todo:Todo) : Observable<any> {
      const url= `${this.todoUrl}/${todo.id}`;
      return this.http.put<Todo[]> ( url ,todo, httpHeaderOption)
      }

  deleteTodo(todo: Todo) : Observable<any>{
        console.log('delete this todo item :',todo.title);
        const url= `${this.todoUrl}/${todo.id}`;
        return this.http.delete<Todo> (url,httpHeaderOption)
      }

    addTodo(todo:Todo) : Observable<Todo>{
      return this.http.post<Todo> ( `${this.todoUrl}` ,todo, httpHeaderOption)
    }
}