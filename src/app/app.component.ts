import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    SearchComponent,
    CounterComponent,
    TodoListComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'meteo';
}
