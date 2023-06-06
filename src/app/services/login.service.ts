import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../inicio-sesion/usuario';
import { Observable, catchError, throwError } from 'rxjs';
import { UserLogin } from '../core/UserLogin';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
  private urlEndPoint:string='http://localhost:8080/usuarios'
  constructor(private http:HttpClient) { }
  registrar(usuario:UserLogin):Observable<any>{
      return this.http.post<any>(`${this.urlEndPoint}/registro`,usuario,{headers:this.httpHeaders})
       

  }}