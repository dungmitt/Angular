import { Component } from '@angular/core';
import { ICategory } from 'src/app/interface/Category';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent {
  category: ICategory[] = []
  constructor(private categoryService: ServiceService){
    this.categoryService.getAllCategory().subscribe(data=>{
      this.category = data
    })
  }
  RemoveCategory(_id:any){
    this.categoryService.deleteCategory(_id).subscribe(()=>{
      this.category = this.category.filter(item=>item._id!=_id)
    })
  }
}
