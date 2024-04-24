import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FurnitureDetailComponent } from './components/furniture-detail/furniture-detail.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'furniture', component: ShopComponent, title: 'Shop' },
  { path: 'furniture/:id', component: FurnitureDetailComponent, title: 'Furniture Detail'},
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
