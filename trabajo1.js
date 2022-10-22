class Usuario {
    constructor(nombre,apellido,mascotas,libros ) {
    
      this.nombre = nombre;

      this.apellido = apellido;

      this.mascotas = mascotas;

      this.libros = libros;
    }
  
    getFullName() {
      console.log(`Apellido y Nombre:${this.apellido} ${this.nombre} `);
    }
    
    addMascota(mascota) {
      const misMascotas = [...mascotas, mascota];
      console.log(`Mascotas: ${[misMascotas]}`);
      return misMascotas;
    }
    
    getMascotas(misMascotas) {
      console.log(`${this.apellido} ${this.nombre} tiene: ${misMascotas.length} mascotas`);
    }
    
    addBook(book, autor) {
      const newBook = {
        Libro: book,
        Autor: autor,
      };
      const misLibros = [...libros, newBook];
      return misLibros;
    }
    getBooks(misLibros) {
      console.log("Lista de libros: ");
      return misLibros.map((milibro) => console.log(milibro.Libro +" autor:"+ milibro.Autor));
    }
  }
  
  
  const mascotas = ["perro", "loro","erizo"];
  
  let libros = [
    {
      Libro: "guerra de tronos",
      Autor: "juan",
    },
    {
      Libro: "star wars",
      Autor: "lucas",
    },
    {
      Libro: "dragon ball",
      Autor: "akira",
    },
    
  ];
  
  let medina = new Usuario("roberto", "medina", libros, mascotas);
  
  medina.getFullName();
  const misMascotas = medina.addMascota("gato");
  medina.getMascotas(misMascotas);
  const misLibros = medina.addBook("el señor de los anillos", "alex");
  medina.getBooks(misLibros);