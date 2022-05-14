import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label: '<img src="../../../assets/img/primeng.svg">',
        escape: false,
        routerLink: '/home'
      },
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/home',

      },
      {
        label: 'Libros',
        icon: 'pi pi-book',
        routerLink: '/listar-libro'
      },
      {
        label: 'Alumnos',
        icon: 'pi pi-user'
      },
      {
        label: 'Reservas',
        icon: 'pi pi-folder-open'
      }
    ];
  }

  validarcierre() {
    Swal.fire({
      title: 'Cerrar sesión',
      icon: 'question',
      html: '¿Está seguro que desea cerrar sesión?',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Salir',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/login');
      }
    })
  }
  
}
