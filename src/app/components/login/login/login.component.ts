import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CrudService } from 'src/app/service/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUser: FormGroup;
  users: any;

  constructor(private route:Router, private fb:FormBuilder, private crudService: CrudService) {
    this.formUser = this.fb.group({
      nombre_usuario: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
   }

  ngOnInit(): void {}
  
  login() {
    if(this.formUser.valid) {
      this.crudService.validateUser().subscribe(resp => {
        this.users = resp;
        if(this.users[0].nombre_usuario === this.formUser.controls['nombre_usuario'].value &&
          this.users[0].contrasenia === this.formUser.controls['contrasenia'].value) {
            this.route.navigateByUrl('/home');
        } else {
          Swal.fire({
            title: 'Error al ingresar',
            icon: 'error',
            html: 'Usuario o contraseña no coinciden',
            showCloseButton: true,
            confirmButtonText: 'Ok',
          })
        }
      });
    } else {
      Swal.fire({
        title: 'Error al ingresar',
        icon: 'error',
        html: 'Por favor diligencia todos los campos ',
        showCloseButton: true,
        confirmButtonText: 'Ok',
      })
    }
  }

}
