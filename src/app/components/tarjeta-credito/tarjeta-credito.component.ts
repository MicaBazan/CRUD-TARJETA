import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrl: './tarjeta-credito.component.css'
})

export class TarjetaCreditoComponent{
  listTarjetas: any[] = [
    { titular: 'Juan Perez', numeroTarjeta: '25251565464', fechaExpiracion: '11/23', cvv: '123'},
    { titular: 'Miguel Gonzalez', numeroTarjeta: '98769565464', fechaExpiracion: '11/24', cvv: '312'}
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      titular: [''],
      numeroTarjeta: [''],
      fechaExpiracion: [''],
      cvv: ['']
    })
  }

  ngOnInit(): void {

  }


  agregarTarjeta() {
    console.log(this.form);

    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }

    this.listTarjetas.push(tarjeta);
    this.form.reset();

  }
}
