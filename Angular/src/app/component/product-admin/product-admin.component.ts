import { Component } from '@angular/core';
import { IProduct } from '../../interface/Product';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent {
  products: IProduct[] = []
  searchResult: IProduct[] = [];
  searchTerm = ""
  constructor(private productService: ServiceService, private route : Router) {
    this.productService.getAllProduct().subscribe((product: any) => {
      this.products = product.data
      this.searchResult = this.products
    })
  }

  search() {
    if (this.searchTerm === "") {
      this.searchResult = this.products;
    } else {
      this.searchResult = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  onRemove(_id: any) {
    if (confirm("bạn có muốn xoá sản phẩm này không")) {
      this.productService.deleteProduct(_id).subscribe(() => this.products = this.products.filter((item) => item._id != _id))
      alert("Xóa sản phẩm thành công")
      window.location.reload()
    }
   
  }
}
