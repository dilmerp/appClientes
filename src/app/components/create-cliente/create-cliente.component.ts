import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service';


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

 
@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class CreateClienteComponent implements OnInit {
  createCliente: FormGroup;
  submitted = false;
  loading = false;
  titulo = 'Agregar Cliente';

  constructor(private fb: FormBuilder,
    private _clienteService: ClienteService,
    private router: Router,

    private aRoute: ActivatedRoute) {
    this.createCliente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      fechaNac: ['', Validators.required ]
    })
  }

  ngOnInit(): void {

  }

  agregarCliente() {
    const cliente: any = {
      nombre: this.createCliente.value.nombre,
      apellido: this.createCliente.value.apellido,
      edad: this.createCliente.value.edad,
      fechaNac: this.createCliente.value.fechaNac
    }
    this.loading = true;
    this._clienteService.agregarCliente(cliente).then(() => {
          this.loading = false;
      this.router.navigate(['/list-clientes']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }









}