import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { ListarLibroComponent } from './components/libro/listar-libro/listar-libro.component';
import { LoginComponent } from './components/login/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: InicioComponent,
  },
  {
    path: 'listar-libro',
    component: ListarLibroComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
