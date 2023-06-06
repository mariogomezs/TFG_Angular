import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule,Routes } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { FormularioComponent } from './clientes/formulario.component'
import { FormGroup, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {path:'directivas',component:DirectivaComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'clientes/form',component:FormularioComponent},
  {path:'clientes/form/:id',component:FormularioComponent},
  {path:'inicioSesion',component:InicioSesionComponent},
  {path:'registro',component:LoginComponent},
  {path:'',redirectTo:'/inicioSesion',pathMatch:'full'}

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormularioComponent,
    LoginComponent,
    InicioSesionComponent,

    
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
