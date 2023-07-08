import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ClientComponent } from './layout/client/client.component';
import { SigninComponent } from './layout/signin/signin.component';
import { ProductAdminComponent } from './component/product-admin/product-admin.component';
import { AddProductComponent } from './component/product-admin/add-product/add-product.component';
import { UpdateProductComponent } from './component/product-admin/update-product/update-product.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { CategoryAdminComponent } from './component/category-admin/category-admin.component';
import { AddCategoryComponent } from './component/category-admin/add-category/add-category.component';
import { EditCategoryComponent } from './component/category-admin/edit-category/edit-category.component';

import { SignupComponent } from './layout/signup/signup.component';

import { ProductPageComponent } from './component/product-page/product-page.component';
import { ContactComponent } from './component/contact/contact.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailComponent } from './layout/client/product-detail/product-detail.component';
const routes: Routes = [
  {
    path: "", component: ClientComponent, children: [
      { path: "signin", component: SigninComponent },
      { path: "signup", component: SignupComponent },
      { path: "", component: HomePageComponent },
      { path: "product-page", component: ProductPageComponent },
      { path: "contact", component: ContactComponent },
      { path: "product-page/cart/:id", component: CartComponent },
      { path: "product-page/:id", component: ProductDetailComponent }

    ]
  },
  {
    path: "admin", component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "products", component: ProductAdminComponent },
      { path: "products/add", component: AddProductComponent },
      { path: "products/update/:id", component: UpdateProductComponent },
      { path: "categorys", component: CategoryAdminComponent },
      { path: "categorys/add", component: AddCategoryComponent },
      { path: "categorys/update/:id", component: EditCategoryComponent }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
