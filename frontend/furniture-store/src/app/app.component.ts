import { Component, Inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApiService } from './services/api.service';
import { DOCUMENT } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    AdvantagesComponent,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'furniture-store';

  logged: boolean = false;
  username: string = '';
  password: string = '';

  constructor(
    private service: ApiService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    const localStorage = this.document.defaultView?.localStorage;

    if (localStorage) {
      const access = localStorage.getItem('access');
      if (access) {
        this.logged = true;
      }
    }
  }

  login() {
    this.service.login(this.username, this.password).subscribe((data) => {
      this.logged = true;
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
    });
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }
}
