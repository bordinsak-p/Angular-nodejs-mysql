import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRespone } from '../models/products.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductRespone[]> {
    return this.http.get<ProductRespone[]>(`${environment.baseUrl}getProducts`)
  }


  saveProducts(product: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}addProduct`, product);
  }


  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.baseUrl}deleteProductPms/${id}`)
  }

  // return image path
  getProductImage(image: string): string {
    if (image) {
      return `${environment.baseUrl}images/${image}`
    }
    return 'assets/images/no_photo.jpg'
  }
}
