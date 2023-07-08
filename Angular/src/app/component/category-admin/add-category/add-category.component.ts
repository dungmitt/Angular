import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/Category';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  // category: ICategory ={
  //   name : ""
  // }
  formAdd= this.fb.group({
    name:['', [Validators.required]]
  })
  constructor(private categoryService: ServiceService,
    private router: Router,
    private fb: FormBuilder) {}
  onHandleSubmit(){
    if(this.formAdd.invalid){
      return
    }
    this.categoryService.AddCategory(this.formAdd.value).subscribe(category=>{
      console.log(category);
      alert("Thêm danh mục thành công")
      this.router.navigate(['/admin/categorys'])
    })
  }
}
