import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionPersonajeComponent } from './juego/seleccion-personaje/seleccion-personaje.component';
import { TarjetaComponent } from './juego/tarjeta/tarjeta.component';
import { MapasComponent } from './juego/mapas/mapas.component';
import { BienvenidaComponent } from './princpial/bienvenida/bienvenida.component';

const routes: Routes = [

  { path: 'home', component: BienvenidaComponent },
  { path: 'juego', component: SeleccionPersonajeComponent },
  { path: 'mapas/:personaje', component: MapasComponent },
  { path: '**', component: BienvenidaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
