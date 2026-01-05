import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from './api.module';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient);

  getTodos(): Observable<Todos> {
    return this.httpClient.get<Todos>(
      'https://68d98f9d90a75154f0daacbe.mockapi.io/api/v1/todos'
    );
  }
}
