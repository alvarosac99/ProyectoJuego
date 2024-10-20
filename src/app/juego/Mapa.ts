export class Mapa {
    nombre: String;
    imagen: String;
    descripcion: String;
    imagenPerfil: String;

    constructor(id: Number) {
        switch (id) {
            case 0:
                this.nombre = 'Super Mario World';
                this.imagen = 'assets/SMW.png';
                this.descripcion = 'El icónico mapa de Super Mario World de la SNES';
                this.imagenPerfil = 'assets/SMW.png';
                break;
            case 1:
                this.nombre = 'New Super Mario Bros U';
                this.imagen = 'assets/NSMBU.png';
                this.descripcion = 'El icónico mapa de New Super Mario Bros U de la Wii U y Nintendo Switch';
                this.imagenPerfil = 'assets/NSMBU.png';
                break;
            case 2:
                this.nombre = 'Super Mario Bros';
                this.imagen = 'assets/SMB.png';
                this.descripcion = 'El clásico mapa del primer Super Mario Bros de la NES';
                this.imagenPerfil = 'assets/SMB.png';
                break;
            case 3:
                this.nombre = 'Space Land (Mario Party 2)';
                this.imagen = 'assets/MP2.png';
                this.descripcion = 'El emblematico mapa Space Land de la saga Mario Party';
                this.imagenPerfil = 'assets/MP2.png';
                break;

            default:
                this.nombre = '';
                this.imagen = '';
                this.descripcion = '';
                this.imagenPerfil = '';
        }
    }
}