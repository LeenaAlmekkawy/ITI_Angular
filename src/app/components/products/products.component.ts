import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../models/category.model';
import { Observer } from 'rxjs';
import { ProductApiResponse } from "../../models/ProductApiResponse.model"
@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private http: HttpClient) { }

  currentCategory: string = "All";
  currentProductTitle: string = "";
  urlStr: string = "";
  currentPrice: number = 500;
  products: Product[] = [];

  categories: string[] = [];

  getFilterValues(newCurrentCategory: string, newProductTitle: string, newPrice: number) {
    this.currentPrice = newPrice;
    this.currentCategory = newCurrentCategory;
    this.currentProductTitle = newProductTitle || "";;


    if (this.currentCategory == "All") {
      this.urlStr = "";
    }
    else {
      this.urlStr = "/category/" + this.currentCategory;
    }


    this.http.get<ProductApiResponse>("https://dummyjson.com/products" + this.urlStr)
      .subscribe({
        next: (response) => {
          const filtered = response.products.filter(product => {
            const matchesTitle = product.title.toLowerCase().includes(newProductTitle.toLowerCase());
            const matchesPrice = newPrice === null || (product.price <= newPrice);
            return matchesTitle && matchesPrice;
          });

          this.products = filtered;
        }
        , error: () => { }
      });



  }
  ngOnInit(): void {
    this.http.get<string[]>("https://dummyjson.com/products/category-list")
      .subscribe({
        next: (response) => {
          this.categories = response;

        }
        , error: () => { }
      });

    this.http.get<ProductApiResponse>("https://dummyjson.com/products")
      .subscribe({
        next: (response) => {
          this.products = response.products;


        }
        , error: () => { }
      });
  }

}
