import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  formulario: FormGroup;
  mensaje: string;
  constructor(private formbuilder: FormBuilder, private _api: ConexionService, private route:Router) {
    this.formulario = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      try {
        this._api
          .login(this.formulario.value.email, this.formulario.value.password)
          .subscribe((res:any) => {
            console.log(res);
            this._api._nombreUsuario.next('Cerrar Sesion');
            this._api._usuarioLogueado.next(true);
            this.route.navigate(['market']);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Revisa los campos, alguno no esta bien');
    }
  }
}
