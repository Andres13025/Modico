import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  displayedColumns: string[] = ['position', 'name', 'price', 'amount','urlimage','discount','actions'];
  dataSource = [
    {position: '001', name: 'Fresas', price: 1500, amount: 3, urlimage: 'https://', discount:0},
    {position: '002', name: 'Lechuga', price: 1000, amount: 1, urlimage: 'https://', discount:50},
    {position: '003', name: 'Sandía', price: 3000, amount: 1, urlimage: 'https://', discount:50},
  ];
}
