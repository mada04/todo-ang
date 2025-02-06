import { Injectable } from '@angular/core';
import { LocalStorageServiceService } from '../local-storage-service.service';
import { Product } from '../task';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = []
  constructor(private localStorageService: LocalStorageServiceService) { this.loadProducts() }
  private saveProducts() {
    this.localStorageService.setItem('products', JSON.stringify(this.products));
  }

  private loadProducts() {
    const savedProducts = this.localStorageService.getItem('products');
    if (savedProducts) {
      this.products = JSON.parse(savedProducts);
    }
  }


  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.saveProducts();

  }
  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    this.saveProducts();
  }


  updateProduct(updatedProduct: Product) {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      this.saveProducts();
    }
  }

}
