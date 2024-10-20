import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../Personajes';
import { Mapa } from '../Mapa';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() seleccion!: Personaje | Mapa;
  @Output() cerrar = new EventEmitter<void>();


  volver() {
    this.cerrar.emit();
  }
}
