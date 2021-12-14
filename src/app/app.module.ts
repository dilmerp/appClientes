import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Moudulos
// Moudulos
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { ReactiveFormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Componente
import { AppComponent } from './app.component';
import { CreateClienteComponent } from './components/create-cliente/create-cliente.component';
import { ListClientesComponent } from './components/list-clientes/list-clientes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { MatInputModule } from '@angular/material/input';
   
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';





@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,   
    MaterialModule,
    

    
  ],
  
  declarations: [
    AppComponent,
    ListClientesComponent,
    CreateClienteComponent,
    NavbarComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
