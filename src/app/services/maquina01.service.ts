import { Injectable } from '@angular/core';
import { Maquina01 } from '../models/maquina01.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Maquina01Service {

  private nombreUsuarioKey: string = '';

  private url: string = 'http://localhost:8080/Administrador';


  constructor(private http: HttpClient) {}

  getAll(): Observable<Maquina01[]> {
    return this.http.get<Maquina01[]>(this.url+'/'+'Administradores');
  }
//------------------------------------------------------------------------------
  public buscarMaquina01(busqueda: string) {
    return this.http.get(`${this.url}/buscar?nombre=${busqueda}`);
  }

  setNombreUsuario(nombre: string) {
    localStorage.setItem(this.nombreUsuarioKey, nombre);
  }

  getNombreUsuario() {
    return localStorage.getItem(this.nombreUsuarioKey) ?? '';
  }

//------------------------------------------------------------------------------
  create(maquina01: Maquina01): Observable<Maquina01> {
    return this.http.post<Maquina01>(this.url+'/guardar', maquina01);
  }

  get(id:number):Observable<Maquina01>{
    return this.http.get<Maquina01>(this.url+'/AdministradorAct/'+id);
  }

  update(maquina01: Maquina01): Observable<Maquina01> {
    return this.http.put<Maquina01>(this.url+'/Admin', maquina01);
  }

  delete(id:number):Observable<Maquina01>{
    return this.http.delete<Maquina01>(this.url+'/AdminDel'+'/'+id);
  }
}
