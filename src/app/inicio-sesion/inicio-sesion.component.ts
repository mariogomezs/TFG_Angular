import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InicioSesionService } from '../services/inicio-sesion.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
     formLogin:FormGroup
      constructor(private formBuilder: FormBuilder, private inicioSesionService: InicioSesionService,private router: Router) {
        this.formLogin = this.formBuilder.group({});
      }
      ngOnInit(): void {
        this.formLogin=this.formBuilder.group({
          email:['',Validators.required],
          contrasena:['',Validators.required]
        });
            }

          
      inicioSesion() {
              if (this.formLogin.valid) {
                const usuario = {
                  email: this.formLogin.get('email')?.value,
                  contrasena: this.formLogin.get('contrasena')?.value
                };
                
                this.inicioSesionService.inicioSesion(this.formLogin.value).subscribe(
                  (response) => {
                    console.log(response)
                    this.router.navigate(['clientes'])
                  },
                  (error) => {
                    console.log(error)
                  }
                );
              }
            }
}
