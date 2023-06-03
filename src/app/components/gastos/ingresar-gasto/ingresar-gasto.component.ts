import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  nombreGasto:String;
  cantidad:number;
  formularioIncorrecto:boolean;
  textoIncorrecto: string


  constructor(private _presupuestoService: PresupuestoService ){
    this.nombreGasto = '';
    this.cantidad = 0
    this.formularioIncorrecto = false;
    this.textoIncorrecto = '';
  }

  agregarGasto(){

    if(this.cantidad > this._presupuestoService.restante){
      this.formularioIncorrecto = true
      this.textoIncorrecto = 'Cantidad ingresada es mayor al restante';
      return
    } else{

    }
    if(this.nombreGasto === '' || this.cantidad <= 0 ){
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'Nombre gasto o Cantidad Incorrecta';
  }else{

    //Creamos el objeto

    const GASTO = {
      nombre: this.nombreGasto,
      cantidad:this.cantidad
    }


    //Enviamos el objeto a los suscriptores via subjet
    this._presupuestoService.agregarGasto(GASTO);


    //reseteamos formulario
     this.formularioIncorrecto = false
     this.nombreGasto = '';
     this.cantidad = 0;
  }
  }


  ngOnInit():void{}
  
}
