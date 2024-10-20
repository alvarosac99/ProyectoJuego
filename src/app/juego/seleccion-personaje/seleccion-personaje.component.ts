import { Component } from '@angular/core';
import { Personaje } from '../Personajes';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-seleccion-personaje',
  templateUrl: './seleccion-personaje.component.html',
  styleUrls: ['./seleccion-personaje.component.css']
})
export class SeleccionPersonajeComponent {
  personajes: Personaje[] = [];

  personajeSeleccion = 0;
  mostrarTarjeta: boolean = false;

  // INICIO
  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.personajes.push(new Personaje(i));
    }
  }

  // PERSONAJE ANTERIOR
  prevPersonaje() {
    this.personajeSeleccion--;
    if (this.personajeSeleccion < 0) {
      this.personajeSeleccion = this.personajes.length - 1;
    }
  }

  // PERSONAJE SIGUIENTE
  nextPersonaje() {
    this.personajeSeleccion++;
    if (this.personajeSeleccion >= this.personajes.length) {
      this.personajeSeleccion = 0;
    }
  }

  //MOSTRAR TARJETA
  funcionMostrarTarjeta() {
    if (this.mostrarTarjeta) {
      this.mostrarTarjeta = false;
    }
    else {
      this.mostrarTarjeta = true;
    }

  }

  constructor(private router: Router) { }

  jugar() {
    this.router.navigate(['/mapas', this.personajes[this.personajeSeleccion].nombre]);
  }
}
