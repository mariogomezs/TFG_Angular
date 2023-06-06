import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable, map,catchError } from 'rxjs';
import { of,throwError } from 'rxjs';
import{HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
  private urlEndPoint:string='http://localhost:8080/api/clientes'
  constructor(private http:HttpClient,private router:Router) { }
  getClientes():Observable<Client[]>{
      return this.http.get<Client[]>(this.urlEndPoint).pipe(map(response=>response as Client[]))
  }
  create(cliente:Client):Observable<Client>{
    return this.http.post<Client>(this.urlEndPoint,cliente,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al crear al cliente',e.error.mensaje,'error')
        return throwError(()=>e);
      })
    )
  }
  getCliente(id):Observable<Client>{
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`).pipe(catchError(e=>{
      this.router.navigate(['/clientes'])
      console.log(e.error.mensaje)
      Swal.fire('Error al editar',e.error.mensaje,'error')
      return throwError(()=>e);
    }))
  }
  update(cliente:Client):Observable<Client>{
    return this.http.put<Client>(`${this.urlEndPoint}/${cliente.id}`,cliente,{headers:this.httpHeaders}).pipe(catchError(e=>{
      this.router.navigate(['/clientes'])
      console.log(e.error.mensaje)
      Swal.fire('Error al actualizar',e.error.mensaje,'error')
      return throwError(()=>e);
    }))
  }
  delete(id:number):Observable<Client>{
    return this.http.delete<Client>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders}).pipe(catchError(e=>{
      this.router.navigate(['/clientes'])
      console.log(e.error.mensaje)
      Swal.fire('Error al eliminar',e.error.mensaje,'error')
      return throwError(()=>e);
    }))
  }
}
