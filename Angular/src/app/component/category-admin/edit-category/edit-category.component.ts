import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/Category';
import { ServiceService } from 'src/app/service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent {
  category: ICategory = {
    name: "",
  }
  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id')
      this.serviceService.getCategoryById(id).subscribe((product: any) => this.category = product.data)
    })
  }
  onHandleSubmit() {
    this.serviceService.updateCategory(this.category).subscribe(category => {
      console.log(category);
      alert("Cập nhập danh mục thành công")
      this.router.navigate(['/admin/categorys'])
    })
  }
}
