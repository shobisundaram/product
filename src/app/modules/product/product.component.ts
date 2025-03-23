import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { NodataComponent } from '../nodata/nodata.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule,NgxPaginationModule,NodataComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products: any = [];
  filteredProducts: any = [];
  collections: string[] = ['All', 'Sports', 'Men', 'Women'];
  searchTerm: string = '';
  selectedCollection: string = 'All';
  searchSuggestions: string[] = [];
  searchSubject = new Subject<string>();

  currentPage = 1;
  itemsPerPage = 8;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
    this.setupSearch();
  }

  setupSearch() {
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term) => this.generateSuggestions(term));
  }

  onSearchChange(term: string) {
    this.searchTerm = term;
    this.searchSubject.next(term);
    this.filterProducts();
  }

  generateSuggestions(term: string) {
    if (!term) {
      this.searchSuggestions = [];
      return;
    }
    this.searchSuggestions = this.products
      .map((product: any) => product.name)
      .filter((name: string) => name.toLowerCase().includes(term.toLowerCase()))
      .slice(0, 5);
  }

  onSelectSuggestion(suggestion: string) {
    this.searchTerm = suggestion;
    this.searchSuggestions = [];
    this.filterProducts();
  }

  onCollectionChange(event: any) {
    this.selectedCollection = event.target.value;
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product: any) => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCollection = this.selectedCollection === 'All' || product.collection === this.selectedCollection;
      return matchesSearch && matchesCollection;
    });
    this.currentPage = 1;
  }

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }

  viewDetails(product: any) {
    console.log('View details for:', product);
  }

  onPageChange(event: number) {
    this.currentPage = event;
  }

  clearSearch() {
    this.searchTerm = '';
    this.searchSuggestions = [];
    this.filteredProducts = [...this.products];
  }
}
