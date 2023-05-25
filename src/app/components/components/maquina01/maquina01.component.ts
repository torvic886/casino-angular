import { Component, OnInit } from '@angular/core';
import { Maquina01 } from 'src/app/models/maquina01.model';
import { Maquina01Service } from 'src/app/services/maquina01.service';

@Component({
  selector: 'app-maquina01',
  templateUrl: './maquina01.component.html',
  styleUrls: ['./maquina01.component.css']
})
export class Maquina01Component implements OnInit {



  titulo:string="Lista de Usuarios";
  public cargando = false;
  public totalRegistros = 0;
  public pagina = 1;
  public isUsuarios = true;


  maquina01s: Maquina01[] = [];

  constructor(private maquina01Service:Maquina01Service) { }

  ngOnInit(): void {
    this.maquina01Service.getAll().subscribe(
      e => this.maquina01s=e
   )
  }

  delete(maquina01:Maquina01):void{

    const Swal = require('sweetalert2');
    Swal.fire({
      title: 'Usuario Eliminado!',
      text: 'El usuario ha sido eliminado correctamente!',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    this.maquina01Service.delete(maquina01.id_maquina_01).subscribe(
       res=>this.maquina01Service.getAll().subscribe(
        response=>this.maquina01s=response
       )
    );
  }

  public buscarMaquina01(busqueda: string) {
    console.log('busqueda: ', busqueda);
    if(busqueda !== '') {
      this.cargando = true;
      this.maquina01Service.buscarMaquina01(busqueda).subscribe((resp: any) => {
        this.cargando = false;
        console.log('resp: ',resp);
        if(resp.length !== 0) {
          console.log('USUARIOS: ',resp);
          this.maquina01s = resp;
          this.totalRegistros = resp.length;
          this.pagina = 1;
        }
      }, error => {
        this.cargando = false;
        // this.alert.showAlert('Usuarios',error.error, 'error');
      });
    } else {
      // this.obtenerUsuarios();
      this.maquina01Service.getAll().subscribe(
        e => this.maquina01s=e
     )
    }
  }

}
