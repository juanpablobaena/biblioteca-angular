import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Libro } from "../interfaces/Libro";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = 'http://localhost/biblioteca/indexBooks.php';
  APIUsers: string = 'http://localhost/biblioteca/indexUsers.php';

  constructor(private clientService:HttpClient) { }

  addBook(datasBook:Libro):Observable<any> {
    return this.clientService.post(this.API+"?insertar=1",datasBook);
  }

  getBook() {
    return this.clientService.get(this.API);
  }

  deleteBook(isbn:any):Observable<any> {
    return this.clientService.get(this.API+"?borrar="+isbn);
  }

  editBook(isbn:any, datasBook:any):Observable<any> {
    return this.clientService.post(this.API+"?actualizar="+isbn,datasBook);
  }

  validateUser() {
    return this.clientService.get(this.APIUsers);
  }

}
