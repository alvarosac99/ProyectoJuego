import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SeleccionPersonajeComponent } from './juego/seleccion-personaje/seleccion-personaje.component';
import { TarjetaComponent } from './juego/tarjeta/tarjeta.component';
import { MapasComponent } from './juego/mapas/mapas.component';
import { BienvenidaComponent } from './princpial/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionPersonajeComponent,
    TarjetaComponent,
    MapasComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}