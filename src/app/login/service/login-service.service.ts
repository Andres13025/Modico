import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private dataUrl = 'assets/user.json'; // Ruta al archivo JSON
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any[]>(this.dataUrl);
  }

  searchProductByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl).pipe(
      map((data: any[]) => data.filter(product => product.name.toLowerCase().includes(name.toLowerCase())))
    );
  }

}
