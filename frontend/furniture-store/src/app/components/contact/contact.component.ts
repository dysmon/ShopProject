import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Message } from '../../interfaces/contactMessage';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private service: ApiService) {}

  formData: Message = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  sendMessage(formData: Message) {
    this.service.postMessage(formData).subscribe();
    alert('Message successfully sent');
    location.reload();
  }
}
