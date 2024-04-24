import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Newsletter } from '../../interfaces/newsletter';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private service: ApiService) {}

  ngOnInit() {}

  formData: Newsletter = {
    email: '',
  };

  sendEmail(formData: Newsletter) {
    this.service.postNewsletter(formData).subscribe();
    alert('Subscribed Succesfully');
    location.reload();
  }
}
