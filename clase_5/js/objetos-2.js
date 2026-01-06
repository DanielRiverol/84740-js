function Libro(titulo, autor, precio, stock) {
  this.titulo = titulo;
  this.autor = autor;
  this.precio = precio;
  this.stock = stock;

  //   metodos = funciones
  this.vender = function (cantidad) {
    this.stock = this.stock - cantidad;
    return this.precio * cantidad;
  };
  this.mostrarInfo = function () {
    return "Titulo:" + this.titulo + " " + "Autor: " + this.autor;
  };
}

const libro1 = new Libro(
  "Harry Potter y la piedra filosofal",
  "JK Rowling",
  12000,
  10
);
console.log(libro1.stock);

console.log(libro1.vender(2));
console.log(libro1.stock);

const libro2 = new Libro("Harry Potter 2", "JK Rowling", 15000, 15);
console.log(libro2.stock);

console.log(libro2.vender(2));
console.log(libro2.stock);

console.log(libro1.mostrarInfo());
console.log(libro2.mostrarInfo());
