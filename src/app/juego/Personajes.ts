export class Personaje {

    nombre: String;
    imagen: String;
    descripcion: String;
    imagenPerfil: String


    private static personajesDesbloqueados: number = 5;

    static getCantidadPersonajes(): number {
        return this.personajesDesbloqueados;
    }

    static desbloquearPersonaje(): void {
        this.personajesDesbloqueados++
    }

    constructor(id: number) {
        switch (id) {
            case 0:
                this.nombre = 'Mario';
                this.imagen = 'assets/mario.gif';
                this.descripcion = 'El héroe principal del Reino Champiñon. Mario es muy positivo y siempre está alegre ' +
                    'Lo podrás reconocer por sus overoles de color azul, su gorra roja y su característico bigote. La princesa ' +
                    'Peach lo considera su amigo de confianza, y todo el mundo los conoce a él y a su hermano Luigi por sus actos de valentía.';
                this.imagenPerfil = 'assets/mario.png';
                break;

            case 1:
                this.nombre = 'Luigi';
                this.imagen = 'assets/luigi.gif';
                this.descripcion = 'El hermano menor de Mario, Luigi es un valiente fontanero que siempre está dispuesto a ayudar a su hermano en sus aventuras. ' +
                    'Con su icónico sombrero verde y su mono azul, Luigi puede ser un poco tímido, pero no subestimes su determinación. Es conocido por su habilidad ' +
                    'para saltar más alto que Mario y su agilidad en los momentos críticos.';
                this.imagenPerfil = 'assets/luigi.png';
                break;

            case 2:
                this.nombre = 'Peach';
                this.imagen = 'assets/peach.gif';
                this.descripcion = 'La Princesa Peach es la gobernante del Reino Champiñon. Conocida por su vestido rosa y su diadema, a menudo es capturada por Bowser, ' +
                    'pero también demuestra ser valiente y capaz de liderar su pueblo en la lucha contra el mal.';
                this.imagenPerfil = 'assets/peach.png';
                break;

            case 3:
                this.nombre = 'Bowser'
                this.imagen = 'assets/bowser.gif';
                this.descripcion = 'Bowser es el rey de los Koopas y el principal antagonista del Reino Champiñon. Con su gran tamaño y caparazón espinoso, busca constantemente ' +
                    'capturar a la Princesa Peach y conquistar el reino mediante su astucia y fuerza bruta.';
                this.imagenPerfil = 'assets/bowser.png';
                break;

            case 4:
                this.nombre = 'Huesitos'
                this.imagen = 'assets/huesitos.gif';
                this.descripcion = 'Huesitos es un enemigo esquelético del Reino Champiñon. Se desplaza ágilmente y puede reconstituirse después de ser derrotado. Su presencia es ' +
                    'común en castillos y lugares oscuros, donde ataca a los héroes con sorpresas.';
                this.imagenPerfil = 'assets/huesitos.png';
                break;

            case 5:
                this.nombre = 'Funky Kong';
                this.imagen = 'assets/funkyKong.gif';
                this.descripcion = 'Funky es un mecánico muy hábil que crea muchos vehículos y otros inventos a partir de materiales limitados, a saber, barriles';
                this.imagenPerfil = 'assets/funkyKong.png';
                break;

            default:
                this.nombre = 'Unknown';
                this.imagen = 'assets/.gif';
                this.descripcion = '???';
                this.imagenPerfil = 'assets/.png';
        }
    }
}
