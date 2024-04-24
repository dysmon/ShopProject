import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Furniture } from '../../interfaces/furniture';
import { CommonModule } from '@angular/common';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-furniture-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './furniture-detail.component.html',
  styleUrl: './furniture-detail.component.css',
})
export class FurnitureDetailComponent {
  furnitureId!: number;
  categories!: Category[];
  furniture?: Furniture;

  constructor(private route: ActivatedRoute, private service: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.furnitureId = Number(params.get('id'));
      this.fetchFurnitureById(this.furnitureId);
      this.fetchCategories();
    });
  }

  fetchFurnitureById(id: number) {
    this.service.getFurnitureById(id).subscribe((data) => {
      this.furniture = data;
    });
  }

  fetchCategories() {
    this.service.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }

  saveProductToSessionStorage(furniture: Furniture): void {
    alert(`${this.furniture?.name} is added to your cart`);
    sessionStorage.setItem(furniture.id.toString(), JSON.stringify(furniture));
  }
}
