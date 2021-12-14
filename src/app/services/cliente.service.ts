import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //  firestore: any;

    constructor(private firestore: AngularFirestore) { }


  agregarCliente(cliente: any): Promise <any>{
    return this.firestore.collection('cliente').add(cliente);

  }

  getClientes(): Observable<any> {
    // return this.firestore.collection('items').snapshotChanges();

    return this.firestore.collection('cliente', ref => ref.orderBy('nombre', 'asc')).snapshotChanges();

   
   }

}
