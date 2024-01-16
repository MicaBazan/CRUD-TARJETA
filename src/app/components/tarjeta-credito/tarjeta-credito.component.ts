import { Component, OnInit } from '@angular/core';

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
}
