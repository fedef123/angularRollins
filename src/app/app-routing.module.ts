import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { ProductosComponent } from './paginas/productos/productos.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
