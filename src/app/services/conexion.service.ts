import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConexionService {
  api = 'https://localhost:7289/';

  public _usuarioLogueado: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public usuarioLogueado$ = this._usuarioLogueado.asObservable();

  public _nombreUsuario: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  public nombreUsuario$ = this._nombreUsuario.asObservable();

  constructor(private http: HttpClient) {}

  login(email:string, password:string) {
    const data = {
      email: email,
      password: password,
    };
    return this.http.post<any>(this.api + 'api/User/login/', data);
  }

  logou(){

  }

  getProducts(){
    return this.http.get(
      'https://localhost:7289/api/Product/getProductsByRange?numI=0&numF=100'
    );
  }
}
