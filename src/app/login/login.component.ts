import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from './service/login-service.service';
import { usuario } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: usuario[] = [];

  constructor(private formBuilder: FormBuilder,
    private loginservice: LoginServiceService,
    private router: Router) {
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loginservice.getData().subscribe(data => {
      this.user = data.usuarios;
    });
  }

  validate(): void {
    let currentpassword: string = this.form.controls['password'].value;
    let currentname: string = this.form.controls['user'].value;
    let x = this.user.filter(x => x.password == currentpassword && x.nombre == currentname);
    if(x.length > 0){
      this.router.navigate(['/admin']);
    }else{
      alert("Informacion Incorrecta");
    }
    console.log(this.user);
  }
  
}
