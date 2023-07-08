import { Component } from '@angular/core';
import { ServiceService } from '../../../service/service.service';
import { IProduct } from '../../../interface/Product';
import ObjectID from 'bson-objectid';
import { ICategory } from '../../../interface/Category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  product: IProduct = {
    name: "",
    auther: "",
    published: "",
    description: "",
    image: "",
    price: 0,
    quantity: 0,
    date: "",
    categoryId: new ObjectID
  }
  category: ICategory[] = []
  showSuccessAlert = false;
  constructor(private productService: ServiceService, private route: ActivatedRoute) {
    this.productService.getAllCategory().subscribe((category) => this.category = category)
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')
      this.productService.getOneProduct(id).subscribe((product: any) => this.product = product.data)
    })

  }

  onHandelSubmit() {
    this.productService.UpdateProduct(this.product).subscribe((product) => {
      console.log(product);
      this.showSuccessAlert = true;
    });
  }
}
