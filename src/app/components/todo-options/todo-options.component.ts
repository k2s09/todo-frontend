import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoOption } from '../../models/todo-option';
import { TodosService } from '../../services/todos.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-todo-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-options.component.html',
  styleUrl: './todo-options.component.css',
})
export class TodoOptionsComponent {
  @Input({ required: true }) todosLeft!: number;

  todosService = inject(TodosService);

  get selectedOption() {
    return this.todosService.selectedOption;
  }

  todoOptions: TodoOption[] = ['all', 'active', 'completed'];

  onSelectOption(option: TodoOption) {
    this.todosService.selectTodoOption(option);
  }

  onClearCompleted() {
    this.todosService.clearCompletedTodo().pipe(take(1)).subscribe();
  }
}
