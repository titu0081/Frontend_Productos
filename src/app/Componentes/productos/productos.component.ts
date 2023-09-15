import { Component, OnInit } from '@angular/core';
import { ProductoServicio } from 'src/app/Servicios/productosServicios';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private productoServicio: ProductoServicio) { }

  ngOnInit() {
    this.productoServicio.getAllProductos().subscribe((data: any) => {
      this.productos = data as any[];
    });    
  }
}