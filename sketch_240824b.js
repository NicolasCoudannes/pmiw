let c, c2, c3; // color de los rombos
let n, n2, n3; // color de los cuadrados
let x1, x2, x3, x4; // posicion x de los rombos
let y1, y2, y3, y4; // posicion y de los rombos
let xr, yr; // posicion de los cuadrados

function preload() {
  img = loadImage('https://raw.githubusercontent.com/NicolasCoudannes/ipmi/tp3/tp3/data/opar.jpeg');
}

function setup() {
  createCanvas(800, 400);
  c = 0;
  n = 255;
}


function draw() {
  image(img, 0, 0);
  xr = 400;
  yr = 0;
  
  // fondo de cuadrados
  for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 4; k++) {
      if (n == 0 || n == 255) {
        fill(n, n, n);
      } else {
        fill(n, n2, n3);
      }
      square(xr, yr, 100);
      if (n == 0 || n == 255) {
        cambiarn();
      }
      xr+= 100;
    }
    if (n == 0 || n == 255) {
      cambiarn();
    }
    xr = 400;
    yr+= 100;
  }
  
  // rombos moviles
  x1 = 400;
  x2 = 450;
  x3 = 500;
  x4 = 450;
  y1 = 50;
  y2 = 0;
  y3 = 50;
  y4 = 100;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (c == 0 || c == 255) {
        fill(c, c, c);
      } else {
        fill(c, c2, c3);
      }
      quad(retornarX(x1), retornarY(y1), retornarX(x2), retornarY(y2), retornarX(x3), retornarY(y3), retornarX(x4), retornarY(y4));
      if (c == 0 || c == 255) {
        cambiar();
      }
      x1 += 100;
      x2 += 100;
      x3 += 100;
      x4 += 100;
    }
    if (c == 0 || c == 255) {
      cambiar();
    }
    x1 = 400;
    x2 = 450;
    x3 = 500;
    x4 = 450;
    y1 += 100;
    y2 += 100;
    y3 += 100;
    y4 += 100;
  }
  
  // rombos estaticos
  x1 = 400;
  x2 = 450;
  x3 = 500;
  x4 = 450;
  y1 = 50;
  y2 = 0;
  y3 = 50;
  y4 = 100;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j <4; j++) {
      if (c == 0 ||c == 255) {
        fill(c, c, c);
      } else {
        fill(c, c2, c3);
      }
      quad(x1, y1, x2, y2, x3, y3, x4, y4);
      if (c == 0 || c == 255) {
        cambiar();
      }
      x1 += 100;
      x2 += 100;
      x3 += 100;
      x4 += 100;
    }
    if (c == 0 || c == 255) {
      cambiar();
    }
    x1 = 400;
    x2 = 450;
    x3 = 500;
    x4 = 450;
    y1 += 100;
    y2 += 100;
    y3 += 100;
    y4 += 100;
  }
  
  // boton de reset
  fill(0);
  square(10, 10, 40);
  fill(255);
  textSize(15);
  text("reset", 15, 30);
}

function mousePressed(c, n) {
  randcolor(c, n);
  if (mouseX > 10 && mouseX < 50 && mouseY > 10 && mouseY < 50) {
    reset(c, n)
  }
}

function retornarX(x) {
  return x + mouseX * 0.1 - 50;
}
function retornarY(y) {
  return y + mouseY * 0.1 - 15;
}

function cambiar() {
  if (c == 0) {
    c = 255;
  } else {
    c = 0;
  }
}

function cambiarn() {
  if (n == 0) {
    n = 255;
  } else {
    n = 0;
  }
}

function reset() {
  c = 0;
  n = 255;
}

function randcolor(c_ant, n_ant) {
  c = random(255);
  while (c_ant == c) {
    c = random(255);
  }
  c2 = int(random(255));
  while (c_ant == c2) {
    c2 = random(255);
  }
  c3 = random(255);
  while (c_ant == c3) {
    c3 = random(255);
  }
  n = random(255);
  while (n_ant == n) {
    n = random(255);
  }
  n2 = random(255);
  while (n_ant == n2) {
    n2 = random(255);
  }
  n3 = random(255);
  while (n_ant == n3) {
    n3 = random(255);
  }
}
