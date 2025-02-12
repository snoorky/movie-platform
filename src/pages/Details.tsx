import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import { APIMovies } from "../Api"

interface Movie {
  backdrop_path: string
  genres: MoviesGenres[]
  id: number
  overview: string
  poster_path: string
  release_date: string
  runtime: number
  title: string
  vote_average: number;
}

interface MoviesGenres {
  id: number
  name: string
}

export default function MovieDetails() {
  const [details, setDetails] = useState<Movie | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const fetchDetailsMovie = async () => await APIMovies.get(`movie/${id}?language=en-US`)
      .then((response => {
        setDetails(response.data)
      }))
    fetchDetailsMovie()
  }, [id])

  if (!details) return

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const background = `https://image.tmdb.org/t/p/original/${details?.backdrop_path}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className={`grow relative bg-cover bg-center md:bg-none px-8 py-12 text-center md:text-left md:px-24 w-full flex items-center`} style={{ backgroundImage: `url(${background})` }}>
        <div className="absolute w-full h-full bg-linear-to-r from-[#1f0a01] to-[#1f0a0ad6] inset-0 opacity-90"></div>
        <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-15">
          <img className="max-w-32 md:max-w-64 rounded" src={`https://image.tmdb.org/t/p/original/${details?.poster_path}`} alt={details?.title} />
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div>
              <h1 className="text-xl md:text-4xl font-bold">{details?.title}</h1>
              <div className="flex justify-center md:justify-start space-x-1">
                <p>{new Date(details?.release_date).toLocaleDateString()} (BR) •</p>
                <p>{formatRuntime(details?.runtime)}</p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-full w-20 h-20 flex items-center justify-center">
              <svg className="w-18 h-18" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient-id" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f95090" />
                    <stop offset="100%" stopColor="#fe93db" />
                  </linearGradient>
                </defs>
                <circle cx={110} cy={110} r={100} className="fill-none stroke-[#fe93db40]" strokeWidth={20} />
                <circle cx={110} cy={110} r={100} className="fill-none" stroke="url(#gradient-id)" transform="rotate(-90 110 110)" strokeWidth={20} strokeDasharray={628} strokeDashoffset={628 - details?.vote_average * 62.8} />
                <text x={110} y={130} fontSize={60} textAnchor="middle" fill="#ffffff">{details?.vote_average.toFixed(1)}%</text>
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-semibold">Overview</h2>
              <p>{details?.overview}</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-semibold">Categories</h2>
              <div className="flex gap-2">
                {details?.genres.map((genre) => (
                  <p className="bg-linear-to-r from-[#f9509080] to-[#fe93db80] hover:opacity-75 rounded-lg text-sm py-1 px-1 md:px-3" key={genre.id}>{genre.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
