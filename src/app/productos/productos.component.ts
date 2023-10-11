import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent {

  private dataUrl = 'assets/productos.json';

  productos: any[]=[];

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any[]>(this.dataUrl);
  }

  searchProductByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl).pipe(
      map((data: any[]) => data.filter(product => product.name.toLowerCase().includes(name.toLowerCase())))
    );
  }

  ngOnInit(): void {
    this.getData().subscribe(data => {
      this.productos = data.productos;
      console.log(this.productos);
    });
  }

}
