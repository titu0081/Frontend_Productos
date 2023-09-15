import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class ProductoServicio {
 private apiUrl = 'https://localhost:44325/api/productos';

 constructor(private http: HttpClient) { }

 getAllProductos() {
   return this.http.get(this.apiUrl);
 }

 getProducto(id: number) {
   return this.http.get(`${this.apiUrl}/${id}`);
 }

 addProducto(producto: any) {
   return this.http.post(this.apiUrl, producto);
 }

 updateProducto(id: number, producto: any) {
   return this.http.put(`${this.apiUrl}/${id}`, producto);
 }

 deleteProducto(id: number) {
   return this.http.delete(`${this.apiUrl}/${id}`);
 }
}
