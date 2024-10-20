import { Component } from '@angular/core';
import { Mapa } from '../Mapa';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent {
  mostrarTarjeta: boolean = false;
  seleccion: number = 0
  funcionMostrarTarjeta() {
    if (this.mostrarTarjeta) {
      this.mostrarTarjeta = false;
    }
    else {
      this.mostrarTarjeta = true;
    }
  }

  mapas: Mapa[] = [];


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      this.mapas.push(new Mapa(i));
      console.log(this.mapas[i]);
    }
    console.log(this.route.snapshot.paramMap.get('personaje'));

  }

}
