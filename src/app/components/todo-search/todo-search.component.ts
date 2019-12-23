import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Todo } from 'src/app/module/Todo';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() todosOutput: Todo[];
  @Output() modelOutput: EventEmitter <String>= new EventEmitter(); 
  all: any[];
  model: any;

  constructor() {      }

ngOnInit() {
  this.changeAll();
    }

changeAll(){
    var Alltitle = [];  
    this.todos.filter(data => {true
    Alltitle.push( data.title) })
    this.all= Alltitle;
}

search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.all.filter(data => data.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))) 

onClick() {
  var text$=this.model
var assssss=(text$: Observable<string>) =>
text$.pipe(
  debounceTime(200),
  distinctUntilChanged(),
  map(term => term.length < 1 ? []
    : this.all.filter(data => data.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)))

          this.modelOutput.emit(this.model);
          this.changeAll();
  }
}
