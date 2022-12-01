import { useState } from "react";

const initialState = [
  {
    id: "tt0111161",
    rank: "1",
    title: "The Shawshank Redemption",
    fullTitle: "The Shawshank Redemption (1994)",
    year: "1994",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
    imDbRating: "9.2",
    imDbRatingCount: "2665115",
  },
  {
    id: "tt0068646",
    rank: "2",
    title: "The Godfather",
    fullTitle: "The Godfather (1972)",
    year: "1972",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
    imDbRating: "9.2",
    imDbRatingCount: "1846900",
  },
  {
    id: "tt0468569",
    rank: "3",
    title: "The Dark Knight",
    fullTitle: "The Dark Knight (2008)",
    year: "2008",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
    imDbRating: "9.0",
    imDbRatingCount: "2638109",
  },
  {
    id: "tt0071562",
    rank: "4",
    title: "The Godfather Part II",
    fullTitle: "The Godfather Part II (1974)",
    year: "1974",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
    imDbRating: "9.0",
    imDbRatingCount: "1264956",
  },
  {
    id: "tt0050083",
    rank: "5",
    title: "12 Angry Men",
    fullTitle: "12 Angry Men (1957)",
    year: "1957",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
    imDbRating: "9.0",
    imDbRatingCount: "787078",
  },
  {
    id: "tt0108052",
    rank: "6",
    title: "Schindler's List",
    fullTitle: "Schindler's List (1993)",
    year: "1993",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
    imDbRating: "8.9",
    imDbRatingCount: "1349515",
  },
  {
    id: "tt0167260",
    rank: "7",
    title: "The Lord of the Rings: The Return of the King",
    fullTitle: "The Lord of the Rings: The Return of the King (2003)",
    year: "2003",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Peter Jackson (dir.), Elijah Wood, Viggo Mortensen",
    imDbRating: "8.9",
    imDbRatingCount: "1837349",
  },
  {
    id: "tt0110912",
    rank: "8",
    title: "Pulp Fiction",
    fullTitle: "Pulp Fiction (1994)",
    year: "1994",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Quentin Tarantino (dir.), John Travolta, Uma Thurman",
    imDbRating: "8.8",
    imDbRatingCount: "2039983",
  },
  {
    id: "tt0120737",
    rank: "9",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    fullTitle: "The Lord of the Rings: The Fellowship of the Ring (2001)",
    year: "2001",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Peter Jackson (dir.), Elijah Wood, Ian McKellen",
    imDbRating: "8.8",
    imDbRatingCount: "1866479",
  },
  {
    id: "tt0060196",
    rank: "10",
    title: "The Good, the Bad and the Ugly",
    fullTitle: "The Good, the Bad and the Ugly (1966)",
    year: "1966",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Sergio Leone (dir.), Clint Eastwood, Eli Wallach",
    imDbRating: "8.8",
    imDbRatingCount: "759544",
  },
  {
    id: "tt0109830",
    rank: "11",
    title: "Forrest Gump",
    fullTitle: "Forrest Gump (1994)",
    year: "1994",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Robert Zemeckis (dir.), Tom Hanks, Robin Wright",
    imDbRating: "8.8",
    imDbRatingCount: "2065790",
  },
  {
    id: "tt0137523",
    rank: "12",
    title: "Fight Club",
    fullTitle: "Fight Club (1999)",
    year: "1999",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "David Fincher (dir.), Brad Pitt, Edward Norton",
    imDbRating: "8.7",
    imDbRatingCount: "2110533",
  },
  {
    id: "tt0167261",
    rank: "13",
    title: "The Lord of the Rings: The Two Towers",
    fullTitle: "The Lord of the Rings: The Two Towers (2002)",
    year: "2002",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Peter Jackson (dir.), Elijah Wood, Ian McKellen",
    imDbRating: "8.7",
    imDbRatingCount: "1659053",
  },
  {
    id: "tt1375666",
    rank: "14",
    title: "Inception",
    fullTitle: "Inception (2010)",
    year: "2010",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Christopher Nolan (dir.), Leonardo DiCaprio, Joseph Gordon-Levitt",
    imDbRating: "8.7",
    imDbRatingCount: "2337822",
  },
  {
    id: "tt0080684",
    rank: "15",
    title: "Star Wars: Episode V - The Empire Strikes Back",
    fullTitle: "Star Wars: Episode V - The Empire Strikes Back (1980)",
    year: "1980",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Irvin Kershner (dir.), Mark Hamill, Harrison Ford",
    imDbRating: "8.7",
    imDbRatingCount: "1287007",
  },
  {
    id: "tt0133093",
    rank: "16",
    title: "The Matrix",
    fullTitle: "The Matrix (1999)",
    year: "1999",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Lana Wachowski (dir.), Keanu Reeves, Laurence Fishburne",
    imDbRating: "8.7",
    imDbRatingCount: "1904192",
  },
  {
    id: "tt0099685",
    rank: "17",
    title: "Goodfellas",
    fullTitle: "Goodfellas (1990)",
    year: "1990",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Martin Scorsese (dir.), Robert De Niro, Ray Liotta",
    imDbRating: "8.7",
    imDbRatingCount: "1155120",
  },
  {
    id: "tt0073486",
    rank: "18",
    title: "One Flew Over the Cuckoo's Nest",
    fullTitle: "One Flew Over the Cuckoo's Nest (1975)",
    year: "1975",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Milos Forman (dir.), Jack Nicholson, Louise Fletcher",
    imDbRating: "8.6",
    imDbRatingCount: "1004958",
  },
  {
    id: "tt0114369",
    rank: "19",
    title: "Se7en",
    fullTitle: "Se7en (1995)",
    year: "1995",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "David Fincher (dir.), Morgan Freeman, Brad Pitt",
    imDbRating: "8.6",
    imDbRatingCount: "1642815",
  },
  {
    id: "tt0047478",
    rank: "20",
    title: "Seven Samurai",
    fullTitle: "Seven Samurai (1954)",
    year: "1954",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Akira Kurosawa (dir.), Toshirô Mifune, Takashi Shimura",
    imDbRating: "8.6",
    imDbRatingCount: "345815",
  },
];

export const useMovie = (filters) => {
  const [state, setState] = useState(initialState);

  const onClearFilters = () => {
    setState(initialState);
  };

  const onApply = () => {
    console.log("filter click")
  };

  return {
    list: state,
    clearMovieFilters: onClearFilters,
    applyFilters: onApply,
  };
};
