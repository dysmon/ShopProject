import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Furniture } from '../interfaces/furniture';
import { Category } from '../interfaces/category';
import { Token } from '../interfaces/token';
import { Message } from '../interfaces/contactMessage';
import { Newsletter } from '../interfaces/newsletter';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(`${this.BASE_URL}/login/`, {
      username,
      password,
    });
  }

  getFurnitures(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(`${this.BASE_URL}/furniture/`);
  }

  getFurnitureById(id: number): Observable<Furniture> {
    return this.http.get<Furniture>(`${this.BASE_URL}/furniture/${id}`);
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/categories/`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/category/${id}`);
  }

  postMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.BASE_URL}/messages/`, message);
  }

  postNewsletter(newsletter: Newsletter): Observable<Newsletter> {
    return this.http.post<Newsletter>(
      `${this.BASE_URL}/newsletter/`,
      newsletter
    );
  }
}
