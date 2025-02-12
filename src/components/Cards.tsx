import { Link } from "react-router-dom";
import { Movie } from "../pages/App";

export default function Cards({ id, poster_path, vote_average, release_date, title }: Movie) {
  return (
    <div className="min-w-36 md:min-w-44 flex flex-col items-center">
      <Link to={`/details/${id}`}><img className="relative z-0 w-full h-auto object-cover rounded-md" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} /></Link>
      <div className="relative w-full">
        <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center absolute -top-5 left-3">
          <svg className="w-8 h-8" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient-id" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f95090" />
                <stop offset="100%" stopColor="#fe93db" />
              </linearGradient>
            </defs>
            <circle cx={110} cy={110} r={100} className="fill-none stroke-[#fe93db40]" strokeWidth={20} />
            <circle cx={110} cy={110} r={100} className="fill-none" stroke="url(#gradient-id)" transform="rotate(-90 110 110)" strokeWidth={20} strokeDasharray={628} strokeDashoffset={628 - (vote_average * 62.8)} />
            <text x={110} y={130} fontSize={60} textAnchor="middle" fill="#ffffff">{vote_average.toFixed(1)}%</text>
          </svg>
        </div>
      </div>
      <div className="mt-4 text-sm text-center">
        <p>{title}</p>
        <p className="text-gray-400">{new Date(release_date).toDateString()}</p>
      </div>
    </div>
  )
}
