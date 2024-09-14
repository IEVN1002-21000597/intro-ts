class Punto{
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    calcularDistancia(otroPunto: Punto): number {
        const deltaX = this.x - otroPunto.x;
        const deltaY = this.y - otroPunto.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
}

const punto1 = new Punto(3, 4);
const punto2 = new Punto(7, 1);
const distancia = punto1.calcularDistancia(punto2);
console.log(`La distancia entre los puntos es: ${distancia}`);


