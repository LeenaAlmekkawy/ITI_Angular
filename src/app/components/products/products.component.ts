import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  currentCategory: string = "All";
  currentProductTitle: string = "none";
  currentPrice: number = 0;
  products: Product[] = [
    { id: 1, title: 'iPhone 15 Pro', stock: 25, category: 'Electronics', price: 999 },
    { id: 2, title: 'Nike Air Max', stock: 50, category: 'Shoes', price: 120 },
    { id: 3, title: 'Levi\'s Jeans', stock: 40, category: 'Clothing', price: 89 }

  ];
  changeCurrentCategory(newCurrentCategory: string) {
    this.currentCategory = newCurrentCategory;
  }
  changeProductTitle(newProductTitle: string) {
    this.currentProductTitle = newProductTitle;
  }
  changeCurrentPrice(newPrice: number) {
    this.currentPrice = newPrice;
  }
  getFilterValues(newCurrentCategory: string, newProductTitle: string, newPrice: number) {
    this.currentPrice = newPrice;
    this.currentCategory = newCurrentCategory;
    this.currentProductTitle = newProductTitle || "none";;

  }

}
