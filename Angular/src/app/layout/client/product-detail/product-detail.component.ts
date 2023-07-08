import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/Product';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: IProduct = {
    name: "",
    auther: "",
    published: "",
    description: "",
    image: "",
    price: 0,
    quantity: 0,
    date: "",
  }
  constructor(private productService: ServiceService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id")
      this.productService.getOneProduct(id).subscribe((data: any) => this.product = data.data)
    })
  }
}
