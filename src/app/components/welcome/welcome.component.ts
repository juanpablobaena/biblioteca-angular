import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from "@angular/router";
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  items: MenuItem[] = [];
  responsiveOptions: any = [];
  books: any;
  action: any;

  constructor(private router: Router, private crudService: CrudService) {
    this.action = [
      { name: 'Reservar Libro'},
      { name: 'Queja'},
      { name: 'Petición'},
      { name: 'Reclamo'}
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.books = [
      {
        archivo: 'Libro 1.jpg',
        nombre: 'Harry Potter',
        estado: 'Disponible'
      },
      {
        archivo: 'Libro 2.jpg',
        nombre: 'La sombra del viento',
        estado: 'Disponible'
      },
      {
        archivo: 'Libro 3.jpg',
        nombre: 'Crepúsculo',
        estado: 'Disponible'
      },
      {
        archivo: 'Libro 4.jpg',
        nombre: 'Rayuela',
        estado: 'Disponible'
      },
      {
        archivo: 'Libro 5.jpg',
        nombre: 'Ana Frank',
        estado: 'Disponible'
      },
      {
        archivo: 'Libro 6.jpg',
        nombre: 'Don Quijote de la Mancha',
        estado: 'Disponible'
      },
    ];

    this.items = [
      {
        label: '<img src="../../../assets/img/primeng.svg">',
        escape: false,
      },
      {
        label: 'Novedades',
        icon: 'pi pi-heart'
      },
      {
        label: 'Valores',
        icon: 'pi pi-shield'
      },
      {
        label: 'Quienés somos',
        icon: 'pi pi-question'
      },
      {
        label: 'Contacto',
        icon: 'pi pi-send'
      }
    ];
  }

  iniciarSesion() {
    this.router.navigateByUrl('/login')
  }

}
