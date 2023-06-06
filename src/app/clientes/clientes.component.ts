import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
   clientes:Client[]
  constructor(private clientesService:ClienteService){
    
    
  }

  ngOnInit() {
   this.clientesService.getClientes().subscribe(
    (clientes)=>this.clientes=clientes
   );
  }
  delete(cliente:Client):void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro de que quieres eliminar?',
      text: "No hay vuelta atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clientesService.delete(cliente.id).subscribe(
          response=>{
            this.clientes=this.clientes.filter(cli=>cli!==cliente)
            Swal.fire(
              'Borrado',
              `Borrado correctamente`,
              'success'
            )
          }
        )
       
      } 
    })
  }
 
}
