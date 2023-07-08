import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/Product';
import { ServiceService } from 'src/app/service/service.service';
import { ICategory } from 'src/app/interface/Category';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  allProducts: IProduct[] = [];
  searchResult: IProduct[] = [];
  categorys: ICategory[] = [];
  searchTerm = ''
  constructor(private productService: ServiceService) {
    this.productService.getAllProduct().subscribe((product: any) => {
      this.allProducts = product.data;
      this.searchResult = this.allProducts;
    });
    this.productService.getAllCategory().subscribe((category: any) => this.categorys = category);
  }

  search() {
    if (this.searchTerm === "") {
      this.searchResult = this.allProducts;
    } else {
      this.searchResult = this.allProducts.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  filterCate(id: any) {
    if (id === "") {
      this.searchResult = this.allProducts;
    } else {
      this.searchResult = this.allProducts.filter((product) => product.categoryId == id)
    }
  }

  addtocart(data: IProduct) {
    const storedCartItems = localStorage.getItem('cartItems');
    let cartItems = [];
    if (storedCartItems) {
      cartItems = JSON.parse(storedCartItems);
    }
    cartItems.push(data);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
}
