import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  discount: boolean;
  discountPrice?: number;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products: Product[] = [
    { id: 1, name: 'Cairbull Cycling Helmet', category: 'Category 1', price: 100, imageUrl: 'assets/images/product-1.png',discount: true, discountPrice: 10 },
    { id: 2, name: 'East Coast Cycle', category: 'Category 2', price: 200, imageUrl: 'assets/images/product-2.png',discount: true, discountPrice: 15 },
    { id: 3, name: 'Hero Sprint Ripot 26T single speed Mountain Cycle', category: 'Category 3', price: 150, imageUrl: 'assets/images/product-3.png',discount: false },
    { id: 4, name: 'VESCO Drift 24 T Cycle 7 Speed Gear | Kids Cycle For Boys 9-13', category: 'Category 4', price: 250, imageUrl: 'assets/images/product-4.png',discount: false },
    { id: 5, name: 'EI Contente Bicycle helmet Mountain Bike', category: 'Category 5', price: 250, imageUrl: 'assets/images/product-5.png',discount: false},
    // { id: 6, name: 'Product 6', category: 'Category 6', price: 100, imageUrl: 'assets/images/product-6.png',discount: true,discountPrice: 3 },
    { id: 7, name: 'Full Finger Riding Gloves', category: 'Category 7', price: 200, imageUrl: 'assets/images/product-7.png',discountPrice: 5 ,discount: true},
    { id: 8, name: 'STRAUSS Cycling Gloves,Small (Red)', category: 'Category 8', price: 150, imageUrl: 'assets/images/product-8.png',discount: true,discountPrice: 12 },
    { id: 9, name: 'PALAY Hand Gloves(One Size Fits All)', category: 'Category 9', price: 250, imageUrl: 'assets/images/product-9.png',discount: true,discountPrice: 11 },
    { id: 10, name: 'XTRIM CycleON Cycling Gloves', category: 'Category 10', price: 250, imageUrl: 'assets/images/product-10.png',discount: false },
    { id: 11, name: 'Adidas Men Trainers COURTBEAT SHOES', category: 'Category 11', price: 250, imageUrl: 'assets/images/product-11.png',discount: true,discountPrice: 7 },
    { id: 12, name: 'New Balance Men Sneakers', category: 'Category 12', price: 250, imageUrl: 'assets/images/product-12.png',discount: true,discountPrice: 6 },
    { id: 13, name: 'Nike air Force Shoes', category: 'Category 13', price: 250, imageUrl: 'assets/images/product-13.png',discount: false },
    { id: 14, name: 'New Balance Unisex Sneaker - Shoes', category: 'Category 14', price: 250, imageUrl: 'assets/images/product-14.png',discount: false },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(product => product.category))];
  }
}
