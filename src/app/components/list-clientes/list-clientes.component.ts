import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import * as ngxToastr from 'ngx-toastr';

import { MAT_DATE_FORMATS } from '@angular/material/core';

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


// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

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
  let promedio:number =0;
    for (let cliente of this.clientes){
           promedio = promedio + parseInt(cliente["edad"]);
    }
      promedio =promedio / this.clientes.length;
    
      return Math.round(promedio);   
  }

  deEdad():any {
    let promedio:number =0;
      for (let cliente of this.clientes){
             promedio = promedio + parseInt(cliente["edad"]);
      }
        promedio =promedio / this.clientes.length;
      
        return Math.round(promedio);   
    }



}
