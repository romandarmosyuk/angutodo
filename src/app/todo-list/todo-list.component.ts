import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { ApiService } from '@angutodo/api';
import { tap } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.less',
})
export class TodoListComponent {
  private readonly apiService = inject(ApiService);

  readonly todo$ = this.apiService
    .getTodos()
    .pipe(tap((value) => console.info(value)));
}
