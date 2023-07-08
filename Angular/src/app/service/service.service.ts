import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IProduct } from '../interface/Product';
import { Observable } from 'rxjs';
import { ICategory } from '../interface/Category';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API_URL: string = `http://localhost:8080/api`
  constructor(private http: HttpClient) { }

  AddProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}/products`, product)
  }
  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}/products`)
  }
  getOneProduct(_id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/products/${_id}`)
  }
  deleteProduct(_id: any): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/products/${_id}`)
  }
  UpdateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_URL}/products/${product._id}`, product)
  }


  getAllCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.API_URL}/categorys`)
  }
  AddCategory(category: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/categorys`, category)
  }
  deleteCategory(_id: any): Observable<ICategory> {
    return this.http.delete<ICategory>(`${this.API_URL}/categorys/${_id}`)
  }
  getCategoryById(_id: any): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.API_URL}/categorys/${_id}`)
  }
  updateCategory(category: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(`${this.API_URL}/categorys/${category._id}`, category)
  }
}
