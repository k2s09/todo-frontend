import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHeaderComponent } from '../todo-header/todo-header.component';
import { TodoNewComponent } from '../todo-new/todo-new.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoOptionsComponent } from '../todo-options/todo-options.component';
import { TodosService } from '../../services/todos.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [
    CommonModule,
    TodoHeaderComponent,
    TodoNewComponent,
    TodoListComponent,
    TodoOptionsComponent,
  ],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css',
})
export class TodoCardComponent implements OnInit {
  todosService = inject(TodosService);

  get todos() {
    return this.todosService.todos;
  }

  get filteredTodos() {
    return this.todosService.filteredTodos;
  }

  get todosLeft() {
    return this.todosService.todosLeft;
  }

  ngOnInit(): void {
    this.todosService.getTodos().pipe(take(1)).subscribe();
  }
}
