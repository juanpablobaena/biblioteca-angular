import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { CrudService } from 'src/app/service/crud.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styleUrls: ['./listar-libro.component.css']
})
export class ListarLibroComponent implements OnInit {
  @ViewChild('bk') bk: Table | undefined;

  dialogCreate: boolean = false;
  dialogEdit: boolean = false;
  statuses: any[] = [];
  formBook: FormGroup;
  books: any;
  isbnEdit: any;

  constructor(public fb: FormBuilder, private crudService:CrudService, private router:Router) { 
    this.formBook = this.fb.group({
      nombre: ['', Validators.required],
      editorial: ['', Validators.required],
      anio: ['', Validators.required],
      autor: ['', Validators.required],
      estado: ['', Validators.required],
    })
  }
  
  ngOnInit(): void {
    this.crudService.getBook().subscribe(resp => {
      this.books = resp;
    });
  }

  new() {
    this.formBook.reset();
    this.dialogCreate = true;
  }

  new_edit(book: any) {
    this.dialogEdit = true;
    this.formBook.controls['nombre'].setValue(book.nombre);
    this.formBook.controls['editorial'].setValue(book.editorial);
    this.formBook.controls['estado'].setValue(book.estado);
    this.formBook.controls['anio'].setValue(book.anio);
    this.formBook.controls['autor'].setValue(book.autor);
    this.isbnEdit = book.isbn;
  }

  delete(isbn: any) {
    Swal.fire({
      title: 'Eliminar',
      icon: 'warning',
      html: '¿Está seguro que desea eliminar el libro?',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      confirmButtonColor: 'red',
      focusConfirm: false,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
          this.crudService.deleteBook(isbn).subscribe();
          window.location.reload();
      }
    })
  }

  applyFilterGlobal($event: any, value: any) {
    this.bk!.filterGlobal(($event.target as HTMLInputElement).value, value);
  }
  
  hideDialog() {
    this.formBook.reset();
    this.dialogCreate = false;
  }

  hideEdit() {
    this.formBook.reset();
    this.dialogEdit = false;
  }

  createBook() {
    if(this.formBook.valid) {
      this.crudService.addBook(this.formBook.value).subscribe();
      this.hideDialog();
      Swal.fire({
        title: 'Libro creado con éxito',
        icon: 'success',
        showCloseButton: true,
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        }
      })
    } else {
      this.hideDialog();
      Swal.fire({
        title: 'Error al crear',
        icon: 'error',
        html: 'Por favor diligencia todos los campos ',
        showCloseButton: true,
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {
            this.dialogCreate = true;
        }
      })
    }
  }

  editBook() {
    if(this.formBook.valid) {
      this.crudService.editBook(this.isbnEdit, this.formBook.value).subscribe();
      this.hideEdit();
      Swal.fire({
        title: 'Libro editado con éxito',
        icon: 'success',
        showCloseButton: true,
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        }
      })
    }
  }



}
