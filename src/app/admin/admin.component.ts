import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface PeriodicElement {
  position: string;
  nameproduct: string;
  priceproduct: number;
  amount: number;
  urlimage: string;
  discount: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  form: FormGroup;
  displayedColumns: string[] = ['position', 'name', 'price', 'amount','urlimage','discount','actions'];
  dataSource: PeriodicElement[] = [
    {position: '001', nameproduct: 'Fresas', priceproduct: 1500, amount: 3, urlimage: 'https://', discount:0},
    {position: '002', nameproduct: 'Lechuga', priceproduct: 1000, amount: 1, urlimage: 'https://', discount:50},
    {position: '003', nameproduct: 'Sandía', priceproduct: 3000, amount: 1, urlimage: 'https://', discount:50},
  ];

  constructor(private formBuilder: FormBuilder,
    private router: Router) {
    this.form = this.formBuilder.group({
      position: ['', Validators.required]
      ,priceproduct: ['', Validators.required]
      ,amount: ['', Validators.required]
      ,nameproduct: ['', Validators.required]
      ,urlimage: ['', Validators.required]
      ,discount: ['', Validators.required]
    });
  }

  eliminarProducto(producto: PeriodicElement): void {
    console.log(producto);
    let newArray = this.dataSource.filter(item => item !== producto);
    this.dataSource = newArray;
  }

  onSubmit() {
    let formularioValues: PeriodicElement = this.form.value;
    const newData = [ ...this.dataSource ]; 
    newData.push(formularioValues);
    this.dataSource = newData;
    this.form.reset();
    console.log('Información del formulario:', this.form.value);
  }
}
