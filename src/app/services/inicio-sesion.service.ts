import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../inicio-sesion/usuario';
import { Client } from '../clientes/client';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {
 private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
 private urlEndPoint:string='http://localhost:8080/usuarios'
  constructor(private httpCliente:HttpClient){}
  inicioSesion(usuario:Usuario):Observable<any>{
    return this.httpCliente.post<any>(`${this.urlEndPoint}/login`,usuario,{headers:this.httpHeaders})
  }
}
