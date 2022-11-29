console.group('Cuadrado') 

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.groupEnd('Cuadrado') 

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

function calcularAlturaTriangulo(lado1, base) {
if (lado1 == base) {
    console.warn("Este no es un triangulo isosceles");
  } else {
    // h = raizcuadrada(lado1**2 - (b**2)/2)
    return Math.sqrt( (lado1 ** 2) - ( (base ** 2) ) / 4 );
  }
}

function calcularAlturaTrianguloEscaleno(a, b, c) {
  let lado1;
  let lado2;
  let base;
  if (a >= b && a >= c) {
      base = a;
      lado1 = b;
      lado2 = c;
    } else if (b >= a && b >= c) {
      base = b;
      lado1 = a;
      lado2 = c;
      // return Math.sqrt( (lado1 ** 2) - ( (base ** 2) ) / 4 );
    } else {
      base = c;
      lado1 = a;
      lado2 = b;
    }
    //
    let sp = (a+b+c)/2
    // return Math.sqrt(sp * ((sp-a)*(sp-b)*(sp-c)))
    return Math.sqrt( (b**2)- ((((a**2)+(b**2)-(c**2))/(2*a))**2) )
  }

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd('Triangulo') 

console.group('Circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo
});

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2);
  return {
    circunferencia: diametro * Math.PI,
    area: radioAlCuadrado * Math.PI.toFixed(5),
  }
}

console.groupEnd('Circle')