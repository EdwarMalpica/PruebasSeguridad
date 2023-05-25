import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  usuarioLogueado = false;
  nombreUsuario = "Login";
  constructor(private _api:ConexionService){

  }
  ngOnInit(): void {
    this._api.usuarioLogueado$.subscribe(log=>{
      this.usuarioLogueado = log;
    })
    this._api.nombreUsuario$.subscribe(nom=>{
      this.nombreUsuario = nom;
    })
  }

}
