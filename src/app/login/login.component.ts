import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
      formRegister:FormGroup
      constructor(private formBuilder:FormBuilder, private login:LoginService,private router:Router){
        this.formRegister=this.formBuilder.group({})
      }
      ngOnInit(): void {
        this.formRegister=this.formBuilder.group({
          nombre:['',Validators.required],
          email:['',Validators.required],
          contrasena:['',Validators.required]
        })
      }
      registro() {
        if (this.formRegister.valid) {
          const usuario = {
            nombre:this.formRegister.get('nombre')?.value,
            email: this.formRegister.get('email')?.value,
            contrasena: this.formRegister.get('contrasena')?.value
          };
          
          this.login.registrar(this.formRegister.value).subscribe(
            (response) => {
              console.log(response)
              this.router.navigate(['inicioSesion']);
            },
            (error) => {
              console.log(error)
            }
          );
        }
      }
}
