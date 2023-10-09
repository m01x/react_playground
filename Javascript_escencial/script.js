const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*Mi codigo below

const book = getBook(3);

//const title = book.title;
//const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author, genres);

//Este codigo
//const primaryGenre = genres[0];
//const secondaryGenre = genres[1];
//hace lo mismo que esto
const [primaryGenre, secondaryGenre] = genres;

console.log(primaryGenre, secondaryGenre);

const nuevoGenero = [...genres, "epic fantasy"];
nuevoGenero;

const updatedBook = { ...book, moviePublicationDate: "2001-12-19", pages: 30 };
updatedBook;
//Patrones literales con Ternarios.

//Vamos a incluir una funcion de flecha
const getArrowYear = (str) => str.split("-")[0];

const summary = `${title} , a ${pages}-page long book, was written by ${author} and published in ${getArrowYear(
  publicationDate
)}. The book
has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary;

//2 funciones que hacen lo mismo, es buena practica utilizar funciones de flecha para definir funciones de una sola linea.
//Esta funcion recibe un string "1995-12-12" y retorna hasta el split, osea "1995".
//function getYear(str) {
//  return str.split("-")[0];
//}

//arrow function
// const getArrowYear = (str) => str.split("-")[0];
// console.log(getArrowYear(publicationDate));

//Short circuiting, comparaciones

//recuerden que 0 es falsy!!
// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data or is 0";
// countWrong;

//Optional chaining
//vamos a realizar una funcion que cuente todas las review counts de Goodread y Librarything (supongo que son com rottentomatoes!) de los libros de nuestor arreglo de ejercicio.
//Creamos una funcion

function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}
console.log(getTotalReviewCount(book));
*/

// ARRAY MAP METHODS

const books = getBooks();

//map function es llamada por cada uno de los elementos del arreglo, ejecutando una funcion (callback) por cada elemento.
const x = [1, 2, 3, 4, 5].map((numero) => numero * 2);
console.log(x);

const titulos = books.map((book) => book.title);
titulos;

//En una funcion de flecha, cuando utilizamos { } , la funcion de flecha piensa que es un bloque de declaracion, asique esto no retornara un objeto.
function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewCount: getTotalReviewCount(book),
}));

essentialData;

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//Array reduce methos ; One method to rule them all 💍======================================
const pagesAllBooks = books.reduce(
  (acumulador, book) => acumulador + book.pages,
  0
);
pagesAllBooks;

//Sort Array ====================================================
const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b);
sorted;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

//Arreglos inmutables============================================
//1) Add nuevo objeto libro al array
const newBook = {
  id: 6,
  title: "Harry potter and the Chamber of Secrets",
  author: "J.K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//2) Borrar un objeto libro del array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;
//Aqui podriamos usar esta linea en una funcion y reemplazar el 3, por el ID que queramos eliminar de la lista.

//3) Actualizar el array con nuevos valroes para el objeto libro.
//Esta funcion utilizando map no devolvera nada cuando el id sea 1, estamos devolviendo un objeto vacio {}. ylo guardara en un nuevo objeto booksAfterUpdate
//Tip: Usamos map porque devuelve un array del mismo lenght que el array principal, basandose en el. Como q lo copia...
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;
