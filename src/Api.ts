import axios from "axios";

export const APIMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTg4NGFiMjQ4ZTcyMjVjODY1ODUxNWJmN2RkZWM3YiIsIm5iZiI6MTczOTA0MjYxMi4wNDEsInN1YiI6IjY3YTdhZjM0NTcxZDcwN2YxNGM4YmJlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUGpN9EYEalshJ0uYxGarCf6w9fIdOHkEXF0V0dBC5s"
  }
})
