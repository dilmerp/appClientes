import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


import { MAT_DATE_FORMATS } from '@angular/material/core';
import { RouteConfigLoadEnd } from '@angular/router';

export let promedioEdad: number = 0;

//<Dilmer Palomino Pardo - 20211217>


export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
}

//var promedio=0;

import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})


export class ListClientesComponent implements OnInit {
  clientes: any[] = [];
 constructor(private _ClienteService: ClienteService ) {

}

  ngOnInit(): void {

      this.getClientes()
  }

   getClientes(): void {
     this._ClienteService.getClientes().subscribe(data => {
       this.clientes = [];
       data.forEach((element: any) => {
         this.clientes.push({
           id: element.payload.doc.id,
           ...element.payload.doc.data()
         })
       });
      console.log(this.clientes);
     });
   }

   
 edadpromedio():any {
  let promedio:number=0;
  

    for (let cliente of this.clientes){
           promedio = promedio + parseFloat(cliente["edad"]);
    }
      promedio = promedio / this.clientes.length;
      promedioEdad=promedio;
      return promedio.toFixed(2); 
  }

  DesviacionStandar():any {
    let sumatoria:number=0;
    let varianza:number=0;

    let n:number =this.clientes.length;

    for (let i=0; i<n;i++){
      for (let cliente of this.clientes){
        sumatoria=Math.pow(parseFloat(cliente["edad"]) - promedioEdad,2);
        varianza = varianza + sumatoria;
      }
      varianza = varianza / n;
    }   

    return Math.sqrt(varianza).toFixed(2);
    
  }
}
