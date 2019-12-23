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

  constructor(private http:HttpClient) {
   }

   
  getTodo () : Observable<Todo[]> {
    return this.http.get<Todo[]> (`${this.todoUrl}${this.limit}`)
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