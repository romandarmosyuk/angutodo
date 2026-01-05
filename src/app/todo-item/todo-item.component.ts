import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '@angutodo/api';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.less',
})
export class TodoItemComponent {
  @Input() todo?: Todo;
}
