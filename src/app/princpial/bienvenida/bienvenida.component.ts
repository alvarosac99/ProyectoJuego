import { Component } from '@angular/core';
import { Personaje } from 'src/app/juego/Personajes';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})



export class BienvenidaComponent {

  cantidadPersonjes: number = Personaje.getCantidadPersonajes();
  if(cantidadPersonjes < 6) {

  }
  desbloquearPersonaje() {
    this.mostrarOso = false;
    Personaje.desbloquearPersonaje();
  }

}
