import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Furniture } from '../../interfaces/furniture';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  furniture!: Furniture[];

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.fetchFurnitures();
  }

  fetchFurnitures(): void {
    this.service.getFurnitures().subscribe((furniture) => {
      this.furniture = furniture;
    });
  }
}
