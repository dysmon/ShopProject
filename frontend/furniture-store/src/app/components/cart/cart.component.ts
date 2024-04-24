import { Component } from '@angular/core';
import { Furniture } from '../../interfaces/furniture';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  total: number = 0;
  storage?: Furniture[];
  quantity: number[] = new Array(50);
  subtotal: number[] = new Array(50);

  ngOnInit() {
    const sessionStorageValues = Object.values(sessionStorage);
    this.storage = sessionStorageValues.map((value) => JSON.parse(value));
    this.quantity.fill(1);
  }

  deleteItemFromSession(id: number) {
    this.storage = this.storage?.filter((item) => item.id != id);
    sessionStorage.removeItem(id.toString());
    this.quantity[id] = 1;
    this.subtotal[id] = 0;
  }

  calculateSubtotal(id: number, price: number): number {
    this.subtotal[id] = price * this.quantity[id];
    return this.subtotal[id];
  }

  calculateTotal(): number {
    this.total = this.subtotal.reduce((total, current) => total + current, 0);
    return this.total;
  }
}
