import { Component } from '@angular/core';
import { Client } from './client';
import { ClienteService } from './cliente.service';
import { Router,ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
   cliente:Client=new Client()
   titulo:string="Crear Cliente"
   constructor(private clienteService:ClienteService,private router:Router,private ActicateRoute:ActivatedRoute){}
   ngOnInit(): void {
    this.cargarCliente()
   }
   cargarCliente():void{
     this.ActicateRoute.params.subscribe(params=>{
      let id=params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente)=>this.cliente=cliente)
      }
     })
   }
   public create():void{
   this.clienteService.create(this.cliente).subscribe(cliente=>{
    this.router.navigate(['/clientes']) 
    Swal.fire('Nuevo',`Cliente creado con exito`,'success');
   })
   }
   update():void{
    this.clienteService.update(this.cliente).subscribe(
      cliente=>{
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente Actualizado',`Cliente actualizado con exito`,'success');
      }
    )
   }
   
  
}
