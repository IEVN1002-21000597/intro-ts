class Figura {
    puntos: Punto[];

    constructor(puntos: Punto[]) {
        this.puntos = puntos;
    }

    calcularDistancia(p1: Punto, p2: Punto): number {
        const deltaX = p1.x - p2.x;
        const deltaY = p1.y - p2.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
}

class Punto {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Triangulo extends Figura {
    constructor(p1: Punto, p2: Punto, p3: Punto) {
        super([p1, p2, p3]);
    }

    calcularDistancias(): { d12: number; d23: number; d31: number } {
        const [p1, p2, p3] = this.puntos;
        const d12 = this.calcularDistancia(p1, p2);
        const d23 = this.calcularDistancia(p2, p3);
        const d31 = this.calcularDistancia(p3, p1);
        return { d12, d23, d31 };
    }

    esTriangulo(): boolean {
        const { d12, d23, d31 } = this.calcularDistancias();
        return (d12 + d23 > d31) && (d23 + d31 > d12) && (d31 + d12 > d23);
    }
}
const punto1 = new Punto(0, 0);
const punto2 = new Punto(4, 0);
const punto3 = new Punto(0, 3);

const triangulo = new Triangulo(punto1, punto2, punto3);

const { d12, d23, d31 } = triangulo.calcularDistancias();

console.log(`Distancia entre punto1 y punto2: ${d12}`);
console.log(`Distancia entre punto2 y punto3: ${d23}`);
console.log(`Distancia entre punto3 y punto1: ${d31}`);

// Verificar si los puntos forman un triángulo
if (triangulo.esTriangulo()) {
    console.log("Los puntos forman un triángulo.");
} else {
    console.log("Los puntos NO forman un triángulo.");
}



